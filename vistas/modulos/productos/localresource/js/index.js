//run
var data = null;

Productos(null);


var accion = 0;


// Funciones
function AccionGuardar(event){
    event.preventDefault()

   // alert ('AccionGuardar = ' + accion);

       if (accion == 1){Guardar();}else{ Modificar(); }
}

function Productos (valPaginacion)
{

    if(valPaginacion == null){ var paginaActiva = 1  } else {var paginaActiva = valPaginacion }

    ajaxGeneral(function(res){

        data = res;
        elemento = document.getElementById('crpTabla');

        var tabla = '';

            for (item in res) {
                tabla = tabla+ '<tr><td class="column1">' + res[item].id + '</td>'+
                '<td class="column2">' +res[item].fechaCreacion + '</td>'+
                '<td class="column3">' +res[item].nombre + '</td>'+
                '<td class="column4" style = "">' + '<i onclick = "Editar('+res[item].id+','+1+')" class="fa fa-pencil-square-o" aria-hidden="true"></i> <i onclick = "Editar('+res[item].id+','+2+')"class="fa fa-trash" aria-hidden="true"></i>' + '</td></tr>';
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
                    paginacion = paginacion + '<li><a onclick="Productos('+i+')" class="active" >'+ i +'</a></li>';
                }
                else
                {
                    paginacion = paginacion + '<li><a onclick="Productos('+i+')" >'+ i +'</a></li>';
                }
            }

        }
        else
        {
            paginacion =  '<li><aonclick="Productos('+i+')" class="active" >1</a></li>';
        }

        elemento.innerHTML = paginacion;

        // funcionalidad

        // fin funcionalidad    
    }, urlapp+"controladores/productos.php?funcion=listar&parametros=10," + paginaActiva);
    
}


function Crear(tipo){

    accion = tipo;

    var botonNuevo = document.getElementById("btnNuevo");
    botonNuevo.style.display = "none";

    
    elementoTitle = document.getElementById('titulo');
    elementoTitle.innerHTML = 'CREAR PRODUCTO';
    

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

    //alert('editar ' + nodo);

    var tipoAccionEditar = document.getElementById("InsertaModifica");
    var tipoAccionEliminar = document.getElementById("Eliminar");


    console.log(nodo)

    elementoTitle = document.getElementById('titulo');

    if (tipo==1){
       elementoTitle.innerHTML = 'EDITAR PRODUCTO';

      var botonNuevo = document.getElementById("btnNuevo");
      botonNuevo.style.display = "none";
      
       tipoAccionEditar.style.display = "block";
       tipoAccionEliminar.style.display = "none";

    }else{
       elementoTitle.innerHTML = 'ELIMINAR PRODUCTO';

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
  

    document.getElementById('id').value = found.id;
    document.getElementById('producto').value = found.nombre;
    
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
    var length = document.getElementById("producto").value.length;
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

   // var length = document.getElementById("producto").value.length;
  //  if (length > Max_Length) {
        var alertx = document.getElementById("divAlerta2");
   //     alertx.style.display="block";
  //  }

  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;

      //if (length < Max_Length) {
      //  var alertx = document.getElementById("divAlerta2");
      //  alertx.style.display="none";
   // }
      break;
    }
  }

  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
    return false;
  }
//tecla = (document.all) ? event.keyCode : event.which;
//var Max_Length = 35;
//var length = document.getElementById("producto").value.length;


//if (tecla==8) return true; //Tecla de retroceso (para poder borrar)
//patron =/[A-Za-z\s]/; // Solo acepta letras
//te = String.fromCharCode(tecla);
//return patron.test(te);
}


function Guardar(){

    var div = document.getElementById('txt_alert');

    div.innerHTML ='';

   // e.preventDefault();
    var a =  encodeURI(document.getElementById('producto').value)
    if (a != ''){
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
       }, urlapp+"controladores/productos.php?funcion=guardar&parametros="+a)
    }else
    {//alert('!Error el nombre del producto no puede estar en blanco!')
    var alertx = document.getElementById("divAlerta");
   // alertx.innerHTML = "El campo de producto es obligatorio";
    alertx.style.display="block";
    }
}


function alertar(){
 // alert('hola');
}


function cerrarBoton(){
   // e.preventDefault();

    Cancelar();
   // this.parentElement.style.display='none';
    
}



function Modificar(){
   // e.preventDefault();

    

    var a =  encodeURI(document.getElementById('id').value)
    var b =  encodeURI(document.getElementById('producto').value)

    //alert('modificar =' + a +' b  ' + b);

         
    ajaxGeneral(function(res){
        
        
        Cancelar();
    }, urlapp+"controladores/productos.php?funcion=modificar&parametros="+a+','+b)

}


function Eliminar(){
    //e.preventDefault(); 

    var a =  encodeURI(document.getElementById('id').value)

    // alert('Aqui ára eliminar el Usuario = ' + a);
    
    ajaxGeneral(function(res){
        
        
       Cancelar();
    }, urlapp+"controladores/productos.php?funcion=eliminar&parametros="+a)

}


function Cancelar(){
   // e.preventDefault();

   var alertx = document.getElementById("divAlerta");
   alertx.style.display="none";

    Productos(null);

    var botonNuevo = document.getElementById("btnNuevo");
    botonNuevo.style.display = "block";


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

