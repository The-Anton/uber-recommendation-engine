var map = null;
var boxpolys = null;
var directions = null;
var routeBoxer = null;
var distance = null; // km
var service = null;
var gmarkers = [];
var boxes = null;
var infowindow = new google.maps.InfoWindow();

// check for Geolocation support
if (navigator.geolocation) {
  console.log("Geolocation is supported!");
} else {
  console.log("Geolocation is not supported for this Browser/OS.");
}

window.onload = function () {
  var startPos;
  var geoOptions = {
    enableHighAccuracy: true,
  };

  var geoSuccess = function (position) {
    startPos = position;
    latitude = startPos.coords.latitude;
    longitude = startPos.coords.longitude;
    google.maps.event.addDomListener(
      window,
      "load",
      initialize(latitude, longitude)
    );
  };
  var geoError = function (error) {
    console.log("Error occurred. Error code: " + error.code);
    // error.code can be:
    //   0: unknown error
    //   1: permission denied
    //   2: position unavailable (error response from location provider)
    //   3: timed out
  };

  navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
};

function initialize(latitude, longitude) {
  // Default the map view to the continental U.S.
  var mapOptions = {
    center: new google.maps.LatLng(latitude, longitude),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 12,
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  service = new google.maps.places.PlacesService(map);

  routeBoxer = new RouteBoxer();

  directionService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer({
    map: map,
  });

  // If there are any parameters at eh end of the URL, they will be in  location.search
  // looking something like  "?marker=3"

  // skip the first character, we are not interested in the "?"
  var query = location.search.substring(1);

  // split the rest at each "&" character to give a list of  "argname=value"  pairs
  var pairs = query.split("&");
  for (var i = 0; i < pairs.length; i++) {
    // break each pair at the first "=" to obtain the argname and value
    var pos = pairs[i].indexOf("=");
    var argname = pairs[i].substring(0, pos).toLowerCase();
    var value = pairs[i].substring(pos + 1).toLowerCase();

    // process each possible argname  -  use unescape() if theres any chance of spaces
    if (argname == "to") {
      document.getElementById("to").value = unescape(value);
    }
    if (argname == "from") {
      document.getElementById("from").value = unescape(value);
    }
    if (argname == "dist") {
      document.getElementById("distance").value = parseFloat(value);
    }
    if (argname == "type") {
      document.getElementById("type").value = unescape(value);
    }
    if (argname == "keyword") {
      document.getElementById("keyword").value = unescape(value);
    }
    if (argname == "name") {
      document.getElementById("name").value = unescape(value);
    }
    if (argname == "submit") {
      route();
    }
  }
}

function route() {
  // Clear any previous route boxes from the map
  clearBoxes();

  // Convert the distance to box around the route from miles to km
  distance = parseFloat(document.getElementById("distance").value) * 1.609344;

  var request = {
    origin: document.getElementById("from").value,
    destination: document.getElementById("to").value,
    travelMode: google.maps.DirectionsTravelMode.DRIVING,
  };

  // Make the directions request
  directionService.route(request, function (result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsRenderer.setDirections(result);

      // Box around the overview path of the first route
      var path = result.routes[0].overview_path;
      boxes = routeBoxer.box(path, distance);
      // alert(boxes.length);
      drawBoxes();
      findPlaces(0);
    } else {
      alert("Directions query failed: " + status);
    }
  });
}

// Draw the array of boxes as polylines on the map
function drawBoxes() {
  boxpolys = new Array(boxes.length);
  for (var i = 0; i < boxes.length; i++) {
    boxpolys[i] = new google.maps.Rectangle({
      bounds: boxes[i],
      fillOpacity: 0,
      strokeOpacity: 1.0,
      strokeColor: "#000000",
      strokeWeight: 1,
      map: map,
    });
  }
}

