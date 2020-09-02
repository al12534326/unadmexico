//run
var data = null;

Personal(null);
Empresas();

var accion = 0;


// Funciones

function AccionGuardar(){

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
                tabla = tabla+ '<tr><td class="column1">' + res[item].id + '</td>'+
                '<td class="column2">' +res[item].empresa + '</td>'+
                '<td class="column3">' +res[item].apellidoPaterno + '</td>'+
                '<td class="column3">' +res[item].apellidoMaterno + '</td>'+
                '<td class="column3">' +res[item].nombre + '</td>'+
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
            paginacion =  '<li><aonclick="Personal('+i+')" class="active" >1</a></li>';
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

    accion = tipo;

    var botonNuevo = document.getElementById("btnNuevo");
    botonNuevo.style.display = "none";


    
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
    }

    function esID(itemValor) { 
        return itemValor.id == nodo;
    }
    
     var found = data.find(esID);
    

    console.log(found);
  

    document.getElementById('id').value = found.id
    document.getElementById('select_empresas').value = found.idEmpresa
    document.getElementById('apellidoPaterno').value =found.apellidoPaterno
    document.getElementById('apellidoMaterno').value =found.apellidoPaterno
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

function Guardar(){

    var a = encodeURI(document.getElementById('idEmpresa').value)
    var b = encodeURI(document.getElementById('apellidoPaterno').value)
    var c = encodeURI(document.getElementById('apellidoMaterno').value)
    var d = encodeURI(document.getElementById('nombre').value)

    if (a != '' && b != '' && c != '' && d != ''){

        ajaxGeneral(function(res){
        alert('!Registro correcto!');
        CancelarEmpresa();
    }, urlapp+"controladores/personal.php?funcion=guardar&parametros="+a+','+b+','+c+','+d)
}else
{alert('!Todos los campos deben de estar llenos')}
}


function Modificar(){

    var a =  encodeURI(document.getElementById('id').value)
    var b = encodeURI(document.getElementById('idEmpresa').value)
    var c = encodeURI(document.getElementById('apellidoPaterno').value)
    var d = encodeURI(document.getElementById('apellidoMaterno').value)
    var e = encodeURI(document.getElementById('nombre').value)

       
    ajaxGeneral(function(res){
        
        
        Cancelar();
    }, urlapp+"controladores/correos.php?funcion=modificar&parametros="+a+','+b+','+c+','+d+','+e)

}


function Eliminar(){

    var a =  encodeURI(document.getElementById('id').value)

     alert('Aqui ára eliminar la empresa = ' + a);
    
    ajaxGeneral(function(res){
        
        
        Cancelar();
    }, urlapp+"controladores/correos.php?funcion=eliminar&parametros="+a)

}


function Cancelar(e){
    e.preventDefault();

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

