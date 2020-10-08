//run
var data = null;

var accion = 0;
var permiso = 0;


listarUsuarios(null);
// Funciones


function Cancelar(){

    listarUsuarios(null);

   
}


function verificarPermisos(idModulo, idUsuario){

    cajaBox = document.getElementById('p'+idModulo);

    var isChecked = cajaBox.checked;
    if(isChecked){
        permiso = 1;
    }
    else{
        console.log('no esa chekeado');
        permiso = 0;
    }

ajaxGeneral(function(res){

    data = res;
    elemento = document.getElementById('crpTablaModulos');
    var tabla = '';
    var checado ="Checked"

    var x = 1;
    
}, urlapp+"controladores/gestionarMenu.php?funcion=asignarPermisos&parametros=" + idUsuario + ',' + idModulo + ',' + permiso);


}

function verificarModulos(idUsuario){

   // if(valPaginacion == null){ var paginaActiva = 1  } else {var paginaActiva = valPaginacion }

    ajaxGeneral(function(res){

        data = res;
        elemento = document.getElementById('crpTablaModulos');

        var tabla = '';

        var checado ="Checked"

        var x = 1;

            for (item in res) {

                if (res[item].Existe == 1){
                    checado ="Checked"
                } else{checado =""}


                    tabla = tabla+ '<tr><td class="column1">' + res[item].menu  + '</td>'+
                    '<td class="column2">' + '<input ' + checado +' onclick="verificarPermisos(' + res[item].idModulo + ',' + res[item].idUsuario +  ')"  id="p' + x +'" name="p' + x +'" type="checkbox" />' + '</td></tr>';

                x = x + 1;
            }

            elemento.innerHTML = tabla;

            elemento = document.getElementById('listPaginacion');

            
            var paginacion = '';


       var valBucle = Math.ceil(res[0].totalRegistros / 10); 
       console.log(valBucle);
       if (valBucle > 1) 
        {

            for (var i=1; i<=valBucle; i++) 
            {
                if (i == paginaActiva)
                {
                    paginacion = paginacion + '<li><a onclick="Usuarioss('+i+')" class="active" >'+ i +'</a></li>';
                }
                else
                {
                    paginacion = paginacion + '<li><a onclick="Usuarios('+i+')" >'+ i +'</a></li>';
                }
            }

        }
        else
        {
           // paginacion =  '<li><aonclick="Usuarios('+i+')" class="active" >1</a></li>';  
        }

      //  elemento.innerHTML = paginacion;

        // funcionalidad

        // fin funcionalidad    
    }, urlapp+"controladores/gestionarMenu.php?funcion=listarModulos&parametros=" + idUsuario);

}



function listarUsuarios (valPaginacion) 
{

    if(valPaginacion == null){ var paginaActiva = 1  } else {var paginaActiva = valPaginacion }

    ajaxGeneral(function(res){

        data = res;
        elemento = document.getElementById('crpTablaUsuarios');

        var tabla = '';

        var x = 1;

            for (item in res) {

                    tabla = tabla+ '<tr><td class="column1">' + res[item].usuario  + '</td>'+
                    '<td class="column2">' + '<input onclick="verificarModulos(' + res[item].id +')"' + ' value="' + x + '" id="r' + x +'" name="r" type="radio" />' + '</td></tr>';

                x = x + 1;
            }

            elemento.innerHTML = tabla;

            elemento = document.getElementById('listPaginacion');

            
            var paginacion = '';


       var valBucle = Math.ceil(res[0].totalRegistros / 10); 
       console.log(valBucle);
       if (valBucle > 1) 
        {

            for (var i=1; i<=valBucle; i++) 
            {
                if (i == paginaActiva)
                {
                    paginacion = paginacion + '<li><a onclick="Usuarioss('+i+')" class="active" >'+ i +'</a></li>';
                }
                else
                {
                    paginacion = paginacion + '<li><a onclick="Usuarios('+i+')" >'+ i +'</a></li>';
                }
            }

        }
        else
        {
            paginacion =  '<li><aonclick="Usuarios('+i+')" class="active" >1</a></li>';  
        }

        elemento.innerHTML = paginacion;

        // funcionalidad

        // fin funcionalidad    
    }, urlapp+"controladores/gestionarMenu.php?funcion=listarUsuarios&parametros=10," + paginaActiva);
    
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

