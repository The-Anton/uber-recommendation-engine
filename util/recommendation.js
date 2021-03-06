
let ACTION_TIME_MAPPING = {
    "early-morning": ["hiking", "hindu_temple", "mosque", "church", "park", "gym"],
    "late-morning": ["hiking", "hindu_temple", "mosque", "church", "park", "gym"],
    "early-afternoon": ["restaurant", "meal_delivery", "food"],
    "late-afternoon":["restaurant", "meal_delivery", "food"],
    "early-evening": ["movie_theater"],
    "late-evening": ["park", "gym", "movie_theater"],
    "early-night": ["restaurant", "cafe", "movie_theater"],
    "late-night": ["casino", "bar", "lodging", "hotel", "night_club"]
} 

function getCurrentAction(){
    let time = new Date();
    let currentHour = time.getHours();

    if(currentHour > 5 && currentHour < 9) return "early-morning";
    if(currentHour > 9 && currentHour < 12) return "late-morning";
    if(currentHour > 12 && currentHour < 14) return "early-afternoon";
    if(currentHour > 14 && currentHour < 16) return "late-afternoon";
    if(currentHour > 16 && currentHour < 18) return "early-evening";
    if(currentHour > 18 && currentHour < 19) return "late-evening";
    if(currentHour > 19 && currentHour < 21) return "early-night";
    if(currentHour > 21 && currentHour < 24) return "late-night";

}

module.exports = {
    ACTION_TIME_MAPPING,
    getCurrentAction
}

