//run
var data = null;

var accion = 0;

RevisionModulador1(null);
//ObtenerRoles();
//ObtenerPersonal();


// Funciones

function AccionAutorizar(accion){
	
	
	
	var id =  encodeURI(document.getElementById('id').value);
	var modulador = 1;
	var estado = accion;
    var obs = encodeURI(document.getElementById('observaciones').value);
    if (obs != ''){
        ajaxGeneral(function(res){
        alert('Autorizacion correcta');    
        CancelarRevision1();
        },  urlapp+"controladores/revision1.php?funcion=autorizar_modulador1&parametros="+id+'¬'+modulador+'¬'+estado+'¬'+obs)
      }else
      {alert('!El campo de observaciones es obligatorio')}
}


function AccionGuardar(){

    if (accion == 1){Guardar();}else{ Modificar(); }
}

function RevisionModulador1(valPaginacion) 
{

    if(valPaginacion == null){ var paginaActiva = 1  } else {var paginaActiva = valPaginacion }

    ajaxGeneral(function(res){

        data = res;
        elemento = document.getElementById('crpTabla');

        var tabla = '';

            for (item in res) {
                tabla = tabla+ '<tr><td class="column1">' + res[item].id + '</td>'+
                '<td class="column2">' +res[item].fechaCreacion + '</td>'+
                '<td class="column3">' +res[item].empresa + '</td>'+
                '<td class="column4">' + res[item].placas + '</td>'+
				'<td class="column5">' + res[item].NoViaje + '</td>'+
				'<td class="column6">' + res[item].cantidad + '</td>'+
	            '<td class="column7" style = "">' + '<i onclick = "EditarPlaca('+res[item].id+')" class="fa fa-pencil-square-o" aria-hidden="true"></i>' + '</td></tr>';
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
                    paginacion = paginacion + '<li><a onclick="RevisionModulador1('+i+')" class="active" >'+ i +'</a></li>';
                }
                else
                {
                    paginacion = paginacion + '<li><a onclick="RevisionModulador1('+i+')" >'+ i +'</a></li>';
                }
            }

        }
        else
        {
            paginacion =  '<li><aonclick="RevisionModulador1('+i+')" class="active" >1</a></li>';  
        }

        elemento.innerHTML = paginacion;
		
		

        // funcionalidad

        // fin funcionalidad    
    }, urlapp+"controladores/revision1.php?funcion=revisionModulador1&parametros=10," + paginaActiva);
    
}

function ObtenerVins(id){
	
	//alert('entra o obtener vins');
	
	ajaxGeneral(function(res){
        elemento = document.getElementById('crpTablaVines');

        var tablaVines = '';
		
		console.log(res);


        for (item in res) {
            tablaVines = tablaVines + '<tr><td class="column1">' + res[item].vin + '</td>';
        }

        elemento.innerHTML = tablaVines;

    }, urlapp+"controladores/revision1.php?funcion=obtener_vines&parametros="+id)
	
}



function ObtenerRoles()
{

     ajaxGeneral(function(res){
        elemento = document.getElementById('select_roles');

        var select = '';


        for (item in res) {
            select = select +  '<option value="'+ res[item].id+'">'+res[item].nombre+'</option>';
        }

        elemento.innerHTML = select;

    }, urlapp+"controladores/roles.php?funcion=catalogo_roles")


}

function ObtenerPersonal()
{

     ajaxGeneral(function(res){
        elemento = document.getElementById('select_personal');

        var select = '';


        for (item in res) {
            select = select +  '<option value="'+ res[item].id+'">'+res[item].nombre+'</option>';
        }

        elemento.innerHTML = select;

    }, urlapp+"controladores/personal.php?funcion=catalogo_personal")


}




function CrearUsuario(tipo){

    accion = tipo;

    
    elementoTitle = document.getElementById('titulo');
    elementoTitle.innerHTML = 'CREAR USUARIO';
    

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

function EditarPlaca(nodo){
	
//	alert('entra editarplaca');

    var tipoAccionEditar = document.getElementById("InsertaModifica");
    var tipoAccionEliminar = document.getElementById("Eliminar");


    console.log(nodo)

    elementoTitle = document.getElementById('titulo');

    //if (tipo==1){
       elementoTitle.innerHTML = 'REVISION DE PLACAS MODULADOR 1';
      
    //   tipoAccionEditar.style.display = "block";
    //   tipoAccionEliminar.style.display = "none";

   // }else{
    //   elementoTitle.innerHTML = 'AUTORIZAR PLACA';

    //   tipoAccionEditar.style.display = "none";
     //  tipoAccionEliminar.style.display = "block";
   // }

    function esID(itemValor) { 
        return itemValor.id == nodo;
    }
    
     var found = data.find(esID);
    

    console.log(found);
  

    document.getElementById('id').value = found.id
   	document.getElementById('fecha').value =found.fechaCreacion
    document.getElementById('empresa').value =found.empresa
    document.getElementById('placas').value = found.placas
    document.getElementById('noViaje').value =found.NoViaje
    document.getElementById('cantidad').value =found.cantidad
    document.getElementById('observaciones').value =found.observacion

    document.getElementById('id').setAttribute("disabled", true);
    document.getElementById('fecha').setAttribute("disabled", false);
    document.getElementById('empresa').setAttribute("disabled", false);
    document.getElementById('placas').setAttribute("disabled", false);
    document.getElementById('noViaje').setAttribute("disabled", false);
    document.getElementById('cantidad').setAttribute("disabled", false);
   

    //document.getElementById('').value = found.email
    
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

      ObtenerVins(found.id)
}


function GuardarUsuario(){

    var a = encodeURI(document.getElementById('select_roles').value)
    var b = encodeURI(document.getElementById('select_personal').value)
    var c = encodeURI(document.getElementById('usuario').value)
    var d = encodeURI(document.getElementById('password').value)
    var e =  encodeURI(document.getElementById('email').value)
   

    ajaxGeneral(function(res){
        
        
        CancelarRevision1()
    }, urlapp+"controladores/usuarios.php?funcion=guardar_usuario&parametros="+a+','+b+','+c+','+d+','+e)

}


function ModificarUsuario(){

    var a =  encodeURI(document.getElementById('id').value)
    var b = encodeURI(document.getElementById('select_roles').value)
    var c = encodeURI(document.getElementById('select_personal').value)
    var d = encodeURI(document.getElementById('usuario').value)
    var e = encodeURI(document.getElementById('password').value)
    var f =  encodeURI(document.getElementById('email').value)
         
    ajaxGeneral(function(res){
        
        
        CancelarRevision1()
    }, urlapp+"controladores/usuarios.php?funcion=modificar_usuario&parametros="+a+','+b+','+c+','+d+','+e+','+f)

}


function EliminarUsuario(){

    var a =  encodeURI(document.getElementById('id').value)

     alert('Aqui ára eliminar el Usuario = ' + a);
    
    ajaxGeneral(function(res){
        
        
        CancelarRevision1()
    }, urlapp+"controladores/usuarios.php?funcion=eliminar_usuario&parametros="+a)

}


function CancelarRevision1(){

    RevisionModulador1(null);

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

