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

Personal(null);
Empresas();

var accion = 0;


// Funciones
function AccionGuardar(event){
    event.preventDefault()

   // alert ('AccionGuardar = ' + accion);

       if (accion == 1){Guardar();}else{ Modificar(); }
}

function Personal(valPaginacion)
{

    if(valPaginacion == null){ var paginaActiva = 1  } else {var paginaActiva = valPaginacion }

    ajaxGeneral(function(res){

        data = res;
        elemento = document.getElementById('crpTabla');

        var tabla = '';

            for (item in res) {
                tabla = tabla+ '<tr><td style="width:10px;txt-align:left">' + res[item].id + '</td>'+
                '<td style="width:100px;txt-align:left">' +res[item].empresa + '</td>'+
                '<td style="width:100px;txt-align:left">' +res[item].apellidoPaterno + '</td>'+
                '<td style="width:100px;txt-align:left">' +res[item].apellidoMaterno + '</td>'+
                '<td style="width:100px;txt-align:left">' +res[item].nombre + '</td>'+
                '<td style="width:100px;txt-align:left">' + '<i onclick = "Editar('+res[item].id+','+1+')" class="fa fa-pencil-square-o" aria-hidden="true"></i> <i onclick = "Editar('+res[item].id+','+2+')"class="fa fa-trash" aria-hidden="true"></i>' + '</td></tr>';
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
                    paginacion = paginacion + '<li><a onclick="Personal('+i+')" class="active" >'+ i +'</a></li>';
                }
                else
                {
                    paginacion = paginacion + '<li><a onclick="Personal('+i+')" >'+ i +'</a></li>';
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
    }, urlapp+"controladores/personal.php?funcion=listar&parametros=10," + paginaActiva);
    
}

function Empresas()
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

    accion = 1;

    var botonNuevo = document.getElementById("btnNuevo");
    botonNuevo.style.display = "none";

    var mostrar = document.getElementById('InsertaModifica');
    mostrar.style.display = "block";

    document.getElementById('apellidoPaterno').value = '';
    document.getElementById('apellidoMaterno').value = '';
    document.getElementById('nombre').value = '';

    document.getElementById('apellidoPaterno').disabled = false;
    document.getElementById('apellidoMaterno').disabled = false;
    document.getElementById('nombre').disabled = false;

   
    elementoTitle = document.getElementById('titulo');
    elementoTitle.innerHTML = 'CREAR PERSONAL';
    

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

function quitarSimbolos(){

    var EapellidoPaterno = document.getElementById('apellidoPaterno').value;
    var EapellidoMaterno = document.getElementById('apellidoMaterno').value;
    var Enombre = document.getElementById('nombre').value;

   // alert(Ecategoria);
    var specialChars = "!@$^&%*()+=-[]\/{}|:<>?,;.'";

    for (var i = 0; i < specialChars.length; i++) {
        EapellidoPaterno = EapellidoPaterno.replace(new RegExp("\\" + specialChars[i], "gi"), "");
       
    }

    for (var i = 0; i < specialChars.length; i++) {
        EapellidoMaterno = EapellidoMaterno.replace(new RegExp("\\" + specialChars[i], "gi"), "");
        
     }

     for (var i = 0; i < specialChars.length; i++) {
        Enombre = Enombre.replace(new RegExp("\\" + specialChars[i], "gi"), "");
        
     }

    document.getElementById('apellidoPaterno').value = Ecategoria;
    document.getElementById('apellidoMaterno').value = Ecategoria;
    document.getElementById('nombre').value = Ecategoria;

    validarTamaño(EapellidoPaterno);
    validarTamaño(EapellidoMaterno);
    validarTamaño(Enombre);

}


function Editar(nodo,tipo){

    var tipoAccionEditar = document.getElementById("InsertaModifica");
    var tipoAccionEliminar = document.getElementById("Eliminar");


    console.log(nodo)

    elementoTitle = document.getElementById('titulo');

    if (tipo==1){
       elementoTitle.innerHTML = 'EDITAR PERSONAL';

       var botonNuevo = document.getElementById("btnNuevo");
       botonNuevo.style.display = "none";
   
      
       tipoAccionEditar.style.display = "block";
       tipoAccionEliminar.style.display = "none";


       

    }else{
       elementoTitle.innerHTML = 'ELIMINAR PERSONAL';

       var botonNuevo = document.getElementById("btnNuevo");
       botonNuevo.style.display = "none";
   

       tipoAccionEditar.style.display = "none";
       tipoAccionEliminar.style.display = "block";

       document.getElementById('id').disabled = true;
       document.getElementById('select_empresas').disabled = true;
       document.getElementById('apellidoPaterno').disabled = true;
       document.getElementById('apellidoMaterno').disabled = true;
       document.getElementById('nombre').disabled = true;
    }

    function esID(itemValor) { 
        return itemValor.id == nodo;
    }
    
     var found = data.find(esID);
    

    console.log(found);
  

    document.getElementById('id').value = found.id
    document.getElementById('select_empresas').value = found.idEmpresa
    document.getElementById('apellidoPaterno').value =found.apellidoPaterno
    document.getElementById('apellidoMaterno').value =found.apellidoMaterno
    document.getElementById('nombre').value =found.nombre
    
   
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
    var lengthAP = document.getElementById("apellidoPaterno").value.length;
    var lengthAM = document.getElementById("apellidoMaterno").value.length;
    var lengthNombre = document.getElementById("nombre").value.length;
    var alertaCampo = document.getElementById("divAlerta2");
   

    var mostrarInsertaModifica = document.getElementById('InsertaModifica');
  
    if (lengthAP > Max_Length || lengthAM > Max_Length || lengthNombre > Max_Length ) {
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

    var a = encodeURI(document.getElementById('select_empresas').value)
    var b = encodeURI(document.getElementById('apellidoPaterno').value)
    var c = encodeURI(document.getElementById('apellidoMaterno').value)
    var d = encodeURI(document.getElementById('nombre').value)

    a = a.replace("'", "´");
    b = b.replace("'", "´");
    c = c.replace("'", "´");
    d = d.replace("'", "´");

    if (a != '' && b != '' && c != '' && d != ''){

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
                notificator.info('Personal Insertado');
     
             Cancelar();
     
            }
    }, urlapp+"controladores/personal.php?funcion=guardar&parametros="+a+','+b+','+c+','+d)
}else
{ //alert('!Error el nombre del producto no puede estar en blanco!')
var alertx = document.getElementById("divAlerta");
  // alertx.innerHTML = "El campo de producto es obligatorio";
   alertx.style.display="block";
   var div = document.getElementById('txt_alert');
   div.innerHTML += 'Todos los campos son obligatorios';
}
}


