const request = require("request-promise"),
    RUTA = "https://reclutamiento-14cf7.firebaseio.com/personas.json";

const express = require("express");
const bodyParser = require('body-parser');
const { default: Axios } = require("axios");
const app = express();
const cors = require('cors');


app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

let usuario = {
    nombre:'',
    apellido: '',
    dni:''
};

let respuesta = {
    error: false,
    codigo: 201,
    mensaje: ''
};


app.post('/usuario', function (req, res) {
    console.log(req.body)
    if(!req.body.nombre || !req.body.apellido) {
     respuesta = {
      error: true,
      codigo: 400,
      mensaje: 'El campo nombre y apellido son obligatorios'
     };
    } else {
        if(typeof req.body.nombre !== 'string' || typeof req.body.apellido !== 'string') {
            respuesta = {
            error: true,
            codigo: 400,
            mensaje: 'El campo nombre y apellido son cadenas de texto (String)'
            };
        } else {
            var textdni = JSON.stringify(req.body.dni);
            if(textdni.length>10 || typeof req.body.dni !== 'number'){
                respuesta = {
                error: true,
                codigo: 400,
                mensaje: 'El campo dni es numérico de máximo 10 caracteres'
                }; 
            } else {
                if(Object.keys(req.body).length  >3) {
                respuesta = {
                error: true,
                codigo: 400,
                mensaje: 'Mas atributos de los necesarios'
                };
                } else {
                    var textdni = JSON.stringify(req.body.dni);
                    if(textdni.length<5){
                        respuesta = {
                        error: true,
                        codigo: 500,
                        mensaje: 'El campo dni tiene una numeracion muy baja, minimo son 5 caracteres'
                        }; 
                    }else {
                        usuario = {
                        nombre: req.body.nombre,
                        apellido: req.body.apellido,
                        dni: req.body.dni
                            };
                        respuesta = {
                        error: false,
                        codigo: 201,
                        mensaje: 'ingresado exitosamente',
                        respuesta: usuario
                        };
                        enviar(usuario)
                    }
                }
            }
        }
    }
    res.send(respuesta);
    
   });
  
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});


function enviar (usuario){
    var options = {
        method: 'POST',
        uri: RUTA,
        body: {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            dni: usuario.dni
        },
        json: true 
    };
    request(options)
        .then(parsedBody => {
            console.log(parsedBody)
        })
        .catch(err => {
            console.log(err)
        });
}