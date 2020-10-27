//run
var data = null;

var valBucle = 0;

var accion = 0;

RevisionAutomax(null);
//ObtenerRoles();
//ObtenerPersonal();


// Funciones

function AccionAutorizar(accion){
	var id =  encodeURI(document.getElementById('id').value);
	var modulador = 3;
	var estado = accion;
    var obs = encodeURI(document.getElementById('observaciones').value);
    if (obs != ''){
    ajaxGeneral(function(res){
    alert('Autorizacion correcta');    
    CancelarRevision1();
    }, urlapp+"controladores/automax.php?funcion=autorizar_automax&parametros="+id+'¬'+modulador+'¬'+estado+'¬'+obs)
  }else
  {alert('!El campo de observaciones es obligatorio')}
}



function AccionGuardar(){

    if (accion == 1){Guardar();}else{ Modificar(); }
}

function RevisionAutomax(valPaginacion) 
{

    if(valPaginacion == null){ var paginaActiva = 1  } else {var paginaActiva = valPaginacion }

    ajaxGeneral(function(res){

        data = res;
        elemento = document.getElementById('crpTabla');

        var tabla = '';

            for (item in res) {
                tabla = tabla+ '<tr><td style="width:10px;text-align:left;">' + res[item].id + '</td>'+
                '<td style="width:150px;text-align:left;">' +res[item].fechaCreacion + '</td>'+
                '<td style="width:150px;text-align:left;">' +res[item].empresa + '</td>'+
                '<td style="width:150px;text-align:left;">' + res[item].placas + '</td>'+
				'<td style="width:150px;text-align:left;">' + res[item].NoViaje + '</td>'+
				'<td style="width:150px;text-align:left;">' + res[item].cantidad + '</td>'+
	            '<td style="width:150px;text-align:left;">' + '<i onclick = "EditarPlaca('+res[item].id+')" class="fa fa-pencil-square-o" aria-hidden="true"></i>' + '</td></tr>';
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
                    paginacion = paginacion + '<li><a onclick="RevisionAutomax('+i+')" class="active" >'+ i +'</a></li>';
                }
                else
                {
                    paginacion = paginacion + '<li><a onclick="RevisionAutomax('+i+')" >'+ i +'</a></li>';
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
    }, urlapp+"controladores/automax.php?funcion=revisionAutomax&parametros=10," + paginaActiva);
    
}

function ObtenerVins(id){
	
	//alert('entra o obtener vins');
	
	ajaxGeneral(function(res){
        elemento = document.getElementById('crpTablaVines');

        var tablaVines = '';
		
		console.log(res);
        var vines = '';
        var totalVines = res.length;
        var casilla1 = '';
        var casilla2 = '';
        for (item in res) {
            if (casilla1 == ''){
                casilla1 = res[item].vin;
            }else{
                casilla2 = res[item].vin;
                tablaVines = tablaVines + '<tr><td class="column1">' + casilla1 + '           ,            ' +  casilla2 + '</td></tr>';
                casilla1 = '';
                casilla2 = '';
           }
        }
        elemento.innerHTML = tablaVines;

    }, urlapp+"controladores/automax.php?funcion=obtener_vinesAutomax&parametros="+id)
	
}



function Crear(tipo){

    accion = tipo;

    
    elementoTitle = document.getElementById('titlUsuario');
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
       elementoTitle.innerHTML = 'REVISION DE PLACAS AUTOMAX';
      
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



function CancelarRevision1(){

    RevisionAutomax(null);

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

