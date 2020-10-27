function Notification(htmlElement) {

    this.htmlElement = htmlElement;
    this.icon = htmlElement.querySelector('.icon > i');
    this.text = htmlElement.querySelector('.text');
    this.close = htmlElement.querySelector('.close');
    this.isRunning = false;
    this.timeout;

    this.bindEvents();
};

Notification.prototype.bindEvents = function() {
    var self = this;
    this.close.addEventListener('click', function() {
        window.clearTimeout(self.timeout);
        self.reset();
    });
}

Notification.prototype.info = function(message) {
    if(this.isRunning) return false;

    this.text.innerHTML = message;
    this.htmlElement.className = 'notification info';
    this.icon.className = 'fa fa-2x fa-info-circle';

    this.show();
}

Notification.prototype.warning = function(message) {
    if(this.isRunning) return false;

    this.text.innerHTML = message;
    this.htmlElement.className = 'notification warning';
    this.icon.className = 'fa fa-2x fa-exclamation-triangle';

    this.show();
}

Notification.prototype.error = function(message) {
    if(this.isRunning) return false;

    this.text.innerHTML = message;
    this.htmlElement.className = 'notification error';
    this.icon.className = 'fa fa-2x fa-exclamation-circle';

    this.show();
}

Notification.prototype.show = function() {
    if(!this.htmlElement.classList.contains('visible'))
        this.htmlElement.classList.add('visible');

    this.isRunning = true;
    this.autoReset();
};

Notification.prototype.autoReset = function() {
    var self = this;
    this.timeout = window.setTimeout(function() {
        self.reset();
    }, 5000);
}

Notification.prototype.reset = function() {
    this.htmlElement.className = "notification";
    this.icon.className = "";
    this.isRunning = false;
};

document.addEventListener('DOMContentLoaded', init);

function init() {
    var info = document.getElementById('info');
    var warn = document.getElementById('warn');
    var error = document.getElementById('error');

    var notificator = new Notification(document.querySelector('.notification'));

    info.onclick = function() {
        notificator.info('Esta es una información');
    }

    warn.onclick = function() {
        notificator.warning('Te te te advieeeerto!');
    }

    error.onclick = function() {
        notificator.error('Le causaste derrame al sistema');
    }
}




//run
var data = null;

var valBucle = 0;

Remesas(null);
Pedimentos();




var accion = 0;


// Funciones

function AccionGuardar(event){
    event.preventDefault()

   // alert ('AccionGuardar = ' + accion);

       if (accion == 1){Guardar();}else{ Modificar(); }
}


