//run
var data = null;

ObtenerCorreos(null);
ObtenerEmpresas();

var accion = 0;


// Funciones
function AccionGuardar(event){
    event.preventDefault()

   // alert ('AccionGuardar = ' + accion);

       if (accion == 1){Guardar();}else{ Modificar(); }
}

function ObtenerCorreos(valPaginacion)
{

    if(valPaginacion == null){ var paginaActiva = 1  } else {var paginaActiva = valPaginacion }

    ajaxGeneral(function(res){

        data = res;
        elemento = document.getElementById('crpTabla');

        var tabla = '';

            for (item in res) {
                tabla = tabla+ '<tr><td class="column1">' + res[item].id + '</td>'+
                '<td class="column2">' +res[item].nombreEmpresa + '</td>'+
                '<td class="column3">' +res[item].correo + '</td>'+
                '<td class="column6" style = "">' + '<i onclick = "Editar('+res[item].id+','+1+')" class="fa fa-pencil-square-o" aria-hidden="true"></i> <i onclick = "Editar('+res[item].id+','+2+')"class="fa fa-trash" aria-hidden="true"></i>' + '</td></tr>';
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
    }, urlapp+"controladores/correos.php?funcion=listar_correos&parametros=5," + paginaActiva);
    
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

    }, urlapp+"controladores/empresas.php?funcion=catalogo_empresas")


}

function Crear(tipo){

    accion = tipo;

    var botonNuevo = document.getElementById("btnNuevo");
    botonNuevo.style.display = "none";


    
    elementoTitle = document.getElementById('titulo');
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

function Editar(nodo,tipo){

    var tipoAccionEditar = document.getElementById("InsertaModifica");
    var tipoAccionEliminar = document.getElementById("Eliminar");


    console.log(nodo)

    elementoTitle = document.getElementById('titulo');

    if (tipo==1){
       elementoTitle.innerHTML = 'EDITAR CORREO';

       var botonNuevo = document.getElementById("btnNuevo");
    botonNuevo.style.display = "none";

      
       tipoAccionEditar.style.display = "block";
       tipoAccionEliminar.style.display = "none";

    }else{
       elementoTitle.innerHTML = 'ELIMINAR CORREO';

       var botonNuevo = document.getElementById("btnNuevo");
    botonNuevo.style.display = "none";


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


function validarTamaño(e){
    var Max_Length = 35;
    var keyA = e.keyCode || e.which;
    var length = document.getElementById("correo").value.length;
    if (length > Max_Length) {
        var alertx = document.getElementById("divAlerta2");
        alertx.style.display="block";

        var IM = document.getElementById('InsertaModifica');
        IM.style.display="none";
    }else{
        var alertx = document.getElementById("divAlerta2");
        alertx.style.display="none";
        var IM = document.getElementById('InsertaModifica');
        IM.style.display="block";
    }
}

function sololetras(e) {
    var Max_Length = 35;
    var key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase(),
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
    especiales = [8, 37, 39, 46],
    tecla_especial = false;

        var alertx = document.getElementById("divAlerta2");

  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;

      break;
    }
  }

  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
    return false;
  }

}


function Guardar(){

    var div = document.getElementById('txt_alert');

    div.innerHTML ='';

    var a = encodeURI(document.getElementById('select_empresas').value)
    var b = encodeURI(document.getElementById('correo').value)

    if (b != ''){

    ajaxGeneral(function(res){
        console.log(res[0])

        if(res[0].error == 'true'){
 
         var alertx = document.getElementById("divAlerta");
                 // alertx.innerHTML = "El campo de producto es obligatorio";
                 alertx.style.display="block";
 
                 var div = document.getElementById('txt_alert');
 
                 div.innerHTML += res[0].data;
        }else{
 
         Cancelar();
 
        }
    }, urlapp+"controladores/correos.php?funcion=guardar&parametros="+a+','+b)
   }else
   { //alert('!Error el nombre del producto no puede estar en blanco!')
   var alertx = document.getElementById("divAlerta");
  // alertx.innerHTML = "El campo de producto es obligatorio";
   alertx.style.display="block";
   }
}


function Modificar(){

    var a =  encodeURI(document.getElementById('id').value)
    var b = encodeURI(document.getElementById('select_empresas').value)
    var c = encodeURI(document.getElementById('correo').value)

       
    ajaxGeneral(function(res){
        
        
        Cancelar();
    }, urlapp+"controladores/correos.php?funcion=modificar&parametros="+a+','+b+','+c)

}


function Eliminar(){

    var a =  encodeURI(document.getElementById('id').value)

     //alert('Aqui ára eliminar la empresa = ' + a);
    
    ajaxGeneral(function(res){
        
        
        Cancelar();
    }, urlapp+"controladores/correos.php?funcion=eliminar&parametros="+a)

}


function Cancelar(){

    var alertx = document.getElementById("divAlerta");
    alertx.style.display="none";

    var botonNuevo = document.getElementById("btnNuevo");
    botonNuevo.style.display = "block";


   // ObtenerCorreos(null);
   // ObtenerEmpresas(null);
   window.location.replace("../../../vistas/modulos/correos/index.php");

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

