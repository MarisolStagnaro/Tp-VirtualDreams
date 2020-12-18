# Tp-VirtualDreams

Para empezar abrimos visual studio code, nos posicionamos en la terminal y con el comando cd nos posicionamos en el directorio donde se encuentra la carpeta que 
contiene todos los archivos e instalamos:

npm install --save request

npm install --save request-promise

npm install body-parser

npm express install

npm cors install 

Luego de la instalacion ejecutar el comando
node servidor.js
Ya tenemos inicializado el servidor para recibir peticiones

Luego abrimos el archivo html en el navegador, ingresar los datos del formulario y una vez ingresado los datos presionar el boton enviar.
El cual manda una peticion POST a nuestro servidor que valida si los datos estan bien o sino nos devuelve error codigo 400 o 500.
Y si los datos son validos devolvera 201 y ademas hace la peticion post a la url: https://reclutamiento-14cf7.firebaseio.com/personas.json 
con los datos enviados.
Para que el servidor deje de escuchar nos posicionamos en la terminal y tocamos ctrl+c

Tambien tenemos un archivo mostrarPersonas que genera peticion a la GET que devuelve todos los usuarios guardados en formato json en la url: 
https://reclutamiento-14cf7.firebaseio.com/personas.json
Este script se ejecuta con : node mostrarPersonas.js

Respuestas:
EJERCICIO 2


1-	Un servidor HTTP es un servidor web que es el software que tiene como rol principal almacenar y transmitir el contenido solicitado de un sitio web al navegador del usuario.


2-	Son un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado. Los mas conocidos son: 
GET: El método GET solicita una representación de un recurso específico. Las peticiones que usan el método GET sólo deben recuperar datos.
POST: El método POST se utiliza para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor.
PUT: El modo PUT reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.
DELETE: El método DELETE borra un recurso en específico.

3-	Request: son las peticiones HTTP, es decir, mensajes enviados por un cliente para iniciar una acción en el servidor.
Response: es la respuesta a la solicitud recibida y procesada en el servidor, el cual es mensaje de respuesta HTTP hacia el cliente.
Headers: son los encabezados que permiten a los clientes y servidores mandar información adicional junto con la Request o Response.

4-	 Es la parte de una url que contiene los datos que deben pasar a aplicaciones web y hace referencia a una interacción con una base de datos.
5-	Los códigos de estado de respuesta HTTP indican si se ha completado satisfactoriamente una solicitud HTTP específica.
Algunos ejemplos son:
200	OK
404	No encontrado
500	Error del servidor
503	Servidor no responde

6-	El método GET envía la información codificada del usuario en el header del HTTP Request, directamente en la URL, estando limitada a 2000 caracteres. La información es visible por lo que con este método nunca se envía información sensible.
En el método HTTP POST también se codifica la información, pero se envía a través del body del HTTP Request, por lo que no aparece en la URL, por lo que límite de cantidad de información a enviar. La información proporcionada no es visible, por lo que se puede enviar información sensible.


7-	El verbo que usan los navegadores cada vez que hace clic en un enlace o escribe una URL en la barra de direcciones GET ya que indica al servidor que transmita los datos identificados por la URL al cliente.


8-	JSON (Javascript Object Notation) es un formato para la representación de estructuras de datos, que se utiliza en el intercambio de información, que es fácil de usar y está puramente basado en texto, es ligero y tiene un formato legible para el usuario. Se pueden representar dos tipos de estructuras: conjunto de pares (clave:valor) encerrado entre llaves o conjunto ordenado de valores encerrado entre corchetes.
Ejemplo:
Conjunto de pares:
{
    "Nombre": "Pepe",
    "Edad": 28,
}
Conjunto ordenado:
[
        {
        "Nombre": "Nahuel",
        "Edad": 26,
        },
        {
        "Nombre": "Mariana",
        "Edad": 31,
        }
    ]

XML es un formato utilizado para el intercambio de información entre sistemas. El formato está basado en texto para representar información estructurada: datos, documentos, configuración, etc. Pero es más difícil de comprender que JSON ya que utiliza etiquetas que son elementos que puede tener contenido, más elementos o ambos, aunque también puede ser elementos vacíos (etiqueta vacio).
Ejemplo:
<usuario tipo="A">
    		<nombre>Mariana</nombre>
 <edad>31</edad>
<vacio></vacio>
             </usuario>


9-	Es un protocolo estándar que define cómo dos objetos en diferentes procesos pueden comunicarse por medio de intercambio de datos XML. Su objetivo es establecer un protocolo estándar de invocación de servicios remotos, basado en protocolos estándares de internet HTTP (Protocolo de transporte de Hipertexto) para la transmisión y XML (lenguaje de marcado extensible) para la codificación de datos. 
Entre sus ventajas podemos encontrar que al funcionar a través del protocolo de transporte TCP, se pueden utilizar diferentes protocolos de aplicación como: HTTP, SMTP o JMS. También nos brinda la posibilidad de generar cliente/servidor en distintos lenguajes de programación. Utiliza siempre el formato XML. Esta ampliamente estandarizado por lo que es poco flexible.


10-	 REST, que es el acrónimo de REpresentational State Transfer, más que un protocolo es una definición de arquitectura dónde se nos indica cómo realizar el intercambio y manejo de datos a través de servicios web. Entre sus ventajas se encuentran la posibilidad de crear cliente/servidor en distintos lenguajes. Nos da la posibilidad de enviar la información en distintos formatos, aunque habitualmente se usa JSON. REST nos permite la creación de servicios más ligeros y simples, fácilmente visibles y utilizables a través de cualquier navegador web.


11-	Los headers en un request son esquemas de clave:valor que contienen información sobre el HTTP request y el navegador. Aquí también se encuentran los datos de las cookies. La mayoría de los headers son opcionales.
El Content-type indica que tipo de contenido será retornado y en caso de solicitudes post o put que tipo de contenido será enviado.

EJERCICIO 3
¿Qué diferencias se observan?
Se guardo un nuevo registro en la API por el post que se hizo el cual tiene un name generado.