function validarTamaño(e){
    var Max_Length = 35;
    var keyA = e.keyCode || e.which;
    var lengthUS = document.getElementById("oficio").value.length;
    var lengthPS = document.getElementById("descripcion").value.length;
   
    var alertaCampo = document.getElementById("divAlerta2");
   
    var mostrarInsertaModifica = document.getElementById('InsertaModifica');
     
    if (lengthUS > Max_Length || lengthPS > Max_Length ) {
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
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz0123456789",
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




function quitarSimbolos(){

    var Eoficio = document.getElementById('oficio').value;
    var Edescripcion = document.getElementById('descripcion').value;
    
  

   // alert(Ecategoria);
    var specialChars = "!@$^&%*()+=-[]\/{}|:<>?,;.'";

    for (var i = 0; i < specialChars.length; i++) {
        Eoficio = Eoficio.replace(new RegExp("\\" + specialChars[i], "gi"), "");
       
    }

    for (var i = 0; i < specialChars.length; i++) {
        Edescripcion = Edescripcion.replace(new RegExp("\\" + specialChars[i], "gi"), "");
       
    }

    
    document.getElementById('oficio').value = Eoficio;
    document.getElementById('descripcion').value = Edescripcion;
    
    
    validarTamaño(Eoficio);
    validarTamaño(Edescripcion);
    
  }

function Remesas (valPaginacion)
{

    if(valPaginacion == null){ var paginaActiva = 1  } else {var paginaActiva = valPaginacion }

    ajaxGeneral(function(res){

        data = res;
        elemento = document.getElementById('crpTabla');

        var tabla = '';

        for (item in res) {
                tabla = tabla+ '<tr><td style="width:10px; text-align:left;">' + res[item].id + '</td>'+
                '<td style="width:50px; text-align:left;">' +res[item].Empresa + '</td>'+
                '<td style="width:20px; text-align:left;">' + res[item].noRemesa + '</td>'+
                '<td style="width:50px; text-align:left;">' + res[item].noOficio + '</td>'+
                '<td style="width:50px; text-align:left;">' + res[item].fechaOficio + '</td>'+
                '<td style="width:50px; text-align:left;">' + res[item].descripcion + '</td>'+
                '<td style="width:10px; text-align:left;">' + res[item].cantidad + '</td>'+
                '<td style="width:300px; text-align:left;">' + res[item].noPedimento + '</td>'+
                '<td style="width:50px; text-align:left;">' + res[item].fechaPedimento + '</td>'+
                '<td style="width:100px; text-align:left;" style = "">' + '<i onclick = "Editar('+res[item].id+','+1+')" class="fa fa-pencil-square-o" aria-hidden="true"></i>'; 
                if (res[item].totalVines == 0) {
                    tabla = tabla + '<i style="margin-left:15px;" onclick = "Editar('+res[item].id+','+2+')"class="fa fa-trash" aria-hidden="true"></i>'  + 
                    '<i style="margin-left:15px;" onclick = "CargarRemesa('+res[item].id+','+3+')"class="fa fa-archive aria-hidden="true"></i>';
                }
                     tabla = tabla +  '</td></tr>';
            }

            elemento.innerHTML = tabla;

            elemento = document.getElementById('listPaginacion');

            
            var paginacion = '';

            valBucle = 0;   

            if (res.length == 0){
              valBucle = 0; 
     
            
            }else{
              valBucle = Math.ceil(res[0].totalRegistros / 10); 
            } 
       console.log(valBucle);
       if (valBucle > 1) 
        {

            for (var i=1; i<=valBucle; i++) 
            {
                if (i == paginaActiva)
                {
                    paginacion = paginacion + '<li><a onclick="Remesas('+i+')" class="active" >'+ i +'</a></li>';
                }
                else
                {
                    paginacion = paginacion + '<li><a onclick="Remesas('+i+')" >'+ i +'</a></li>';
                }
            }

        }
        else
        {
            if (valBucle == 0){
                paginacion = '<li><a  class="active" >NO SE ENCONTRARON REGISTROS</a></li>';

            }else{
                paginacion =  '<li><a onclick="Pedimentos('+i+')" class="active" >1</a></li>';
            }
        }

        elemento.innerHTML = paginacion;

        // funcionalidad

        // fin funcionalidad    
    }, urlapp+"controladores/remesas.php?funcion=listar&parametros=10," + paginaActiva);
    
}

function Pedimentos()
{

     ajaxGeneral(function(res){
        elemento = document.getElementById('select_pedimento');

        var select = '';


        for (item in res) {
            select = select +  '<option value="'+ res[item].id+'">'+res[item].noPedimento+'</option>';
        }

        elemento.innerHTML = select;

    }, urlapp+"controladores/pedimentos.php?funcion=catalogoPedimentoXEmpresa")


}



function Crear(tipo){

    accion = tipo;

    var botonNuevo = document.getElementById("btnNuevo");
    botonNuevo.style.display = "none";

    document.getElementById('oficio').value = '';
    document.getElementById('descripcion').value = '';
    
    document.getElementById('oficio').disabled = false;
    document.getElementById('descripcion').disabled = false;

    var esconder = document.getElementById("Eliminar");
    esconder.style.display = "none";


    var mostrar = document.getElementById("InsertaModifica");
    mostrar.style.display = "block";
   


   
    elementoTitle = document.getElementById('titulo');
    elementoTitle.innerHTML = 'CREAR REMESA';
    

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



function CargarRemesa(nodo,tipo){

  
    function esID(itemValor) { 
        return itemValor.id == nodo;
    }
    
     var found = data.find(esID);
    
   var idRemesa = found.id
   var idPedimento = found.idPedimento
   var remesa  = found.noRemesa
   var noOficio  = found.noOficio
   var descripcion  =found.descripcion
   var cantidad = found.cantidad

  // alert(noOficio);

  // window.location.replace("../../../vistas/modulos/cargaMaster/index.php?id=" + idRemesa + "&idPedimento=" + idPedimento + "&remesa=" + remesa + "&noOficio=" + noOficio + "descripcion= " + descripcion + "&cantidad=" + cantidad);

  window.location.replace("../../../vistas/modulos/cargaMaster/index.php?idRemesa=" + idRemesa + "&idPedimento=" + idPedimento + "&remesa=" + remesa + "&noOficio=" + noOficio + "&descripcion= " + descripcion + "&cantidad=" + cantidad);

   // window.location.href = '..\cargaMaster.php';
     //?$proveedor=' + document.formulario.campo.value;

}


function Editar(nodo,tipo){

    var tipoAccionEditar = document.getElementById("InsertaModifica");
    var tipoAccionEliminar = document.getElementById("Eliminar");

    accion = 2;


    console.log(nodo)

    elementoTitle = document.getElementById('titulo');

    if (tipo==1){
       elementoTitle.innerHTML = 'EDITAR REMESA';

       var botonNuevo = document.getElementById("btnNuevo");
    botonNuevo.style.display = "none";

      
       tipoAccionEditar.style.display = "block";
       tipoAccionEliminar.style.display = "none";

    }else{
       elementoTitle.innerHTML = 'ELIMINAR REMESA';

       var botonNuevo = document.getElementById("btnNuevo");
    botonNuevo.style.display = "none";


       tipoAccionEditar.style.display = "none";
       tipoAccionEliminar.style.display = "block";

       document.getElementById('id').disabled = true;
       document.getElementById('select_pedimento').disabled = true;
       document.getElementById('remesa').disabled = true;
       document.getElementById('oficio').disabled = true;
       document.getElementById('descripcion').disabled = true;
       document.getElementById('cantidad').disabled = true;

    }

    function esID(itemValor) { 
        return itemValor.id == nodo;
    }
    
     var found = data.find(esID);
    

    console.log(found);

    document.getElementById('id').value = found.id
    document.getElementById('select_pedimento').value = found.idPedimento
    document.getElementById('remesa').value = found.noRemesa
    document.getElementById('oficio').value = found.noOficio
    document.getElementById('descripcion').value =found.descripcion
    document.getElementById('cantidad').value = found.cantidad
    
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


function Guardar(){
    var div = document.getElementById('txt_alert');

    div.innerHTML ='';


    var a = encodeURI(document.getElementById('select_pedimento').value)
    var b = encodeURI(document.getElementById('remesa').value)
    var c = encodeURI(document.getElementById('oficio').value)
    var d = encodeURI(document.getElementById('descripcion').value)
    var e = encodeURI(document.getElementById('cantidad').value)

    c = c.replace("'", "´");
    d = d.replace("'", "´");
  

    //alert('a = '+a + 'b = '+b + 'c = '+ c + 'd = '+d + ' e = '+e)

    if (a != '' && b != '' && c != '' && d != '' && e != '' && e >=1 && e <= 200){
      
        ajaxGeneral(function(res){  
            console.log(res[0])

            if(res[0].error == 'true'){
 
                var alertx = document.getElementById("divAlerta");
                        // alertx.innerHTML = "El campo de producto es obligatorio";
                        alertx.style.display="block";
        
                        var div = document.getElementById('txt_alert');
        
                        div.innerHTML += res[0].data;
               }else{
       
                   var notificator = new Notification(document.querySelector('.notification'));
                   notificator.info('Remesa Insertada');
                   document.getElementById('remesa').value = '';
                   document.getElementById('oficio').value = '';
                   document.getElementById('descripcion').value = '';
                   document.getElementById('cantidad').value = '';
       
        
                Cancelar();
        
     
            }
    }, urlapp+"controladores/remesas.php?funcion=guardar&parametros="+a+','+b+','+c+','+d+','+e)
}else
{ //alert('!Error el nombre del producto no puede estar en blanco!')
var alertx = document.getElementById("divAlerta");
// alertx.innerHTML = "El campo de producto es obligatorio";
alertx.style.display="block";
}
}


function Modificar(){
    var a =  encodeURI(document.getElementById('id').value)
    var b = encodeURI(document.getElementById('select_pedimento').value)
    var c = encodeURI(document.getElementById('remesa').value)
    var d = encodeURI(document.getElementById('oficio').value)
    var e = encodeURI(document.getElementById('descripcion').value)
    var f = encodeURI(document.getElementById('cantidad').value)

    d = d.replace("'", "´");
    e = e.replace("'", "´");
    

    if (c == 'n-a'){c = 1}

    ajaxGeneral(function(res){

        if(res[0].error == 'true'){

            var alertx = document.getElementById("divAlerta");
            // alertx.innerHTML = "El campo de producto es obligatorio";
            alertx.style.display="block";

            var div = document.getElementById('txt_alert');

            div.innerHTML += res[0].data;
        }else{
            var notificator = new Notification(document.querySelector('.notification'));
            notificator.info('Remesa actualizada');
            Cancelar();
        }
    }, urlapp+"controladores/remesas.php?funcion=modificar&parametros="+a+','+b+','+c+','+d+','+e+','+f)

}


function Eliminar(e){

    e.preventDefault();

    var a =  encodeURI(document.getElementById('id').value)

     //alert('Aqui ára eliminar la remesa = ' + a);
    
    ajaxGeneral(function(res){


        if(res[0].error == 'true'){
            var notificator = new Notification(document.querySelector('.notification'));
            notificator.error('error al eliminar');

        }else{

            var notificator = new Notification(document.querySelector('.notification'));
            notificator.info('Remesa Eliminada');

            document.getElementById('select_pedimento').disabled = false;
            document.getElementById('remesa').disabled = false;
            document.getElementById('oficio').disabled = false;
            document.getElementById('descripcion').disabled = false;
            document.getElementById('cantidad').disabled = false;

            document.getElementById('remesa').value = '';
            document.getElementById('oficio').value = '';
            document.getElementById('descripcion').value = '';
            document.getElementById('cantidad').value = '';

            Cancelar();

        }
    }, urlapp+"controladores/remesas.php?funcion=eliminar&parametros="+a)

}


function Cancelar(){
   // e.preventDefault();

   var alertx = document.getElementById("divAlerta");
   alertx.style.display="none";

   Remesas(null);
   Pedimentos();

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

