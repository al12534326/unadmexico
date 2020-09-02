//run

let dataReporte = null;
let tipoReporte = null;


let desde = document.getElementById('desde');
desde.addEventListener('change', setDesde);

let hasta = document.getElementById('hasta');
hasta.addEventListener('change', setHasta);


function setDesde(){
    var xDesde = document.getElementById("desde").value;
    var xHasta = document.getElementById("hasta");
    xHasta.min = xDesde;
    xDesde.mmax = xDesde
}

function setHasta(){
    var xHasta = document.getElementById("hasta").value;
    var xDesde = document.getElementById("desde");
    xDesde.max = xHasta;
    xHasta.min = xHasta;
}


function Reportes(){
    
    RepOficioXFecha(null);
}


function RepOficioXFecha (valPaginacion) 
{

    if(valPaginacion == null){ var paginaActiva = 1  } else {var paginaActiva = valPaginacion }

    ajaxGeneral(function(res){

        data = res;
        console.log(data);
        elemento = document.getElementById('crpTabla');

        var tabla = '';

            for (item in res) {
                tabla = tabla+ '<tr><td class="column1">' + res[item].pedimento + '</td>'+
                '<td class="column2">' +res[item].cantidad + '</td>'+
                '<td class="column3">' +res[item].noOficio + '</td>'+
                '<td class="column4">' + res[item].totalVines + '</td>'+
                '<td class="column2">' +res[item].pendientes + '</td>'+
                '<td class="column3">' +res[item].estatus + '</td></tr>';
                
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
                    paginacion = paginacion + '<li><a onclick="RepOficioXFecha('+i+')" class="active" >'+ i +'</a></li>';
                }
                else
                {
                    paginacion = paginacion + '<li><a onclick="RepOficioXFecha('+i+')" >'+ i +'</a></li>';
                }
            }

        }
        else
        {
            paginacion =  '<li><aonclick="RepOficioXFecha('+i+')" class="active" >1</a></li>';  
        }

        elemento.innerHTML = paginacion;

        // funcionalidad

        // fin funcionalidad    
    }, urlapp+"controladores/reportes.php?funcion=getReporteOficioPorFecha&parametros=10," + paginaActiva);
    
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

