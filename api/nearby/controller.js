const mongoose = require('mongoose');
const asyncHandler = require("../../middleware/async");

const axios = require('axios');

const results = [
  {
      "business_status": "OPERATIONAL",
      "geometry": {
          "location": {
              "lat": 18.6063448,
              "lng": 73.8747882
          },
          "viewport": {
              "northeast": {
                  "lat": 18.6077071802915,
                  "lng": 73.87547749999999
              },
              "southwest": {
                  "lat": 18.6050092197085,
                  "lng": 73.87272030000001
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "OAC",
      "opening_hours": {
          "open_now": false
      },
      "place_id": "ChIJATco0xDHwjsRW5j57i3moEs",
      "price_level": 1,
      "rating": 3.5,
      "reference": "ChIJATco0xDHwjsRW5j57i3moEs",
      "scope": "GOOGLE",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ],
      "user_ratings_total": 63,
      "vicinity": "JV4F+GWM, Dighi, Pune"
  },
  {
      "business_status": "OPERATIONAL",
      "geometry": {
          "location": {
              "lat": 18.6047825,
              "lng": 73.8747039
          },
          "viewport": {
              "northeast": {
                  "lat": 18.6062482802915,
                  "lng": 73.8754416
              },
              "southwest": {
                  "lat": 18.6035503197085,
                  "lng": 73.87249080000001
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Thapa canteen",
      "opening_hours": {
          "open_now": false
      },
      "place_id": "ChIJv7C_PV3HwjsRQEBikHh6TKM",
      "plus_code": {
          "compound_code": "JV3F+WV Pimpri-Chinchwad, Maharashtra, India",
          "global_code": "7JCMJV3F+WV"
      },
      "rating": 4,
      "reference": "ChIJv7C_PV3HwjsRQEBikHh6TKM",
      "scope": "GOOGLE",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ],
      "user_ratings_total": 1,
      "vicinity": "AIT Road, Dighi, Pimpri-Chinchwad"
  },
  {
      "business_status": "OPERATIONAL",
      "geometry": {
          "location": {
              "lat": 18.6046926,
              "lng": 73.8741641
          },
          "viewport": {
              "northeast": {
                  "lat": 18.6059415302915,
                  "lng": 73.8750302302915
              },
              "southwest": {
                  "lat": 18.6032435697085,
                  "lng": 73.87233226970849
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Food Court",
      "opening_hours": {
          "open_now": false
      },
      "photos": [
          {
              "height": 4032,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/110248606196650131690\">Pankaj Repswal</a>"
              ],
              "photo_reference": "Aap_uEDyBsvu9Opl6iXGHKCw_AG5xmVtkmdV-JKZgOxBJZOuJdKM7CUoFU9aEXdYrKKI-AULRV0IJpFaj0-woyUKCYwlgqQr70vrGCNIER-MfQnw_QC8BA7sBLsHaUHhJyTOdaz3KrW6z2mJBWyPrg8MLxD9k25ZCGqaGvu2UrzcmjbSazlX",
              "width": 3024
          }
      ],
      "place_id": "ChIJf9gy4PXHwjsRI1iPhko8ZSM",
      "rating": 1,
      "reference": "ChIJf9gy4PXHwjsRI1iPhko8ZSM",
      "scope": "GOOGLE",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ],
      "user_ratings_total": 1,
      "vicinity": "JV3F+VMF, Dighi, Pune"
  },
  {
      "business_status": "OPERATIONAL",
      "geometry": {
          "location": {
              "lat": 18.6129507,
              "lng": 73.87490129999999
          },
          "viewport": {
              "northeast": {
                  "lat": 18.6143128802915,
                  "lng": 73.8762041802915
              },
              "southwest": {
                  "lat": 18.6116149197085,
                  "lng": 73.87350621970849
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "POULTRY MAN",
      "opening_hours": {
          "open_now": false
      },
      "photos": [
          {
              "height": 1080,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/105056335805979605769\">Nikhil Kamble</a>"
              ],
              "photo_reference": "Aap_uEASl7SOCX0-8qg8kS8mdWDQWAL4thweaShArhaUTG4uSmnyOYkldYcTTDItkm-BHfQcDdH1fGksmxIUWKKkQo4xdbpcXAzl18W5AmeWI7gTw3XWPb1Yn6XCXCw_9dwJsR9iXoTN9mx28VVn36oc6ZMHTvJ6JEr66V9r3pAea5i5kHJu",
              "width": 1920
          }
      ],
      "place_id": "ChIJX61qbXXHwjsRQdV3BWb7Wm0",
      "rating": 4.5,
      "reference": "ChIJX61qbXXHwjsRQdV3BWb7Wm0",
      "scope": "GOOGLE",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ],
      "user_ratings_total": 8,
      "vicinity": "JV7F+5XJ, Dighi Gaonthan, Dighi, Pimpri-Chinchwad"
  },
  {
      "business_status": "OPERATIONAL",
      "geometry": {
          "location": {
              "lat": 18.6127598,
              "lng": 73.8728421
          },
          "viewport": {
              "northeast": {
                  "lat": 18.6141654802915,
                  "lng": 73.8741825802915
              },
              "southwest": {
                  "lat": 18.6114675197085,
                  "lng": 73.87148461970848
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Bismillah Biryani",
      "opening_hours": {
          "open_now": false
      },
      "photos": [
          {
              "height": 3456,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/115645027872384296998\">Govind Mishra</a>"
              ],
              "photo_reference": "Aap_uED_AMrUz-SNe_ji_Z42JTS1NUljnICtyVVMFPeUlw5f7TG8lBnrnw1t4CNZohP06PfIyQCVJU7T9R4pElCb0m-LJ0P3Ui9W819UZm1LCspVUn1hRLSEejQ4VKpky7e999JqsStCTGNYfGEFEzm5bAko5NT-hByBkgAClpA1xdLpkmU0",
              "width": 4608
          }
      ],
      "place_id": "ChIJcbrPjWnHwjsRd3bgG51aQuw",
      "rating": 3.8,
      "reference": "ChIJcbrPjWnHwjsRd3bgG51aQuw",
      "scope": "GOOGLE",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ],
      "user_ratings_total": 12,
      "vicinity": "JV7F+444, Dighi, Pune"
  },
  {
      "business_status": "CLOSED_TEMPORARILY",
      "geometry": {
          "location": {
              "lat": 18.601019,
              "lng": 73.872843
          },
          "viewport": {
              "northeast": {
                  "lat": 18.60236688029151,
                  "lng": 73.8741840802915
              },
              "southwest": {
                  "lat": 18.5996689197085,
                  "lng": 73.87148611970849
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "A -1 Chinese Corner",
      "permanently_closed": true,
      "photos": [
          {
              "height": 384,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/116480322949993640079\">Prathamesh Kadam</a>"
              ],
              "photo_reference": "Aap_uEAWKx-TbOh3-kScYVYXPMBqDrtJ2BtzqdoyZ8g6lrdRH3BbLno4EtrD4ZKrbsHEneOF3Fbdt4khJh3xasJaWEf9gTdt1eTWHUuzorZESdvyUPeqrroF2pijlP6DUoskGT6wUuSyH9I09cB7puDjyVy4bpusZ6n0Jfj2kvTv7NHApMUD",
              "width": 384
          }
      ],
      "place_id": "ChIJt4y9IhbHwjsResadPcel1Og",
      "plus_code": {
          "compound_code": "JV2F+C4 Pune, Maharashtra, India",
          "global_code": "7JCMJV2F+C4"
      },
      "rating": 4,
      "reference": "ChIJt4y9IhbHwjsResadPcel1Og",
      "scope": "GOOGLE",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ],
      "user_ratings_total": 1,
      "vicinity": "Alandi Road, Dighi, Pune"
  },
  {
      "business_status": "OPERATIONAL",
      "geometry": {
          "location": {
              "lat": 18.601019,
              "lng": 73.872843
          },
          "viewport": {
              "northeast": {
                  "lat": 18.60236688029151,
                  "lng": 73.8741840802915
              },
              "southwest": {
                  "lat": 18.5996689197085,
                  "lng": 73.87148611970849
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Vijay Food Corner",
      "opening_hours": {
          "open_now": false
      },
      "place_id": "ChIJt4y9IhbHwjsRpR0JD60MyhI",
      "plus_code": {
          "compound_code": "JV2F+C4 Pune, Maharashtra, India",
          "global_code": "7JCMJV2F+C4"
      },
      "rating": 1,
      "reference": "ChIJt4y9IhbHwjsRpR0JD60MyhI",
      "scope": "GOOGLE",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ],
      "user_ratings_total": 1,
      "vicinity": "Solar Park, Shop no. 10, Datta Nagar, Pune Alandi road, Dighi, Pune"
  },
  {
      "business_status": "OPERATIONAL",
      "geometry": {
          "location": {
              "lat": 18.6129725,
              "lng": 73.8732646
          },
          "viewport": {
              "northeast": {
                  "lat": 18.6142743302915,
                  "lng": 73.8746293302915
              },
              "southwest": {
                  "lat": 18.6115763697085,
                  "lng": 73.87193136970849
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Hotel Jivala",
      "opening_hours": {
          "open_now": false
      },
      "photos": [
          {
              "height": 3000,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/108282035099147042987\">lucky maru</a>"
              ],
              "photo_reference": "Aap_uEBA7wcbpstrXfT_l3q0s_S68TnyBVJloF9r-4FciVhsgW5yVuSff_y2fwez5AiM1y3jPJEbzOaE3T6IplTOJzKhTW6a8iE_Liyttpc8z-Yt6DxnD1k2jq4sr62uChKXk4hcM7scEBU2l1fav2cNc2LywE4cwqxDvdLnper2SyE923T5",
              "width": 4000
          }
      ],
      "place_id": "ChIJubtCuWzHwjsRCCQxEb831RI",
      "plus_code": {
          "compound_code": "JV7F+58 Pimpri-Chinchwad, Maharashtra, India",
          "global_code": "7JCMJV7F+58"
      },
      "rating": 3.5,
      "reference": "ChIJubtCuWzHwjsRCCQxEb831RI",
      "scope": "GOOGLE",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ],
      "user_ratings_total": 6,
      "vicinity": "P.M.P.M.L Bus Stop, Bhosari Sambhaji Nagar, Dighi Gaonthan, Dighi, Pimpri-Chinchwad"
  },
  {
      "business_status": "OPERATIONAL",
      "geometry": {
          "location": {
              "lat": 18.6131399,
              "lng": 73.8730537
          },
          "viewport": {
              "northeast": {
                  "lat": 18.6145204302915,
                  "lng": 73.87434793029151
              },
              "southwest": {
                  "lat": 18.6118224697085,
                  "lng": 73.8716499697085
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Zaika Family Restaurant",
      "opening_hours": {
          "open_now": false
      },
      "photos": [
          {
              "height": 3456,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/113056311709559062416\">Akshay Vadgave</a>"
              ],
              "photo_reference": "Aap_uEDtCMxJBPigAzpqQxBDy5_VnIf4QyOodCDxgwztwCh-TcBibEK6U0recTdsxHf3ECeUztpp8979I4ogdYDRBZZvtZNrm6CW94tjs-5ZyuCji7EZM4QuXV88wHV9yivaaOMcWx4NIA7OeNc9T2Fv5DeDhAWwes2MjNpXJ5Un2T-DhoSE",
              "width": 4608
          }
      ],
      "place_id": "ChIJbRMwiw7HwjsRtT4D_Prrt8o",
      "plus_code": {
          "compound_code": "JV7F+76 Pune, Maharashtra, India",
          "global_code": "7JCMJV7F+76"
      },
      "rating": 4,
      "reference": "ChIJbRMwiw7HwjsRtT4D_Prrt8o",
      "scope": "GOOGLE",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ],
      "user_ratings_total": 66,
      "vicinity": "Shop no. 2 Opp, Dighi Zakat Naka, Alandi Road, Dighi, Pune"
  },
  {
      "business_status": "CLOSED_TEMPORARILY",
      "geometry": {
          "location": {
              "lat": 18.6131596,
              "lng": 73.8730559
          },
          "viewport": {
              "northeast": {
                  "lat": 18.6145302802915,
                  "lng": 73.87434903029151
              },
              "southwest": {
                  "lat": 18.6118323197085,
                  "lng": 73.87165106970849
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Hotel Maratha | Veg And Nonveg",
      "permanently_closed": true,
      "place_id": "ChIJi_ndPg7HwjsRh8MCDTGn5lI",
      "plus_code": {
          "compound_code": "JV7F+76 Pune, Maharashtra, India",
          "global_code": "7JCMJV7F+76"
      },
      "rating": 5,
      "reference": "ChIJi_ndPg7HwjsRh8MCDTGn5lI",
      "scope": "GOOGLE",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ],
      "user_ratings_total": 2,
      "vicinity": "opposite Suzuki showroom, Dighi jakat naka, opposite Suzuki showroom, Alandi Road, Pune"
  },
  {
      "business_status": "CLOSED_TEMPORARILY",
      "geometry": {
          "location": {
              "lat": 18.6133913,
              "lng": 73.8730207
          },
          "viewport": {
              "northeast": {
                  "lat": 18.6147542802915,
                  "lng": 73.8743717302915
              },
              "southwest": {
                  "lat": 18.6120563197085,
                  "lng": 73.87167376970849
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Devansh Dhaba Kolhapuri Tadka",
      "permanently_closed": true,
      "photos": [
          {
              "height": 1080,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/102237665215075317691\">Deepak Rathod</a>"
              ],
              "photo_reference": "Aap_uEBnX4K_KV1hvnKawiTq4s9tuaG4qogsGBrKEk0h1QF6Wobi3w-J-dKxpK0PbN9Jm5we4PScPmKFNpG2BO4Akn6nBFmiEXVex7c6duUi8tNSOaqdxkJomtoO6Jvi-ICc1K8hcUKd88soEs9H4G5Bio6jc13Jz_yK59P-gV5YGq3nxCZL",
              "width": 1920
          }
      ],
      "place_id": "ChIJAQwWxJ7HwjsRRZKxM0dvboE",
      "reference": "ChIJAQwWxJ7HwjsRRZKxM0dvboE",
      "scope": "GOOGLE",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ],
      "vicinity": "JV7F+962, Dighi Gaonthan, Dighi, Pimpri-Chinchwad"
  },
  {
      "business_status": "OPERATIONAL",
      "geometry": {
          "location": {
              "lat": 18.6133616,
              "lng": 73.8727011
          },
          "viewport": {
              "northeast": {
                  "lat": 18.6147149802915,
                  "lng": 73.87411958029151
              },
              "southwest": {
                  "lat": 18.6120170197085,
                  "lng": 73.87142161970849
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Hotel New Jivahala",
      "opening_hours": {
          "open_now": false
      },
      "photos": [
          {
              "height": 3120,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/109562422651408556359\">shailesh kumar sahu</a>"
              ],
              "photo_reference": "Aap_uEANzo3W-Xf9_rOqdZ8SLrLXBpyHx2yGZljSpUmp-4ch4rukYlxG2vAj-8UD2I6udX1axj7HJKqm9Ny_sY-FuoDPXmWRPohqFA0WE0VcpOzOrq8Q4rlXPKR2EJB9lu4JePmULnApe6eCofOSAh0i5Rw4FJ6dSMR6JSGZsgJtu32gmAbo",
              "width": 4160
          }
      ],
      "place_id": "ChIJdf2yag7HwjsRN0l-dz2ZI_g",
      "plus_code": {
          "compound_code": "JV7F+83 Pune, Maharashtra, India",
          "global_code": "7JCMJV7F+83"
      },
      "rating": 4,
      "reference": "ChIJdf2yag7HwjsRN0l-dz2ZI_g",
      "scope": "GOOGLE",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ],
      "user_ratings_total": 8,
      "vicinity": "Near Dighi Toll, Dighi, Pune"
  },
  {
      "business_status": "OPERATIONAL",
      "geometry": {
          "location": {
              "lat": 18.6135593,
              "lng": 73.8771072
          },
          "viewport": {
              "northeast": {
                  "lat": 18.6149102302915,
                  "lng": 73.8784453302915
              },
              "southwest": {
                  "lat": 18.6122122697085,
                  "lng": 73.87574736970849
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Taslima Chicken Centre",
      "opening_hours": {
          "open_now": false
      },
      "photos": [
          {
              "height": 3000,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/105696964389804984894\">TASLIMA CHICKEN CENTER Najrul</a>"
              ],
              "photo_reference": "Aap_uED0F8kBOdWcBNghdx3P0sb78gW32-VlfV3D7kKFgrUp2dcRNHXVap7zP3EoMGWS75zO1EqV-u3vq1a6Sps28Ps9x5Mqyr1jOchLEVCv9cmrINRhLlvzgUdng4ERQON5fndssdy2Ts600nIbYlAhR7MK73v19RaK-7-CuRUx4PP-5Yu6",
              "width": 4000
          }
      ],
      "place_id": "ChIJLQ7QvgjHwjsRgQiRrVt3QOA",
      "plus_code": {
          "compound_code": "JV7G+CR Pimpri-Chinchwad, Maharashtra, India",
          "global_code": "7JCMJV7G+CR"
      },
      "rating": 3.9,
      "reference": "ChIJLQ7QvgjHwjsRgQiRrVt3QOA",
      "scope": "GOOGLE",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ],
      "user_ratings_total": 10,
      "vicinity": "Colony Number 6, Choudhary Park, Vijay Nagar, Dighi, Pimpri-Chinchwad"
  },
  {
      "business_status": "OPERATIONAL",
      "geometry": {
          "location": {
              "lat": 18.6137155,
              "lng": 73.87684000000002
          },
          "viewport": {
              "northeast": {
                  "lat": 18.6150724302915,
                  "lng": 73.87814103029152
              },
              "southwest": {
                  "lat": 18.6123744697085,
                  "lng": 73.87544306970851
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Yaa Rab Chicken Center",
      "photos": [
          {
              "height": 4160,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/108505291905200530408\">Adil Shaikh</a>"
              ],
              "photo_reference": "Aap_uEA6dajENCpAKmsrH_fbhU4JdYwHvbAbMt16JhSAxwkEYPPjusWLFL6lt6X-r0HTgrcs2t8j_SoRzqgeKm4ApbjjE8ieAoZ0D7TRPthYpRHakXaTYriBf8Q6orkc-j5zKIc7eU73_OK9tZLAl2VZBfqgP5PVI5GjMnRbkLBX6iBS-JX5",
              "width": 3120
          }
      ],
      "place_id": "ChIJcYep9A_HwjsRAAAA0BL80TM",
      "plus_code": {
          "compound_code": "JV7G+FP Pune, Maharashtra, India",
          "global_code": "7JCMJV7G+FP"
      },
      "rating": 5,
      "reference": "ChIJcYep9A_HwjsRAAAA0BL80TM",
      "scope": "GOOGLE",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ],
      "user_ratings_total": 1,
      "vicinity": "Colony No. 05, Choudhary Park, Dighi, Pune"
  },
  {
      "business_status": "OPERATIONAL",
      "geometry": {
          "location": {
              "lat": 18.6139632,
              "lng": 73.87777919999999
          },
          "viewport": {
              "northeast": {
                  "lat": 18.61530903029151,
                  "lng": 73.8791562802915
              },
              "southwest": {
                  "lat": 18.6126110697085,
                  "lng": 73.87645831970849
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Samarth Vadapav",
      "place_id": "ChIJUTKtZwXHwjsRAAAA0Pcm1mY",
      "reference": "ChIJUTKtZwXHwjsRAAAA0Pcm1mY",
      "scope": "GOOGLE",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ],
      "vicinity": "JV7H+H4J, Choudhary Park, Dighi, Pune"
  },
  {
      "business_status": "OPERATIONAL",
      "geometry": {
          "location": {
              "lat": 18.6142937,
              "lng": 73.8727737
          },
          "viewport": {
              "northeast": {
                  "lat": 18.6156377802915,
                  "lng": 73.8741625802915
              },
              "southwest": {
                  "lat": 18.6129398197085,
                  "lng": 73.87146461970848
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Mayur Garden | Bar & Family Restaurant",
      "opening_hours": {
          "open_now": false
      },
      "photos": [
          {
              "height": 1080,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/112532765258849429671\">Dhamma Khillare</a>"
              ],
              "photo_reference": "Aap_uEAHXcMDIMPNnpm91tIYL4vffuVhcgdyAPLoYsW0QueyJljRlpPynPhVz8g7UNcLuZ84ooGfP18f4gwzl7HGb70d95qkmxDK4vphRE-8DP8O0TbVsP-CUy6oq2KaMKgheBwVJ-iPC05gCGAmj5UcLyYPvqk7yhPqrySD9dSgH6qiMV84",
              "width": 1920
          }
      ],
      "place_id": "ChIJXcV4Zw7HwjsRl-wfo6KsGBM",
      "plus_code": {
          "compound_code": "JV7F+P4 Pimpri-Chinchwad, Maharashtra, India",
          "global_code": "7JCMJV7F+P4"
      },
      "rating": 3.7,
      "reference": "ChIJXcV4Zw7HwjsRl-wfo6KsGBM",
      "scope": "GOOGLE",
      "types": [
          "bar",
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ],
      "user_ratings_total": 489,
      "vicinity": "Dighi Bus Stop, Sr. 86, Shop No. 1, Alandi Road, Dighi Gaonthan, Dighi, Pimpri-Chinchwad"
  },
  {
      "business_status": "OPERATIONAL",
      "geometry": {
          "location": {
              "lat": 18.6146784,
              "lng": 73.8727744
          },
          "viewport": {
              "northeast": {
                  "lat": 18.6160000802915,
                  "lng": 73.87420238029151
              },
              "southwest": {
                  "lat": 18.6133021197085,
                  "lng": 73.87150441970849
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Sidharth Snacks",
      "place_id": "ChIJ7-l1YA7HwjsRAAAA0JtUfg4",
      "plus_code": {
          "compound_code": "JV7F+V4 Pune, Maharashtra, India",
          "global_code": "7JCMJV7F+V4"
      },
      "reference": "ChIJ7-l1YA7HwjsRAAAA0JtUfg4",
      "scope": "GOOGLE",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ],
      "vicinity": "Said Park Road Rajmata Jijau, Chouk, Dighi, Pune"
  },
  {
      "business_status": "OPERATIONAL",
      "geometry": {
          "location": {
              "lat": 18.6148246,
              "lng": 73.87326809999999
          },
          "viewport": {
              "northeast": {
                  "lat": 18.6161965802915,
                  "lng": 73.8745813802915
              },
              "southwest": {
                  "lat": 18.6134986197085,
                  "lng": 73.8718834197085
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Chopstick Chinese Fast Food",
      "opening_hours": {
          "open_now": false
      },
      "photos": [
          {
              "height": 9248,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/106916136376686224851\">Jit</a>"
              ],
              "photo_reference": "Aap_uEDwRFA1YYAQ2piF5fZM12PfKf62TUw8QiFhOB3p1ECsTOxSEKlt9UPllymZw0eKWtxU4D2q5-SxXNienKboZ1nuofnCIbIhtJdw7yXrJqBp4guqTLhiB0l6FqE9BDMY3Q1NdIkRolDCgEl3wujC-ElruZzfhgTNXZ6tUNtYb_Ik4Z8I",
              "width": 6936
          }
      ],
      "place_id": "ChIJdR9U8Q7HwjsRhuzscxjbW2k",
      "plus_code": {
          "compound_code": "JV7F+W8 Pune, Maharashtra, India",
          "global_code": "7JCMJV7F+W8"
      },
      "rating": 3.7,
      "reference": "ChIJdR9U8Q7HwjsRhuzscxjbW2k",
      "scope": "GOOGLE",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ],
      "user_ratings_total": 28,
      "vicinity": "Near Vittal Mandir, Pune - Alandi Road, Sr. 86, Shop No. 2 Saint Dnyaneshwar Road Parande Nagar Dighi Pimpri-Chinchwad, Pune"
  },
  {
      "business_status": "OPERATIONAL",
      "geometry": {
          "location": {
              "lat": 18.6147917,
              "lng": 73.87285
          },
          "viewport": {
              "northeast": {
                  "lat": 18.6161675302915,
                  "lng": 73.87421958029151
              },
              "southwest": {
                  "lat": 18.6134695697085,
                  "lng": 73.87152161970849
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Moraya Paav Bhaji/ Pulav Center",
      "opening_hours": {
          "open_now": false
      },
      "photos": [
          {
              "height": 4000,
              "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/107682839464888846248\">Dhanaji Wategaonkar</a>"
              ],
              "photo_reference": "Aap_uEDV0gKsqy2qn32Yk0sV0sybrKuNyq-fbaOzI_M_-uv7sUccSex9y4uyQZ7uaNPC4GSFlWGxHTumV6g84ebWZDaxbL8xc554zLswBwLbjgSvQU7OWU3r1J_J-6JrYkKhDYNgTVELqbwWOGR-PwzSgF_nEnUBhdtEHVa0Na-NcUkBIyeo",
              "width": 3000
          }
      ],
      "place_id": "ChIJORVe9Q7HwjsR8kC3Sv0nRKo",
      "plus_code": {
          "compound_code": "JV7F+W4 Pimpri-Chinchwad, Maharashtra, India",
          "global_code": "7JCMJV7F+W4"
      },
      "rating": 3,
      "reference": "ChIJORVe9Q7HwjsR8kC3Sv0nRKo",
      "scope": "GOOGLE",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ],
      "user_ratings_total": 1,
      "vicinity": "Sai Park Road, Parande Nagar, Dighi, Pimpri-Chinchwad"
  },
  {
      "business_status": "CLOSED_TEMPORARILY",
      "geometry": {
          "location": {
              "lat": 18.614892,
              "lng": 73.8729476
          },
          "viewport": {
              "northeast": {
                  "lat": 18.6162128802915,
                  "lng": 73.87427548029152
              },
              "southwest": {
                  "lat": 18.6135149197085,
                  "lng": 73.8715775197085
              }
          }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color": "#FF9E67",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name": "Roha Sea Food",
      "permanently_closed": true,
      "place_id": "ChIJ3_eb9Q7HwjsRcHCFiNDCglw",
      "reference": "ChIJ3_eb9Q7HwjsRcHCFiNDCglw",
      "scope": "GOOGLE",
      "types": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
      ],
      "vicinity": "JV7F+X54, Dighi, Pune"
  }
]

const getNearbyRecommendation = asyncHandler(async (req,res) => {
  let searchQuery = req.query
  let latitude = searchQuery.latitude;
  let longitude = searchQuery.longitude;
  let range = searchQuery.range;
  let type = searchQuery.type;

  var config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${range}&type="${type}"&key=AIzaSyCATtupoIdp7bend_fjJmKy52HLRxSz_oA`,
    headers: { }
  };

  res.send(results);

  // await axios(config)
  // .then((response) => {
  //   console.log(response.data);
  //    res.send(response.data.results);
  // })
  // .catch(function (error) {
  //   console.log(error);
  //   res.status(500).send(error);
  // });
      
})


module.exports = {
  getNearbyRecommendation
}