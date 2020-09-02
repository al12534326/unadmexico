//run
let cargadiaria = null;

let validarCarga = null;
let listaVins = null;

let listData = null;
let listError = null;

const selectElement = document.getElementById('my_upload');

selectElement.addEventListener('change', (evt) => {
    var selectedFile = evt.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
        var data = event.target.result;
        var workbook = XLSX.read(data, {
            type: 'binary'
        });
        workbook.SheetNames.forEach(function(sheetName) {

            var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
            let json_object = JSON.stringify(XL_row_object);

            cargadiaria = json_object;
            //document.getElementById("jsonObject").innerHTML = json_object;
            obj = JSON.parse(json_object);
        })

        console.log(cargadiaria);


       // console.log('manuei', json_object);

        //

      

       // console.log(obj);

        for (items in obj){
         console.log(obj[items].Vin);

         listaVins = listaVins +  obj[items].vin + ",  ";
       
       }

       var listadoVines = listaVins.replace(null,'');

       document.getElementById("jsonObject").innerHTML = listadoVines;

        CargaDiaria(JSON.stringify(cargadiaria))

    };



    reader.onerror = function(event) {
        console.error("File could not be read! Code " + event.target.error.code);
    };

    reader.readAsBinaryString(selectedFile);

});



function CargaDiaria(cargadiaria){
   // var a =  encodeURI(document.getElementById('categoria').value)

    ajaxGeneral(function(res){

        console.log(res[0].data);
        console.log(res[0].error);

        if (res[0].error != "false"){ 

            document.getElementById("Aviso").innerHTML = res[0].error;

            var accion = document.getElementById("InsertaModifica");
            accion.style.display = "block";

        }else{
            document.getElementById("Aviso").innerHTML = ' Los vins se cargaron correctamente'; // res[0].data;

            var accion = document.getElementById("InsertaModifica");
            accion.style.display = "block";
        }


      //  Cancelar();
    }, urlapp+"controladores/cargadiaria.php?funcion=guardar&parametros="+cargadiaria)

}

function Cancelar(e){
    e.preventDefault();
  
   
    window.location.replace("../../../vistas/modulos/inicio/index.php");
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

