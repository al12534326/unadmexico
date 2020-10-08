//run
var data = null;

Empresas(null);
Categorias();

var accion = 0;


// Funciones

function AccionGuardar(event){
    event.preventDefault()

   // alert ('AccionGuardar = ' + accion);

       if (accion == 1){Guardar();}else{ Modificar(); }
}

function Empresas (valPaginacion) 
{

    if(valPaginacion == null){ var paginaActiva = 1  } else {var paginaActiva = valPaginacion }

    ajaxGeneral(function(res){

        data = res;
        elemento = document.getElementById('crpTabla');

        var tabla = '';

            for (item in res) {
                tabla = tabla+ '<tr><td class="column1">' + res[item].id + '</td>'+
                '<td class="column2">' +res[item].categoria + '</td>'+
                '<td class="column3">' +res[item].patente + '</td>'+
                '<td class="column4">' + res[item].nombre + '</td>'+
                '<td class="column5">' + res[item].razonSocial + '</td>'+
                '<td class="column6" style = "">' + '<i onclick = "Editar('+res[item].id+','+1+')" class="fa fa-pencil-square-o" aria-hidden="true"></i> <i onclick = "Editar('+res[item].id+','+2+')"class="fa fa-trash" aria-hidden="true"></i>' + '</td></tr>';
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
                    paginacion = paginacion + '<li><a onclick="Empresas('+i+')" class="active" >'+ i +'</a></li>';
                }
                else
                {
                    paginacion = paginacion + '<li><a onclick="Empresas('+i+')" >'+ i +'</a></li>';
                }
            }

        }
        else
        {
            paginacion =  '<li><aonclick="Empresas('+i+')" class="active" >1</a></li>';  
        }

        elemento.innerHTML = paginacion;

        // funcionalidad

        // fin funcionalidad    
    }, urlapp+"controladores/empresas.php?funcion=listar&parametros=10," + paginaActiva);
    
}

function Categorias()
{

     ajaxGeneral(function(res){
        elemento = document.getElementById('select_categorias');

        var select = '';


        for (item in res) {
            select = select +  '<option value="'+ res[item].id+'">'+res[item].nombre+'</option>';
        }

        elemento.innerHTML = select;

    }, urlapp+"controladores/categorias.php?funcion=catalogo_categorias")


}

function Crear(tipo){

    accion = tipo;

    var botonNuevo = document.getElementById("btnNuevo");
    botonNuevo.style.display = "none";


    
    elementoTitle = document.getElementById('titulo');
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

function Editar(nodo,tipo){

    var tipoAccionEditar = document.getElementById("InsertaModifica");
    var tipoAccionEliminar = document.getElementById("Eliminar");


    console.log(nodo)

    elementoTitle = document.getElementById('titulo');

    if (tipo==1){
       elementoTitle.innerHTML = 'EDITAR EMPRESA';

       var botonNuevo = document.getElementById("btnNuevo");
    botonNuevo.style.display = "none";

      
       tipoAccionEditar.style.display = "block";
       tipoAccionEliminar.style.display = "none";

    }else{
       elementoTitle.innerHTML = 'ELIMINAR EMPRESA';

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


function validarTamaño(e){
    var Max_Length = 35;
    var keyA = e.keyCode || e.which;
    var lengthNombre = document.getElementById("nombre").value.length;
    var lengthRazon = document.getElementById("razon").value.length;
    var lengthPatente = document.getElementById("patente").value.length;
    var alertaCampo = document.getElementById("divAlerta2");
   // var alertNombre = document.getElementById("divAlerta2");
    //var alertRazon = document.getElementById("divAlerta3");
    //var alertPatente = document.getElementById("divAlerta4");


    var mostrarInsertaModifica = document.getElementById('InsertaModifica');
  
    if (lengthNombre > Max_Length || lengthRazon > Max_Length || lengthPatente > Max_Length ) {
        alertaCampo.style.display="block";
        mostrarInsertaModifica.style.display="none";
    }else{
        alertaCampo.style.display="none";
        mostrarInsertaModifica.style.display="block";
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

    var a = encodeURI(document.getElementById('nombre').value)
    var b = encodeURI(document.getElementById('razon').value)
    var c =  encodeURI(document.getElementById('patente').value)
    var d = encodeURI(document.getElementById('select_categorias').value)

    if (a !='' && b !='' && c!='' && d != ''){
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
    }, urlapp+"controladores/empresas.php?funcion=guardar&parametros="+a+','+b+','+c+','+d)
}else
{ //alert('!Error el nombre del producto no puede estar en blanco!')
var alertx = document.getElementById("divAlerta");
// alertx.innerHTML = "El campo de producto es obligatorio";
alertx.style.display="block";
}
}


function Modificar(){

    var a =  encodeURI(document.getElementById('id').value)
    var b = encodeURI(document.getElementById('nombre').value)
    var c = encodeURI(document.getElementById('razon').value)
    var d =  encodeURI(document.getElementById('patente').value)
    var e = encodeURI(document.getElementById('select_categorias').value)
       
    ajaxGeneral(function(res){
        
        
        CancelarEmpresa();
    }, urlapp+"controladores/empresas.php?funcion=modificar&parametros="+a+','+b+','+c+','+d+','+e)

}


function Eliminar(){

    var a =  encodeURI(document.getElementById('id').value)

     alert('Aqui ára eliminar la empresa = ' + a);
    
    ajaxGeneral(function(res){
        
        
        Cancelar();
    }, urlapp+"controladores/empresas.php?funcion=eliminar&parametros="+a)

}


function Cancelar(){
    //e.preventDefault();

    var alertx = document.getElementById("divAlerta");
    alertx.style.display="none";

    Empresas(null);


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

