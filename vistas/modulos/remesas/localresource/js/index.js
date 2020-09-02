//run
var data = null;

Remesas(null);
ObtenerPedimentos();



var accion = 0;


// Funciones

function AccionGuardar(){


    if (accion == 1){Guardar();}else{ Modificar(); }
}

function Remesas (valPaginacion)
{

    if(valPaginacion == null){ var paginaActiva = 1  } else {var paginaActiva = valPaginacion }

    ajaxGeneral(function(res){

        data = res;
        elemento = document.getElementById('crpTablaUsuarios');

        var tabla = '';

        for (item in res) {
                tabla = tabla+ '<tr><td class="column1">' + res[item].id + '</td>'+
                '<td class="column2">' +res[item].Empresa + '</td>'+
                '<td class="column3">' + res[item].noRemesa + '</td>'+
                '<td class="column4">' + res[item].noOficio + '</td>'+
                '<td class="column5">' + res[item].fechaOficio + '</td>'+
                '<td class="column6">' + res[item].descripcion + '</td>'+
                '<td class="column6">' + res[item].cantidad + '</td>'+
                '<td class="column6">' + res[item].noPedimento + '</td>'+
                '<td class="column6">' + res[item].fechaPedimento + '</td>'+
                '<td class="column7" style = "">' + '<i onclick = "Editar('+res[item].id+','+1+')" class="fa fa-pencil-square-o" aria-hidden="true"></i> <i onclick = "Editar('+res[item].id+','+2+')"class="fa fa-trash" aria-hidden="true"></i>' + '</td></tr>';
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
            paginacion =  '<li><aonclick="Remesas('+i+')" class="active" >1</a></li>';
        }

        elemento.innerHTML = paginacion;

        // funcionalidad

        // fin funcionalidad    
    }, "http://localhost:8066/controladores/remesas.php?funcion=listar&parametros=5," + paginaActiva);
    
}

function ObtenerPedimentos()
{

     ajaxGeneral(function(res){
        elemento = document.getElementById('select_pedimento');

        var select = '';


        for (item in res) {
            select = select +  '<option value="'+ res[item].id+'">'+res[item].noPedimento+'</option>';
        }

        elemento.innerHTML = select;

    }, "http://localhost:8066/controladores/pedimentos.php?funcion=catalogo")


}



function Crear(tipo){

    accion = tipo;

    
    elementoTitle = document.getElementById('titlUsuario');
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

function Editar(nodo,tipo){

    var tipoAccionEditar = document.getElementById("InsertaModifica");
    var tipoAccionEliminar = document.getElementById("Eliminar");


    console.log(nodo)

    elementoTitle = document.getElementById('titlUsuario');

    if (tipo==1){
       elementoTitle.innerHTML = 'EDITAR REMESA';
      
       tipoAccionEditar.style.display = "block";
       tipoAccionEliminar.style.display = "none";

    }else{
       elementoTitle.innerHTML = 'ELIMINAR REMESA';

       tipoAccionEditar.style.display = "none";
       tipoAccionEliminar.style.display = "block";
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

    var a = encodeURI(document.getElementById('select_pedimento').value)
    var b = encodeURI(document.getElementById('remesa').value)
    var c = encodeURI(document.getElementById('oficio').value)
    var d = encodeURI(document.getElementById('descripcion').value)
    var d = encodeURI(document.getElementById('cantidad').value)

   

    ajaxGeneral(function(res){
        
        
        CancelarUsuario();
    }, "http://localhost:8066/controladores/remesas.php?funcion=guardar&parametros="+a+','+b+','+c+','+d)

}


function Modificar(){
    var a =  encodeURI(document.getElementById('id').value)
    var a = encodeURI(document.getElementById('select_pedimento').value)
    var b = encodeURI(document.getElementById('remesa').value)
    var c = encodeURI(document.getElementById('oficio').value)
    var d = encodeURI(document.getElementById('descripcion').value)
    var f = encodeURI(document.getElementById('cantidad').value)

    ajaxGeneral(function(res){

        Cancelar();
    }, "http://localhost:8066/controladores/remesas.php?funcion=modificar&parametros="+a+','+b+','+c+','+d+','+e+','+f)

}


function Eliminar(){

    var a =  encodeURI(document.getElementById('id').value)

     alert('Aqui ára eliminar el Usuario = ' + a);
    
    ajaxGeneral(function(res){
        
        
        CancelarEmpresa();
    }, "http://localhost:8066/controladores/remesas.php?funcion=eliminar&parametros="+a)

}


function Cancelar(){

    Pedimentos(null);

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

