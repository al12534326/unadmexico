//run
let cargadiaria = null;

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
            var json_object = JSON.stringify(XL_row_object);

            cargadiaria = json_object;
            //document.getElementById("jsonObject").innerHTML = json_object;
        })

        console.log(cargadiaria);



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


        Cancelar();
    }, "http://localhost:8066/controladores/cargadiaria.php?funcion=guardar&parametros="+cargadiaria)

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

