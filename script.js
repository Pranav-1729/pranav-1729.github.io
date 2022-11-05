function phOverload(v) {
    var params = {
        name: "Talib",
        index: "pH",
        value: v
    }
    emailjs.send("service_kp9vrrl", "template_sg7pkcp", params).then(function (res) {
        alert("Sucess");
    })
}

function tdsOverload(v) {
    var params = {
        name: "Talib",
        index: "TDS",
        value: v
    }
    emailjs.send("service_kp9vrrl", "template_sg7pkcp", params).then(function (res) {
        alert("Sucess");
    })
}
function turbidityOverload(v) {
    var params = {
        name: "Talib",
        index: "Turbidity",
        value: v
    }
    emailjs.send("service_kp9vrrl", "template_sg7pkcp", params).then(function (res) {
        alert("Sucess");
    })
}
function tempOverload(v) {
    var params = {
        name: "Talib",
        index: "Temperature",
        value: v
    }
    emailjs.send("service_kp9vrrl", "template_sg7pkcp", params).then(function (res) {
        alert("Sucess");
    })
}