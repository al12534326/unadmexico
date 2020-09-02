//run
var data = null;

ObtenerCorreos(null);
ObtenerEmpresas();

var accion = 0;


// Funciones

function AccionGuardarEmpresa(){

    if (accion == 1){GuardarEmpresa();}else{ ModificarEmpresa(); }
}

function ObtenerCorreos(valPaginacion)
{

    if(valPaginacion == null){ var paginaActiva = 1  } else {var paginaActiva = valPaginacion }

    ajaxGeneral(function(res){

        data = res;
        elemento = document.getElementById('crpTablaEmpresa');

        var tabla = '';

            for (item in res) {
                tabla = tabla+ '<tr><td class="column1">' + res[item].id + '</td>'+
                '<td class="column2">' +res[item].nombreEmpresa + '</td>'+
                '<td class="column3">' +res[item].correo + '</td>'+
                '<td class="column6" style = "">' + '<i onclick = "EditarEmpresa('+res[item].id+','+1+')" class="fa fa-pencil-square-o" aria-hidden="true"></i> <i onclick = "EditarEmpresa('+res[item].id+','+2+')"class="fa fa-trash" aria-hidden="true"></i>' + '</td></tr>';
            }

            elemento.innerHTML = tabla;

            elemento = document.getElementById('listPaginacion');

            
            var paginacion = '';


       var valBucle = Math.ceil(res[0].totalRegistros / 5); 
       console.log(valBucle);
       if (valBucle > 1) 
        {

            for (var i=1; i<=valBucle; i++) 
            {
                if (i == paginaActiva)
                {
                    paginacion = paginacion + '<li><a onclick="ObtenerCorreos('+i+')" class="active" >'+ i +'</a></li>';
                }
                else
                {
                    paginacion = paginacion + '<li><a onclick="ObtenerCorreos('+i+')" >'+ i +'</a></li>';
                }
            }

        }
        else
        {
            paginacion =  '<li><aonclick="ObtenerCorreos('+i+')" class="active" >1</a></li>';
        }

        elemento.innerHTML = paginacion;

        // funcionalidad

        // fin funcionalidad    
    }, "http://localhost:8066/controladores/correos.php?funcion=listar_correos&parametros=5," + paginaActiva);
    
}

function ObtenerEmpresas()
{

     ajaxGeneral(function(res){
        elemento = document.getElementById('select_empresas');

        var select = '';


        for (item in res) {
            select = select +  '<option value="'+ res[item].id+'">'+res[item].nombre+'</option>';
        }

        elemento.innerHTML = select;

    }, "http://localhost:8066/controladores/empresas.php?funcion=catalogo_empresas")


}

function CrearEmpresa(tipo){

    accion = tipo;

    
    elementoTitle = document.getElementById('titlEmpresa');
    elementoTitle.innerHTML = 'CREAR CORREO';
    

    var x = document.getElementById("content-table");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    var x = document.getElementById("content-form");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function EditarEmpresa(nodo,tipo){

    var tipoAccionEditar = document.getElementById("InsertaModifica");
    var tipoAccionEliminar = document.getElementById("Eliminar");


    console.log(nodo)

    elementoTitle = document.getElementById('titlEmpresa');

    if (tipo==1){
       elementoTitle.innerHTML = 'EDITAR CORREO';
      
       tipoAccionEditar.style.display = "block";
       tipoAccionEliminar.style.display = "none";

    }else{
       elementoTitle.innerHTML = 'ELIMINAR CORREO';

       tipoAccionEditar.style.display = "none";
       tipoAccionEliminar.style.display = "block";
    }

    function esID(itemValor) { 
        return itemValor.id == nodo;
    }
    
     var found = data.find(esID);
    

    console.log(found);
  

    document.getElementById('id').value = found.id
    document.getElementById('select_empresas').value = found.idEmpresa
    document.getElementById('correo').value =found.correo

    var x = document.getElementById("content-table");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    var x = document.getElementById("content-form");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }


}

function GuardarEmpresa(){

    var a = encodeURI(document.getElementById('idEmpresa').value)
    var b = encodeURI(document.getElementById('correo').value)

    ajaxGeneral(function(res){

        CancelarEmpresa();
    }, "http://localhost:8066/controladores/correos.php?funcion=guardar_correo&parametros="+a+','+b)

}


function ModificarEmpresa(){

    var a =  encodeURI(document.getElementById('id').value)
    var b = encodeURI(document.getElementById('idEmpresa').value)
    var c = encodeURI(document.getElementById('correo').value)

       
    ajaxGeneral(function(res){
        
        
        CancelarEmpresa();
    }, "http://localhost:8066/controladores/correos.php?funcion=modificar_correo&parametros="+a+','+b+','+c)

}


function EliminarEmpresa(){

    var a =  encodeURI(document.getElementById('id').value)

     alert('Aqui ára eliminar la empresa = ' + a);
    
    ajaxGeneral(function(res){
        
        
        CancelarEmpresa();
    }, "http://localhost:8066/controladores/correos.php?funcion=eliminar_correo&parametros="+a)

}


function CancelarEmpresa(){

    ObtenerEmpresas(null);

    var x = document.getElementById("content-form");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    var x = document.getElementById("content-table");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
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

