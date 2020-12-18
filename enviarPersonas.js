function enviar_formulario(){
    var nombref = document.getElementById("nombre").value;
    var apellidof = document.getElementById("apellido").value;
    var dnif = parseInt(document.getElementById("dni").value);
    //var usuario = {nombre:nombref, apellido: apellidof, dni: dnif};
    var usuario = {nombre: nombref, apellido: apellidof, dni: dnif}; 
    enviar(usuario)
    //console.log(JSON.stringify(usuario));
    //var datos = {'nombre': nombre, 'apellido': apellido, 'dni':dni}; 
}

window.onload = function() {
    document.recuperar.enviar.onclick = enviar_formulario
} 

function enviar (usuario){ 
    fetch("http://localhost:3000/usuario", {
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },    
        body: JSON.stringify(usuario)
     }).then(response => {
            console.log(response)
     }).catch(err => {
            console.log(err)
        });
}
