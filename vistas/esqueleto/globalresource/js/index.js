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

                menu = menu + '<li><a href="' + res[item].modulo + '"><svg><use xlink:href="' +  res[item].imagen + '"></use></svg><span>' + res[item].modulo.substring(3,20) +'</span></a></li>';


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

        function Notification(htmlElement) {
    
            this.htmlElement = htmlElement;
            this.icon = htmlElement.querySelector('.icon > i');
            this.text = htmlElement.querySelector('.text');
            this.close = htmlElement.querySelector('.close');
            this.isRunning = false;
            this.timeout;
            
            this.bindEvents();
        };
        
        Notification.prototype.bindEvents = function() {
            var self = this;
            this.close.addEventListener('click', function() {
                window.clearTimeout(self.timeout);
                self.reset();
            });
        }
        
        Notification.prototype.info = function(message) {
            if(this.isRunning) return false;
            
            this.text.innerHTML = message;
            this.htmlElement.className = 'notification info';
            this.icon.className = 'fa fa-2x fa-info-circle';
            
            this.show();
        }
        
        Notification.prototype.warning = function(message) {
            if(this.isRunning) return false;
            
            this.text.innerHTML = message;
            this.htmlElement.className = 'notification warning';
            this.icon.className = 'fa fa-2x fa-exclamation-triangle';
            
            this.show();
        }
        
        Notification.prototype.error = function(message) {
            if(this.isRunning) return false;
            
            this.text.innerHTML = message;
             this.htmlElement.className = 'notification error';
             this.icon.className = 'fa fa-2x fa-exclamation-circle';
             
             this.show();
        }
        
        Notification.prototype.show = function() {
            if(!this.htmlElement.classList.contains('visible'))
                this.htmlElement.classList.add('visible');
            
            this.isRunning = true;
            this.autoReset();
        };
            
        Notification.prototype.autoReset = function() {
            var self = this;
            this.timeout = window.setTimeout(function() {
                self.reset();
            }, 5000);
        }
        
        Notification.prototype.reset = function() {
            this.htmlElement.className = "notification";
            this.icon.className = "";
            this.isRunning = false;
        };
        
        document.addEventListener('DOMContentLoaded', init);
        
        function init() {
            var info = document.getElementById('info');
            var warn = document.getElementById('warn');
            var error = document.getElementById('error');
            
            var notificator = new Notification(document.querySelector('.notification'));
            
            info.onclick = function() {
                 notificator.info('Esta es una información');   
            }
            
            warn.onclick = function() {
                notificator.warning('Te te te advieeeerto!');
            }
            
            error.onclick = function() {
                notificator.error('Le causaste derrame al sistema');
            }
        }


        function goAlert(){
            var notificator = new Notification(document.querySelector('.notification'));
            notificator.info('Esta es una información');  

        }