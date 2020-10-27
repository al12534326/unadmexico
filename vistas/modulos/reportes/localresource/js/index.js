//run
var data = null;

var valBucle = 0;

var accion = 0;

let xDesde = null;
let xHasta = null;


let desde = document.getElementById('desde');
desde.addEventListener('change', setDesde);

let hasta = document.getElementById('hasta');
hasta.addEventListener('change', setHasta);


desde.value = new Date();
hasta.value = new Date();

function setDesde(){
    xDesde = document.getElementById("desde").value;
    xHasta = document.getElementById("hasta");
    xHasta.min = xDesde;
    xDesde.mmax = xDesde
   
}

function setHasta(){
    xHasta = document.getElementById("hasta").value;
    xDesde = document.getElementById("desde");
    xDesde.max = xHasta;
    xHasta.min = xHasta;

    
}




//concentado por dia

function concentrado(valPaginacion)
{

    var tbl = '<table>' +
    '<thead>' +
      '<tr class="table100-head">' +
      '<th class="column3">FECHA</th>' +
      '<th class="column22">06:00 06:59</th>' +
      '<th class="column22">07:00 07:59</th>' +
      '<th class="column22">08:00 08:59</th>' +
      '<th class="column22">09:00 09:59</th>' +
      '<th class="column22">10:00 10:59</th>' +
      '<th class="column22">11:00 11:59</th>' +
      '<th class="column22">12:00 12:59</th>' +
      '<th class="column22">13:00 13:59</th>' +
      '<th class="column22">14:00 14:59</th>' +
      '<th class="column22">15:00 15:59</th>' +
      '<th class="column22">16:00 16:59</th>' +
      '<th class="column22">17:00 17:59</th>' +
      '<th class="column22">18:00 18:59</th>' +
      '<th class="column22">19:00 19:59</th>' +
      '<th class="column22">20:00 20:59</th>' +
      '<th class="column22">21:00 21:59</th>' +
      '<th class="column22">22:00 22:59</th>' +
      '<th class="column22">23:00 23:59</th>' +
      '</tr>' +
      '</thead>';
        
    
    //alert('aqui tiene que entrar ');

    if(valPaginacion == null){ var paginaActiva = 1  } else {var paginaActiva = valPaginacion }

    ajaxGeneral(function(res){

        data = res;


       
        var str = JSON.stringify(data);
        elemento = document.getElementById('tablaped');

        var txt = document.getElementById('txt');
       // txt.innerHTML = str;


        var tabla = '';



        

        for (item in res) {
            tbl = tbl+ '<tr>' + 
            '<td class="column3">' + res[item].fecha + '</td>'+
            '<td class="column22">' + res[item].h1 + '</td>'+
            '<td class="column22">' + res[item].h2 + '</td>'+
            '<td class="column22">' + res[item].h3 + '</td>'+
            '<td class="column22">' + res[item].h4 + '</td>'+
            '<td class="column22">' + res[item].h5 + '</td>'+
            '<td class="column22">' + res[item].h6 + '</td>'+
            '<td class="column22">' + res[item].h7 + '</td>'+
            '<td class="column22">' + res[item].h8 + '</td>'+
            '<td class="column22">' + res[item].h9 + '</td>'+
            '<td class="column22">' + res[item].h10 + '</td>'+
            '<td class="column22">' + res[item].h11 + '</td>'+
            '<td class="column22">' + res[item].h12 + '</td>'+
            '<td class="column22">' + res[item].h13 + '</td>'+
            '<td class="column22">' + res[item].h14 + '</td>'+
            '<td class="column22">' + res[item].h15 + '</td>'+
            '<td class="column22">' + res[item].h16 + '</td>'+
            '<td class="column22">' + res[item].h17 + '</td>'+
            '<td class="column22">' +res[item].h18 + '</td></tr>';
            
        }


         tbl = tbl + '<tbody ></tbody></table>';           
        
        elemento.innerHTML = tbl;

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
           
            
            if (valBucle == 0){
                paginacion = '<li><a  class="active" >NO SE ENCONTRARON REGISTROS</a></li>';

            }else{
                paginacion =  '<li><a onclick="Pedimentos('+i+')" class="active" >1</a></li>';
            }
           
        }

        elemento.innerHTML = paginacion;

        // funcionalidad

        // fin funcionalidad    
    }, urlapp+"controladores/reportes.php?funcion=concentrado&parametros=10," + paginaActiva + "," + desde.value + "," + hasta.value );
    
}
//Concentrado por dia

function Reportes(){
    var Opcion = document.getElementById("select_reporte").value;
   // alert(Opcion);

    if (desde.value != '' && hasta.value != ''){
        //alert('Desde = ' + desde.value +' Hasta = '+ hasta.value);
        var x = document.getElementById("content-table");
        x.style.display = "block";
        //Pedimentos(null)

        if (Opcion == 1){
            Pedimentos(null);
        }

        if (Opcion == 2){
            concentrado();
        }

        
    }else
    {alert('Fechas invalidad')}
  
}



