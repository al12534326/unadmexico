//run
var data = null;

Pedimentos(null);
ObtenerEmpresas();
ObtenerProductos();
ObtenerTiposPedimentos();



var accion = 0;


// Funciones

function AccionGuardar(){


    if (accion == 1){Guardar();}else{ Modificar(); }
}

function Pedimentos (valPaginacion)
{

    if(valPaginacion == null){ var paginaActiva = 1  } else {var paginaActiva = valPaginacion }

    ajaxGeneral(function(res){

        data = res;
        elemento = document.getElementById('crpTablaUsuarios');

        var tabla = '';

        for (item in res) {
                tabla = tabla+ '<tr><td class="column1">' + res[item].id + '</td>'+
                '<td class="column2">' +res[item].Empresa + '</td>'+
                '<td class="column3">' + res[item].TipoPedimentos + '</td>'+
                '<td class="column4">' + res[item].Producto + '</td>'+
                '<td class="column5">' + res[item].noPedimento + '</td>'+
                '<td class="column6">' + res[item].fechaCreacion + '</td>'+
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
                    paginacion = paginacion + '<li><a onclick="Pedimentos('+i+')" class="active" >'+ i +'</a></li>';
                }
                else
                {
                    paginacion = paginacion + '<li><a onclick="Pedimentos('+i+')" >'+ i +'</a></li>';
                }
            }

        }
        else
        {
            paginacion =  '<li><aonclick="Pedimentos('+i+')" class="active" >1</a></li>';
        }

        elemento.innerHTML = paginacion;

        // funcionalidad

        // fin funcionalidad    
    }, "http://localhost:8066/controladores/pedimentos.php?funcion=listar&parametros=5," + paginaActiva);
    
}

function ObtenerEmpresas()
{

     ajaxGeneral(function(res){
        elemento = document.getElementById('select_empresa');

        var select = '';


        for (item in res) {
            select = select +  '<option value="'+ res[item].id+'">'+res[item].nombre+'</option>';
        }

        elemento.innerHTML = select;

    }, "http://localhost:8066/controladores/empresas.php?funcion=catalogo")


}

function ObtenerProductos()
{
    ajaxGeneral(function(res){
        elemento = document.getElementById('select_producto');

        var select = '';


        for (item in res) {
            select = select +  '<option value="'+ res[item].id+'">'+res[item].nombre+'</option>';
        }

        elemento.innerHTML = select;

    }, "http://localhost:8066/controladores/productos.php?funcion=catalogo")
}

function ObtenerTiposPedimentos()
{
    ajaxGeneral(function(res){
        elemento = document.getElementById('select_tipoPedimento');

        var select = '';


        for (item in res) {
            select = select +  '<option value="'+ res[item].id+'">'+res[item].nombre+'</option>';
        }

        elemento.innerHTML = select;

    }, "http://localhost:8066/controladores/tiposPedimentos.php?funcion=catalogo")
}




function Crear(tipo){

    accion = tipo;

    
    elementoTitle = document.getElementById('titlUsuario');
    elementoTitle.innerHTML = 'CREAR PEDIMENTO';
    

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
       elementoTitle.innerHTML = 'EDITAR PEDIMENTO';
      
       tipoAccionEditar.style.display = "block";
       tipoAccionEliminar.style.display = "none";

    }else{
       elementoTitle.innerHTML = 'ELIMINAR PEDIMENTO';

       tipoAccionEditar.style.display = "none";
       tipoAccionEliminar.style.display = "block";
    }

    function esID(itemValor) { 
        return itemValor.id == nodo;
    }
    
     var found = data.find(esID);
    

    console.log(found);
  

    document.getElementById('id').value = found.id
    document.getElementById('select_empresa').value = found.idEmpresa
    document.getElementById('select_producto').value = found.idProducto
    document.getElementById('select_tipoPedimento').value = found.idTipoPedimento
    document.getElementById('noPedimento').value =found.noPedimento
    document.getElementById('fecha').value = found.fechaCreacion
    
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
    var a = encodeURI(document.getElementById('pedimento').value)
    var b = encodeURI(document.getElementById('select_producto').value)
    var c = encodeURI(document.getElementById('select_empresa').value)
    var d = encodeURI(document.getElementById('select_tipoPedimento').value)

   

    ajaxGeneral(function(res){
        
        
        CancelarUsuario();
    }, "http://localhost:8066/controladores/pedimentos.php?funcion=guardar&parametros="+a+','+b+','+c+','+d)

}


function Modificar(){
    var a =  encodeURI(document.getElementById('id').value)
    var b =  encodeURI(document.getElementById('pedimento').value)
    var c = encodeURI(document.getElementById('select_producto').value)
    var d = encodeURI(document.getElementById('select_empresa').value)
    var e = encodeURI(document.getElementById('tipoPedimento').value)

    ajaxGeneral(function(res){

        Cancelar();
    }, "http://localhost:8066/controladores/pedimentos.php?funcion=modificar&parametros="+a+','+b+','+c+','+d+','+e)

}


function Eliminar(){

    var a =  encodeURI(document.getElementById('id').value)

     alert('Aqui ára eliminar el Usuario = ' + a);
    
    ajaxGeneral(function(res){
        
        
        CancelarEmpresa();
    }, "http://localhost:8066/controladores/pedimentos.php?funcion=eliminar&parametros="+a)

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
