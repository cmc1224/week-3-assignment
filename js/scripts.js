//original fast food locations

const originalLocation = [
    {
        "restaurant_chain": "McDonald's",
        "address": "1398 North E Street, San Bernardino, California",
        "longitude": -117.29456,
        "latitude": 34.1255,
        "still_operational": "no",
        "year_opened": "1948"
    },
    {
        "restaurant_chain": "Pizza Hut",
        "address": "503 South Bluff St, Wichita, Kansas",
        "longitude": -97.28976,
        "latitude": 37.67878,
        "still_operational": "no",
        "year_opened": "1958"
    },
    {
        "restaurant_chain": "T.G.I. Friday's",
        "address": "1152 1st Avenue, New York, New York",
        "longitude": -73.9598,
        "latitude": 40.76209,
        "still_operational": "no",
        "year_opened": "1965"
    },
    {
        "restaurant_chain": "Waffle House",
        "address": " 2719 East College Avenue, Decatur, Georgia",
        "longitude": -84.27851,
        "latitude": 33.77464,
        "still_operational": "no",
        "year_opened": "1955"
    },
    {
        "restaurant_chain": "Dunkin' Donuts",
        "address": "543 Southern Artery, Quincy, Massachusetts",
        "longitude": -70.99293,
        "latitude": 42.25286,
        "still_operational": "yes",
        "year_opened": "1948"
    },
    {
        "restaurant_chain": "Starbucks ",
        "address": "2000 Western Avenue, Seattle, Washington",
        "longitude": -122.3434901,
        "latitude": 47.6104552,
        "still_operational": "no",
        "year_opened": "1971"
    },
    {
        "restaurant_chain": "Chipotle Mexican Grill",
        "address": "1644 E Evans Avenue, Denver, Colorado",
        "longitude": -104.9678108,
        "latitude": 39.6783013,
        "still_operational": "yes",
        "year_opened": "1993"
    },
    {
        "restaurant_chain": "Nathan's Famous ",
        "address": "1310 Surf Avenue, Brooklyn, New York",
        "longitude": 73.9815042,
        "latitude": 40.575379,
        "still_operational": "yes",
        "year_opened": "1916"
    },
    {
        "restaurant_chain": "Wendy's ",
        "address": "257 E. Broad Street, Columbus, Ohio",
        "longitude": -82.9936951,
        "latitude": 39.9627179,
        "still_operational": "no",
        "year_opened": "1969"
    },
    {
        "restaurant_chain": "Hooters ",
        "address": "2800 Gulf-to-Bay Blvd, Clearwater, Florida",
        "longitude": -82.7212464,
        "latitude": 27.9609459,
        "still_operational": "yes",
        "year_opened": "1983"
    },
    {
        "restaurant_chain": "Blimpie",
        "address": "110 Washington St, Hoboken, New Jersey",
        "longitude": -74.0311203,
        "latitude": 40.737945,
        "still_operational": "no",
        "year_opened": "1964"
    },
    {
        "restaurant_chain": "Taco Bell",
        "address": "7112 Firestone Boulevard, Downey, California",
        "longitude": -118.1550098,
        "latitude": 33.9475717,
        "still_operational": "no",
        "year_opened": "1962"
    },
    {
        "restaurant_chain": "Burger King",
        "address": "7146 Beach Boulevard, Jacksonville, Florida",
        "longitude": -81.5847689,
        "latitude": 30.2890359,
        "still_operational": "no",
        "year_opened": "1953"
    },
    {
        "restaurant_chain": "Sbarro's",
        "address": "1701 65th Street, Brooklyn, New York",
        "longitude": -73.9921165,
        "latitude": 40.6206086,
        "still_operational": "no",
        "year_opened": "1956"
    },
    {
        "restaurant_chain": "White Castle",
        "address": "201 North Main Street, Wichita, Kansas",
        "longitude": -97.3386605,
        "latitude": 37.6881043,
        "still_operational": "no",
        "year_opened": "1921"
    },
    {
        "restaurant_chain": "Sonic",
        "address": "215 North Main Street, Stillwater, Oklahoma",
        "longitude": -97.058257,
        "latitude": 36.1244131,
        "still_operational": "yes",
        "year_opened": "1959"
    },
    {
        "restaurant_chain": "KFC ",
        "address": "3890 S. State Street, Salt Lake City, Utah\n",
        "longitude": -111.8887561,
        "latitude": 40.6872824,
        "still_operational": "yes",
        "year_opened": "1952"
    },
    {
        "restaurant_chain": "Panda Express",
        "address": "3214 Glendale Galleria, Glendale, California",
        "longitude": -118.2591481,
        "latitude": 34.1451743,
        "still_operational": "yes",
        "year_opened": "1973"
    },
    {
        "restaurant_chain": "Subway",
        "address": "North End, Bridgeport, Connecticut",
        "longitude": -73.2309554,
        "latitude": 41.22255,
        "still_operational": "no",
        "year_opened": "1967"
    },
    {
        "restaurant_chain": "Little Caesars",
        "address": "32594 Cherry Hill Road, Garden City, Michigan",
        "longitude": -83.3622937,
        "latitude": 42.3107982,
        "still_operational": "no",
        "year_opened": "1959"
    },
    {
        "restaurant_chain": "Jamba ",
        "address": "17 Chorro Street, Suite C, San Luis Obispo, California",
        "longitude": -120.6708509,
        "latitude": 35.2936441,
        "still_operational": "yes",
        "year_opened": "1990"
    },
    {
        "restaurant_chain": "In-N-Out",
        "address": "Interstate 10 and Francisquito Avenue, Baldwin Park, California",
        "longitude": -117.9742363,
        "latitude": 34.068673,
        "still_operational": "no",
        "year_opened": "1948"
    },
    {
        "restaurant_chain": "Tim Hortons ",
        "address": "65 Ottawa Street N., Hamilton, Ontario, Canada",
        "longitude": -79.8191856,
        "latitude": 43.2446875,
        "still_operational": "yes",
        "year_opened": "1964"
    },
    {
        "restaurant_chain": "Five Guys",
        "address": "3235 Columbia Pike, Arlington, Virginia",
        "longitude": -77.0911226,
        "latitude": 38.8619005,
        "still_operational": "no",
        "year_opened": "1986"
    },
    {
        "restaurant_chain": "Dairy Queen",
        "address": "501 N. Chicago Street, Joliet, Illinois",
        "longitude": -88.0821929,
        "latitude": 41.5334589,
        "still_operational": "yes",
        "year_opened": "1940"
    },
    {
        "restaurant_chain": "Jack In The Box",
        "address": "6270 El Cajon Boulevard, San Diego, California",
        "longitude": -117.0636027,
        "latitude": 32.7636961,
        "still_operational": "no",
        "year_opened": "1951"
    },
    {
        "restaurant_chain": "Benihana",
        "address": "61 W. 56th Street, New York, New York",
        "longitude": -73.976425,
        "latitude": 40.7633122,
        "still_operational": "no",
        "year_opened": "1964"
    },
    {
        "restaurant_chain": "Carrabba's Italian Grill",
        "address": "3115 Kirby Drive, Houston, Texas",
        "longitude": -95.4183697,
        "latitude": 29.7364657,
        "still_operational": "yes",
        "year_opened": "1986"
    },
    {
        "restaurant_chain": "Chick-fil-A",
        "address": "2841 Greenbriar Parkway SW, Atlanta, Georgia",
        "longitude": -84.4932727,
        "latitude": 33.6886536,
        "still_operational": "yes",
        "year_opened": "1967"
    },
    {
        "restaurant_chain": "Fuddruckers ",
        "address": "8602 Botts Lane, San Antonio, Texas",
        "longitude": -98.4601686,
        "latitude": 29.5182071,
        "still_operational": "yes",
        "year_opened": "1979"
    }
]

// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = 'pk.eyJ1IjoiY21jMTIyNCIsImEiOiJjbGc1cWE0aWswNXZzM2ZsaW16cmYzb3BkIn0.6GQ2v6YsggVcqkW-VpgidA';

const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/light-v11', // style URL
    center: [-101.43084079316468,39.12071916433891], // starting position [lng, lat]
    zoom: 3, // starting zoom
    pitch: 0
});

originalLocation.forEach(function (_Restaurant) {
    // create the popup
    const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        `The original ${_Restaurant['restaurant_chain']} opened at ${_Restaurant['address']} in ${_Restaurant['year_opened']}.`
    );

    // figure out the color of the marker based on the program variable

    // by default, use gray
    let color = '#ccc'

    if (_Restaurant['still_operational'] === 'yes') {
        color = '#258f2e'
    }

    if (_Restaurant['still_operational'] === 'no') {
        color = '#a61c1c'
    }



    // map center point
    new mapboxgl.Marker({
        color: color
    })
        .setLngLat([_Restaurant.longitude, _Restaurant.latitude])
        .setPopup(popup)
        .addTo(map);
})

//event listeners

$('#fly-to-west-coast').on('click', function() {
    map.flyTo({
        center:[-116.65593160519431,42.26800326063527]
    })
})

$('#fly-to-east-coast').on('click', function() {
    map.flyTo({
        center: [-79.86803275316097, 37.80889269035391]
    })
})


$('#fly-to-midwest').on('click', function() {
    map.flyTo({
        center: [-102.59639798451622,44.38735352147347]
    })
})


$('#fly-to-the-south').on('click', function() {
    map.flyTo({
        center: [-90.212352826406, 34.215645980651786]
    })
})