"use strict";
// TODO: mapbox token
const MAPBOX_TOKEN = "pk.eyJ1IjoiaHRheTAwMDgiLCJhIjoiY2t0a3g3eXMwMXB2MDMwbjRtNDR6ZzRsOCJ9.QW5tz4qIVGSGOqheyT-0cA";
// TODO: WAQI token
const WAQI_TOKEN = "d4721c341f32f8d97c70a6e338291bf0018a9906";
// web service request function
function webServiceRequest(url,data)
{
    // Build URL parameters from data object.
    let params = "";
    // For each key in data object...
    for (let key in data)
    {
        if (data.hasOwnProperty(key))
        {
            if (params.length == 0)
            {
                // First parameter starts with '?'
                params += "?";
            }
            else
            {
                // Subsequent parameter separated by '&'
                params += "&";
            }

            let encodedKey = encodeURIComponent(key);
            let encodedValue = encodeURIComponent(data[key]);

            params += encodedKey + "=" + encodedValue;
         }
    }
    let script = document.createElement('script');
    script.src = url + params;
    document.body.appendChild(script);
}

// TODO: complete the getData function
function getData()
{
    // TODO: retrieve the user input for the city name from HTML
    

    // TODO: define the data to pass for the query string to the web service request function
    //       You will need to pass along the token as well as the callback
    //       See: https://aqicn.org/json-api/doc/#api-City_Feed-GetCityFeed
    


    // TODO: Make the actual web service request to the URL https://api.waqi.info/feed/:city
    //       You need to replace the :city placeholder with the actual city name from the user input
    
}

// TODO: complete the showData function
function showData(result)
{
    // This prints the data out to the console (from the web service call)
    // TODO: Look at the data returned in the console to complete the remaining parts of this function
    console.log(result); 
    // setting up the mapbox token
    mapboxgl.accessToken = MAPBOX_TOKEN;
    // TODO: Define a map in the container map 
    //       See: https://docs.mapbox.com/mapbox-gl-js/api/
    
    



    // TODO: Set the map centre to the city coordinates    
    
    
    // TODO: Create a marker with the location set to the city coordinates
    
    
    // TODO: Create a popup with an offset of 45 and set its contents to show 
    //       the city name (from the API) as well as the AQI on seperate lines
    
    
    // TODO: Attach the popup to the marker
    
    // TODO: Add the marker to the map
    
    // TODO: Add the popup to the map
    
}
