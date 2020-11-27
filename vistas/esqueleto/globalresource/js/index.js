var urlapp = document.getElementById('app').value;

Menu(null);

function entro() {

    window.location.replace(urlapp+"controladores/salir.php");
 }

function Menu()
{
   
    
   
    ajaxGeneral(function(res){

        //alert('Entro aqui'); 

    
        elemento = document.getElementById('crpMenu');

        


        var menu = '';
            for (item in res) {

                menu = menu + '<li><a href="' + res[item].modulo + '"><svg><use xlink:href="' +  res[item].imagen + '"></use></svg><span>' + res[item].mostrar +'</span></a></li>';


               // menu = menu+ '<tr><td class="column1">' + res[item].id + '</td>'+
               // '<td class="column2">' +res[item].fechaCreacion + '</td>'+
               // '<td class="column3">' +res[item].nombre + '</td>'+
               // '<td class="column4" style = "">' + '<i onclick = "Editar('+res[item].id+','+1+')" class="fa fa-pencil-square-o" aria-hidden="true"></i> <i onclick = "Editar('+res[item].id+','+2+')"class="fa fa-trash" aria-hidden="true"></i>' + '</td></tr>';
            }


            elemento.innerHTML = menu;
            // funcionalidad

        // fin funcionalidad    
    }, urlapp+"controladores/usuariosPermisos.php?funcion=usuariosPermisos");
    
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

//******************** */
    
    const body = document.body;
        const menuLinks = document.querySelectorAll(".admin-menu a");
        const collapseBtn = document.querySelector(".admin-menu .collapse-btn");
        const toggleMobileMenu = document.querySelector(".toggle-mob-menu");
        const collapsedClass = "collapsed";

        collapseBtn.addEventListener("click", function() {
        this.getAttribute("aria-expanded") == "true"
            ? this.setAttribute("aria-expanded", "false")
            : this.setAttribute("aria-expanded", "true");
        this.getAttribute("aria-label") == "collapse menu"
            ? this.setAttribute("aria-label", "expand menu")
            : this.setAttribute("aria-label", "collapse menu");
        body.classList.toggle(collapsedClass);
        });

        toggleMobileMenu.addEventListener("click", function() {
        this.getAttribute("aria-expanded") == "true"
            ? this.setAttribute("aria-expanded", "false")
            : this.setAttribute("aria-expanded", "true");
        this.getAttribute("aria-label") == "open menu"
            ? this.setAttribute("aria-label", "close menu")
            : this.setAttribute("aria-label", "open menu");
        body.classList.toggle("mob-menu-opened");
        });

        for (const link of menuLinks) {
        link.addEventListener("mouseenter", function() {
            body.classList.contains(collapsedClass) &&
            window.matchMedia("(min-width: 768px)").matches
            ? this.setAttribute("title", this.textContent)
            : this.removeAttribute("title");
        });
        }
 

        /**********Notificaciones*************/