// Funciones

function AccionGuardar(){


    if (accion == 1){Guardar();}else{ Modificar(); }
}

function Pedimentos (valPaginacion)
{

    var tbl = '<table>' +
    '<thead>' +
      '<tr class="table100-head">' +
      '<th class="column5">FECHA</th>' +
      '<th class="column5">FECHA CIERRE</th>' +
      '<th class="column1">EMPRESA</th>' +
      '<th class="column2">CANTIDAD</th>' +
      '<th class="column3">NO.OFICIO</th>' +
      '<th class="column3">VINS</th>' +
      '<th class="column2">PENDIENTES</th>' +
      '<th class="column3">ESTATUS</th>' +
      '</tr>' +
      '</thead>';
        
    
    //alert('aqui tiene que entrar ');

    if(valPaginacion == null){ var paginaActiva = 1  } else {var paginaActiva = valPaginacion }

    ajaxGeneral(function(res){

        data = res;

        var str = JSON.stringify(data);
        elemento = document.getElementById('tablaped');

        var txt = document.getElementById('txt');
       // txt.innerHTML = str;


        var tabla = '';

        for (item in res) {
            tbl = tbl+ '<tr>' + 
            '<td class="column5">' + res[item].fechaOficio + '</td>'+
            '<td class="column3">' + res[item].fechaCierre + '</td>'+
            '<td class="column1">' + res[item].nombre + '</td>'+
            '<td class="column2">' +res[item].cantidad + '</td>'+
            '<td class="column3">' +res[item].noOficio + '</td>'+
            '<td class="column4">' + res[item].totalVines + '</td>'+
            '<td class="column2">' +res[item].pendientes + '</td>'+
            '<td class="column3">' +res[item].estatus + '</td></tr>';
            
        }


         tbl = tbl + '<tbody ></tbody></table>';           
        
        elemento.innerHTML = tbl;

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
            if (valBucle == 0){
                paginacion = '<li><a  class="active" >NO SE ENCONTRARON REGISTROS</a></li>';

            }else{
                paginacion =  '<li><a onclick="Pedimentos('+i+')" class="active" >1</a></li>';
            }
        }

        elemento.innerHTML = paginacion;

        // funcionalidad

        // fin funcionalidad    
    }, urlapp+"controladores/reportes.php?funcion=listar&parametros=10," + paginaActiva + "," + desde.value + "," + hasta.value );
    
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

    }, urlapp+"controladores/empresas.php?funcion=catalogo")


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

    }, urlapp+"controladores/productos.php?funcion=catalogo")
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

    }, urlapp+"controladores/tiposPedimentos.php?funcion=catalogo")
}




function Crear(tipo){

    accion = tipo;

    
    elementoTitle = document.getElementById('titulo');
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

    elementoTitle = document.getElementById('titulo');

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
   // document.getElementById('fecha').value = found.fechaCreacion
    
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
    var a = encodeURI(document.getElementById('noPedimento').value)
    var b = encodeURI(document.getElementById('select_producto').value)
    var c = encodeURI(document.getElementById('select_empresa').value)
    var d = encodeURI(document.getElementById('select_tipoPedimento').value)

    if (a != '' && b != '' && c != '' && d != ''){
        ajaxGeneral(function(res){
        alert('Registro correcto');
        Cancelar();
    }, urlapp+"controladores/pedimentos.php?funcion=guardar&parametros="+a+','+b+','+c+','+d)
}else
{alert('!Todos los campos deben de contener valor')}
}


function Modificar(){
   // alert('modificar pedimento');

    var a =  encodeURI(document.getElementById('id').value)
    var b =  encodeURI(document.getElementById('noPedimento').value)
    var c = encodeURI(document.getElementById('select_producto').value)
    var d = encodeURI(document.getElementById('select_empresa').value)
    var e = encodeURI(document.getElementById('select_tipoPedimento').value)


   // alert('a = ' + a + 'b = ' +b + 'c = '+ c + 'd = ' + d + 'e = ' + e);

    ajaxGeneral(function(res){

        Cancelar();
    }, urlapp+"controladores/pedimentos.php?funcion=modificar&parametros="+a+','+b+','+c+','+d+','+e)

}


function Eliminar(){

    var a =  encodeURI(document.getElementById('id').value)

   //  alert('Aqui ára eliminar el Usuario = ' + a);
    
    ajaxGeneral(function(res){
        
        
        CancelarEmpresa();
    }, urlapp+"controladores/pedimentos.php?funcion=eliminar&parametros="+a)

}


function Cancelar(){
   // e.preventDefault();

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



function bajarExcel(tableID, filename = ''){

    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
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