function findPlaces(searchIndex) {
  var type = document.getElementById("type").value;
  var keyword = document.getElementById("keyword").value;
  var name = document.getElementById("name").value;
  var request = {
    bounds: boxes[searchIndex],
  };
  if (!!type && type != "") {
    if (type.indexOf(",") > 0) request.types = type.split(",");
    else request.types = [type];
  }
  if (!!keyword && keyword != "") request.keyword = keyword;
  if (!!name && name != "") request.name = name;
  service.nearbySearch(request, function (results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      document.getElementById("side_bar").innerHTML +=
        "bounds[" +
        searchIndex +
        "] returns " +
        results.length +
        " results<br>";

      console.log(results);
      for (var i = 0, result; (result = results[i]); i++) {
        var marker = createMarker(result);
        if(i<3){
          aggregateData(result);
          console.log(result);
        }
      }
    } else {
      document.getElementById("side_bar").innerHTML +=
        "bounds[" +
        searchIndex +
        "] returns 0 results<br>&nbsp;status=" +
        status +
        "<br>";
    }
    if (status != google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
      searchIndex++;
      if (searchIndex < boxes.length) findPlaces(searchIndex);
    } else {
      // delay 1 second and try again
      setTimeout("findPlaces(" + searchIndex + ")", 1000);
    }
  });
}

// Clear boxes currently on the map
function clearBoxes() {
  if (boxpolys != null) {
    for (var i = 0; i < boxpolys.length; i++) {
      boxpolys[i].setMap(null);
    }
  }
  boxpolys = null;
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  if (place.icon) {
    var image = new google.maps.MarkerImage(
      place.icon,
      new google.maps.Size(71, 71),
      new google.maps.Point(0, 0),
      new google.maps.Point(17, 34),
      new google.maps.Size(25, 25)
    );
  } else
    var image = {
      url: "https://maps.gstatic.com/intl/en_us/mapfiles/markers2/measle.png",
      size: new google.maps.Size(7, 7),
      anchor: new google.maps.Point(3.5, 3.5),
    };

  var marker = new google.maps.Marker({
    map: map,
    icon: image,
    position: place.geometry.location,
  });
  var request = {
    reference: place.reference,
  };
  google.maps.event.addListener(marker, "click", function () {
    service.getDetails(request, function (place, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        var contentStr =
          "<h5>" + place.name + "</h5><p>" + place.formatted_address;
        if (!!place.formatted_phone_number)
          contentStr += "<br>" + place.formatted_phone_number;
        if (!!place.website)
          contentStr +=
            '<br><a target="_blank" href="' +
            place.website +
            '">' +
            place.website +
            "</a>";
        contentStr += "<br>" + place.types + "</p>";
        infowindow.setContent(contentStr);
        infowindow.open(map, marker);
      } else {
        var contentStr = "<h5>No Result, status=" + status + "</h5>";
        infowindow.setContent(contentStr);
        infowindow.open(map, marker);
      }
    });
  });
  gmarkers.push(marker);
  if (!place.name) place.name = "result " + gmarkers.length;
  var side_bar_html =
    "<a href='javascript:google.maps.event.trigger(gmarkers[" +
    parseInt(gmarkers.length - 1) +
    '],"click");\'>' +
    place.name +
    "</a><br>";
  document.getElementById("side_bar").innerHTML += side_bar_html;
}

function calculateUberFare(latitude, longitude) {}

function rederSuggestedData(final_data) {
  let results = final_data; //JSON.parse(final_data);
  console.log("results- " + results);
  document.getElementById("area").innerHTML += `<div>
              <iframe width="412" height="232" src="https://www.youtube.com/embed/${final_data[0].items[0].id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <iframe width="412" height="232" src="https://www.youtube.com/embed/${final_data[0].items[1].id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>`;
}

function aggregateData(key) {
  return new Promise((resolve, reject) => {
    const getYouTubeResult = new Promise((resolve, reject) => {
      const query = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=${key}&type=video&key=AIzaSyCPEtuFv56vKRM_Cb2MTSuP3_87Mc20Cuo`;
      const search_google_api = `https://serpapi.com/search.json?q=${key}&hl=en&gl=us&google_domain=google.com&api_key=f70cce2ec221209bcd45af4533adbbc51c51b682c29251b618061115c6e95d5c`;
      fetch(query, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch(function (err) {
          console.log("Fetch Error :-S", err);
          reject(err);
        });
    });

    Promise.all([getYouTubeResult]).then((final_data) => {
      console.log(JSON.stringify(final_data));
      resolve(rederSuggestedData(final_data));
    });
  });
}
