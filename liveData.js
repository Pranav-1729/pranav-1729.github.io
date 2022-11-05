var phThreshold = 10000;
var tdsThreshold = 10000;
var turbidityThreshold = 10000;
var tempThreshold = 10000;


// pH Live Data
fetch('https://api.thingspeak.com/channels/1904913/fields/1/last.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        if (data.field1 > phThreshold) {
            phOverload();
        }
        document.getElementById("ph").innerHTML +=
            "PH: " + data.field1 + "<br/>";
    })
    .catch(function (err) {
        console.log(err);
    })


// TDS Live Data
fetch('https://api.thingspeak.com/channels/1904913/fields/2/last.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        if (data.field2 > tdsThreshold) {
            tdsOverload();
        }
        document.getElementById("tds").innerHTML +=
            "TDS: " + data.field2 + "<br/>";

    })
    .catch(function (err) {
        console.log(err);
    })


// Turbidity Live Data
fetch('https://api.thingspeak.com/channels/1904913/fields/3/last.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        if (data.field3 > turbidityThreshold) {
            turbidityOverload();
        }
        document.getElementById("turbidity").innerHTML +=
            "Turbidity: " + data.field3 + "<br/>";
    })
    .catch(function (err) {
        console.log(err);
    })


// Temperature Live Data
fetch('https://api.thingspeak.com/channels/1904913/fields/4/last.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        if (data.field4 > tempThreshold) {
            tempOverload();
        }

        document.getElementById("temp").innerHTML +=
            "Temperature: " + data.field4 + "<br/>";
    })
    .catch(function (err) {
        console.log(err);
    })

