//run
var data = null;

ObtenerEmpresas(null);
ObtenerCategorias();

var accion = 0;


// Funciones

function AccionGuardarEmpresa(){

    if (accion == 1){GuardarEmpresa();}else{ ModificarEmpresa(); }
}

function ObtenerEmpresas (valPaginacion) 
{

    if(valPaginacion == null){ var paginaActiva = 1  } else {var paginaActiva = valPaginacion }

    ajaxGeneral(function(res){

        data = res;
        elemento = document.getElementById('crpTablaEmpresa');

        var tabla = '';

            for (item in res) {
                tabla = tabla+ '<tr><td class="column1">' + res[item].id + '</td>'+
                '<td class="column2">' +res[item].categoria + '</td>'+
                '<td class="column3">' +res[item].patente + '</td>'+
                '<td class="column4">' + res[item].nombre + '</td>'+
                '<td class="column5">' + res[item].razonSocial + '</td>'+
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
                    paginacion = paginacion + '<li><a onclick="ObtenerEmpresas('+i+')" class="active" >'+ i +'</a></li>';
                }
                else
                {
                    paginacion = paginacion + '<li><a onclick="ObtenerEmpresas('+i+')" >'+ i +'</a></li>';
                }
            }

        }
        else
        {
            paginacion =  '<li><aonclick="ObtenerEmpresas('+i+')" class="active" >1</a></li>';  
        }

        elemento.innerHTML = paginacion;

        // funcionalidad

        // fin funcionalidad    
    }, "http://localhost:8066/controladores/empresas.php?funcion=listar_empresas&parametros=5," + paginaActiva);
    
}

function ObtenerCategorias()
{

     ajaxGeneral(function(res){
        elemento = document.getElementById('select_categorias');

        var select = '';


        for (item in res) {
            select = select +  '<option value="'+ res[item].id+'">'+res[item].nombre+'</option>';
        }

        elemento.innerHTML = select;

    }, "http://localhost:8066/controladores/categorias.php?funcion=catalogo_categorias")


}

function CrearEmpresa(tipo){

    accion = tipo;

    
    elementoTitle = document.getElementById('titlEmpresa');
    elementoTitle.innerHTML = 'CREAR EMPRESA';
    

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
       elementoTitle.innerHTML = 'EDITAR EMPRESA';
      
       tipoAccionEditar.style.display = "block";
       tipoAccionEliminar.style.display = "none";

    }else{
       elementoTitle.innerHTML = 'ELIMINAR EMPRESA';

       tipoAccionEditar.style.display = "none";
       tipoAccionEliminar.style.display = "block";
    }

    function esID(itemValor) { 
        return itemValor.id == nodo;
    }
    
     var found = data.find(esID);
    

    console.log(found);
  

    document.getElementById('id').value = found.id
    document.getElementById('select_categorias').value = found.idCategoria
    document.getElementById('nombre').value =found.nombre
    document.getElementById('razon').value =found.razonSocial
    document.getElementById('patente').value = found.patente

    
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

    var a = encodeURI(document.getElementById('nombre').value)
    var b = encodeURI(document.getElementById('razon').value)
    var c =  encodeURI(document.getElementById('patente').value)
    var d = encodeURI(document.getElementById('select_categorias').value)

    ajaxGeneral(function(res){
        
        
        CancelarEmpresa();
    }, "http://localhost:8066/controladores/empresas.php?funcion=guardar_empresa&parametros="+a+','+b+','+c+','+d)

}


function ModificarEmpresa(){

    var a =  encodeURI(document.getElementById('id').value)
    var b = encodeURI(document.getElementById('nombre').value)
    var c = encodeURI(document.getElementById('razon').value)
    var d =  encodeURI(document.getElementById('patente').value)
    var e = encodeURI(document.getElementById('select_categorias').value)
       
    ajaxGeneral(function(res){
        
        
        CancelarEmpresa();
    }, "http://localhost:8066/controladores/empresas.php?funcion=modificar_empresa&parametros="+a+','+b+','+c+','+d+','+e)

}


function EliminarEmpresa(){

    var a =  encodeURI(document.getElementById('id').value)

     alert('Aqui ára eliminar la empresa = ' + a);
    
    ajaxGeneral(function(res){
        
        
        CancelarEmpresa();
    }, "http://localhost:8066/controladores/empresas.php?funcion=eliminar_empresa&parametros="+a)

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