function Modificar(){

    var div = document.getElementById('txt_alert');

    div.innerHTML ='';

    var a =  encodeURI(document.getElementById('id').value)
    var b = encodeURI(document.getElementById('select_empresas').value)
    var c = encodeURI(document.getElementById('apellidoPaterno').value)
    var d = encodeURI(document.getElementById('apellidoMaterno').value)
    var e = encodeURI(document.getElementById('nombre').value)

    c = c.replace("'", "´");
    d = d.replace("'", "´");
    e = e.replace("'", "´");
          
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
            notificator.info('Personal Actualizado');
            
            document.getElementById('apellidoPaterno').value = '';
            document.getElementById('apellidoMaterno').value = '';
            document.getElementById('nombre').value = '';
            Cancelar();
        }
    }, urlapp+"controladores/personal.php?funcion=modificar&parametros="+a+','+b+','+c+','+d+','+e)

}


function Eliminar(e){
    e.preventDefault();

      var a =  encodeURI(document.getElementById('id').value)

    // alert('Aqui ára eliminar el Usuario = ' + a);
    
    ajaxGeneral(function(res){

        if(res[0].error == 'true'){
            var notificator = new Notification(document.querySelector('.notification'));


            notificator.error('error al eliminar');



        }else{

            var notificator = new Notification(document.querySelector('.notification'));


            notificator.info('Personal Eliminado');

            var oculta = document.getElementById('Eliminar');

            oculta.style.display = "none";

            document.getElementById('select_empresas').disabled = false;



            Cancelar();

        }
    }, urlapp+"controladores/personal.php?funcion=eliminar&parametros="+a)

}


function Cancelar(){
   
    var alertx = document.getElementById("divAlerta");
    alertx.style.display="none";

    Empresas(null);
    Personal();

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

