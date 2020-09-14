

function autenticar(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;



    ajaxGeneral(function(res){

        if(res == true){
           window.location.replace("../../../vistas/modulos/inicio/index.php");
        }
        else{

            document.getElementById("error").innerHTML = "Usuario o contraseña incorrectos";

        }

  //  }, "http://187.237.138.152:9025/controladores/login.php?funcion=login&parametros="+user+","+pass);
    }, "http://10.34.66.83:8066/controladores/login.php?funcion=login&parametros="+user+","+pass);
}


// Peticiones AJAX
function ajaxGeneral (fn, controlador)
{
    var respuesta = null;
    // Creación de la petición HTTP
    var req = new XMLHttpRequest();
    // Petición HTTP GET asíncrona si el tercer parámetro es "true" o no se especifica
    req.open("GET", controlador , true);
    // Gestor del evento que indica el final de la petición (la respuesta se ha recibido)
    req.addEventListener("load", function() {
        // La petición ha tenido éxito
        if (req.status >= 200 && req.status < 400) {
            //console.log(req.responseText);
            respuesta =  req.responseText;
            respuesta =  JSON.parse(respuesta);
            //console.log(respuesta);
            fn(respuesta)
            return respuesta
        } else {
            // Se muestran informaciones sobre el problema ocasionado durante el tratamiento de la petición
            console.error(req.status + " " + req.statusText);
        }
    });
    // Gestor del evento que indica que la petición no ha podido llegar al servidor
    req.addEventListener("error", function(){
        console.error("Error de red"); // Error de conexión
    });
    // Envío de la petición
    req.send(null);
}
