//run
let cargamaster = null;
let cargaMasterExcel = null;
let validarCarga = null;
let listaVins = null;

let listData = null;
let listError = null;

let contadorVines = 0;
let tamañoVines = 0;
let tamañoErrorVines = 0;
let leyendaErrorVines = '';
let str = null;
let cantidad = 0;

const selectElement = document.getElementById('my_upload');

selectElement.addEventListener('change', (evt) => {
    var selectedFile = evt.target.files[0];
    var reader = new FileReader();

    if (selectedFile.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){

   // alert(selectedFile.type);

    reader.onload = function(event) {
        var data = event.target.result;
        var workbook = XLSX.read(data, {
            type: 'binary'
        });


        workbook.SheetNames.forEach(function(sheetName) {

            var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
            var json_object = JSON.stringify(XL_row_object);

            console.log('manuei', json_object);

           //

           obj = JSON.parse(json_object);

          // console.log(obj);

           for (items in obj){
            console.log(obj[items].Vin);
            contadorVines = contadorVines + 1;
            str = obj[items].Vin;
            tamañoVines = str.length;

            if (tamañoVines == 17){
                 tamañoErrorVines = 0;
                 leyendaErrorVines = '';
             }else{
                 tamañoErrorVines = 1;
                 leyendaErrorVines = 'la longitud del vin debe ser de 17 caracteres';
             }

            listaVins = listaVins +  obj[items].Vin + ",  ";
          
          }


          if (contadorVines !=0 ){
            var listadoVines = listaVins.replace(null,'');
            document.getElementById("jsonObject").innerHTML = listadoVines;
          }
 
            cargamaster = json_object;
            cargamasterExcel = json_object;

            //document.getElementById("jsonObject").innerHTML = json_object;
        }
        
        )

        cantidad = document.getElementById("cantidad").value;

       

      //  alert("cantidad = " + cantidad);

        if (contadorVines != 0 ){

          //  alert(contadorVines);
         //  alert(tamañoErrorVines);

            if (contadorVines == cantidad && tamañoErrorVines == 0){
                console.log(cargamaster);
                CargaMaster(JSON.stringify(cargamaster))
            }else{
                document.getElementById("Aviso").innerHTML = 'La cantidad de vins en la remesa es de = ' + cantidad + ' y el Excel tiene = ' + contadorVines + ' ' + leyendaErrorVines;
                var accion = document.getElementById("salirCargaExcel");
                accion.style.display = "block";
            }
           
        }else{
            document.getElementById("Aviso").innerHTML = 'El archivo de excel no contiene vins';
            var accion = document.getElementById("salirCargaExcel");
            accion.style.display = "block";
        }
    };

    reader.onerror = function(event) {
        alert( "File could not be read! Code  " + event.target.error.code);

        console.error("File could not be read! Code " + event.target.error.code);
    };

    reader.readAsBinaryString(selectedFile);
}else{
    document.getElementById("Aviso").innerHTML = 'El archivo No es un formato de excel';
    var accion = document.getElementById("salirCargaExcel");
    accion.style.display = "block";
}

});


function btmCargarExcel(e){
    e.preventDefault();
    var idRemesa = document.getElementById("idRemesa").value;

    //window.location.replace("../../../vistas/modulos/cargaMasterExcel/index.php?vins="+ JSON.stringify(cargamasterExcel) + "&id=" +idRemesa );
    
    CargaExcel(JSON.stringify(cargamasterExcel))
}


function CargaMaster(cargamaster){
    ajaxGeneral(function(res){
        var listData = JSON.parse(res[0].data);
        var listError = JSON.parse(res[0].error);
      //  var x = JSON.parse('{"id":"NULL"}');
      //console.log (x.id);

      console.log('data ListData');
      console.log(listData);

      //alert(listData[0].id);


       if(listData[0].id != "NULL"){
            document.getElementById("Aviso").innerHTML = '!!1 Estos Vines Tienen errores revise su archivo de Excel !!!';

            var accion = document.getElementById("InsertaModifica");
            accion.style.display = "block";
           
            var boton = document.getElementById("cargaExcel");
            boton.style.display = "none";
        }else{
            var accion2 = document.getElementById("InsertaModifica");
            accion2.style.display = "block";
        }
       // Cancelar();
    }, urlapp+ "controladores/cargamaster.php?funcion=guardar&parametros="+cargamaster)

}

function CargaExcel(cargamasterExcel){

  //  alert('aQUI VA A CARGAR');
    var idRemesa = document.getElementById("idRemesa").value;
    
    ajaxGeneral(function(res){

   console.log('soyecnco', res);
   var listData = JSON.parse(res[0].data);
   var listError = JSON.parse(res[0].error);

   if(listData[0].id != "NULL"){
    document.getElementById("Aviso").innerHTML = '!!1 Vines Cargados correctamente !!!';

    var estado = document.getElementById("InsertaModifica");
    estado.style.display = "none";

    var estado2 = document.getElementById("salirCargaExcel");
    estado2.style.display = "block";

   }
      
},urlapp+"controladores/cargamaster.php?funcion=insertarCargaMaster&parametros="+cargamasterExcel+ '&id=' + idRemesa)


}


function Cancelar(e){
e.preventDefault(); 
window.location.replace("../../../vistas/modulos/remesas/index.php");

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

