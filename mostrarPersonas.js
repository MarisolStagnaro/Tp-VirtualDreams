const request = require("request-promise"),
    RUTA = "https://reclutamiento-14cf7.firebaseio.com/personas.json";

request({
        uri: RUTA,
        json: true, 
}).then(usuarios => { 
        console.log (JSON.stringify(usuarios))
        });
           

