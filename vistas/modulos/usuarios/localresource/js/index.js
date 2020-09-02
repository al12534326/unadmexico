//run
var data = null;

ObtenerUsuarios(null);
ObtenerRoles();
ObtenerPersonal();

var accion = 0;


// Funciones

function AccionGuardarUsuario(){

   

    if (accion == 1){GuardarUsuario();}else{ ModificarUsuario(); }
}

function ObtenerUsuarios (valPaginacion) 
{

    if(valPaginacion == null){ var paginaActiva = 1  } else {var paginaActiva = valPaginacion }

    ajaxGeneral(function(res){

        data = res;
        elemento = document.getElementById('crpTablaUsuarios');

        var tabla = '';

            for (item in res) {
                tabla = tabla+ '<tr><td class="column1">' + res[item].id + '</td>'+
                '<td class="column2">' +res[item].Rol + '</td>'+
                '<td class="column3">' +res[item].Personal + '</td>'+
                '<td class="column4">' + res[item].usuario + '</td>'+
                '<td class="column5">' + res[item].email + '</td>'+
                '<td class="column6" style = "">' + '<i onclick = "EditarUsuario('+res[item].id+','+1+')" class="fa fa-pencil-square-o" aria-hidden="true"></i> <i onclick = "EditarUsuario('+res[item].id+','+2+')"class="fa fa-trash" aria-hidden="true"></i>' + '</td></tr>';
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
                    paginacion = paginacion + '<li><a onclick="ObtenerUsuarioss('+i+')" class="active" >'+ i +'</a></li>';
                }
                else
                {
                    paginacion = paginacion + '<li><a onclick="ObtenerUsuarios('+i+')" >'+ i +'</a></li>';
                }
            }

        }
        else
        {
            paginacion =  '<li><aonclick="ObtenerUsuarios('+i+')" class="active" >1</a></li>';  
        }

        elemento.innerHTML = paginacion;

        // funcionalidad

        // fin funcionalidad    
    }, "http://localhost:8066/controladores/usuarios.php?funcion=listar_usuarios&parametros=5," + paginaActiva);
    
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

    }, "http://localhost:8066/controladores/roles.php?funcion=catalogo_roles")


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

    }, "http://localhost:8066/controladores/personal.php?funcion=catalogo_personal")


}




function CrearUsuario(tipo){

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

function EditarUsuario(nodo,tipo){

    var tipoAccionEditar = document.getElementById("InsertaModifica");
    var tipoAccionEliminar = document.getElementById("Eliminar");


    console.log(nodo)

    elementoTitle = document.getElementById('titlUsuario');

    if (tipo==1){
       elementoTitle.innerHTML = 'EDITAR USUARIO';
      
       tipoAccionEditar.style.display = "block";
       tipoAccionEliminar.style.display = "none";

    }else{
       elementoTitle.innerHTML = 'ELIMINAR USUARIO';

       tipoAccionEditar.style.display = "none";
       tipoAccionEliminar.style.display = "block";
    }

    function esID(itemValor) { 
        return itemValor.id == nodo;
    }
    
     var found = data.find(esID);
    

    console.log(found);
  

    document.getElementById('id').value = found.id
    document.getElementById('select_roles').value = found.idRol
    document.getElementById('select_personal').value = found.idPersonal
    document.getElementById('usuario').value =found.usuario
    document.getElementById('password').value =found.password
    document.getElementById('email').value = found.email
    
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


function GuardarUsuario(){

    var a = encodeURI(document.getElementById('select_roles').value)
    var b = encodeURI(document.getElementById('select_personal').value)
    var c = encodeURI(document.getElementById('usuario').value)
    var d = encodeURI(document.getElementById('password').value)
    var e =  encodeURI(document.getElementById('email').value)
   

    ajaxGeneral(function(res){
        
        
        CancelarUsuario();
    }, "http://localhost:8066/controladores/usuarios.php?funcion=guardar_usuario&parametros="+a+','+b+','+c+','+d+','+e)

}


function ModificarUsuario(){

    var a =  encodeURI(document.getElementById('id').value)
    var b = encodeURI(document.getElementById('select_roles').value)
    var c = encodeURI(document.getElementById('select_personal').value)
    var d = encodeURI(document.getElementById('usuario').value)
    var e = encodeURI(document.getElementById('password').value)
    var f =  encodeURI(document.getElementById('email').value)
         
    ajaxGeneral(function(res){
        
        
        CancelarUsuario();
    }, "http://localhost:8066/controladores/usuarios.php?funcion=modificar_usuario&parametros="+a+','+b+','+c+','+d+','+e+','+f)

}


function EliminarUsuario(){

    var a =  encodeURI(document.getElementById('id').value)

     alert('Aqui ára eliminar el Usuario = ' + a);
    
    ajaxGeneral(function(res){
        
        
        CancelarEmpresa();
    }, "http://localhost:8066/controladores/usuarios.php?funcion=eliminar_usuario&parametros="+a)

}


function CancelarUsuario(){

    ObtenerUsuarios(null);

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

