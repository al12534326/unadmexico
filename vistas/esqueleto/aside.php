<?php 
  // echo "hola";
?>

<header class="page-header">
            <nav>
              ADUANA LZC
        
              <button class="toggle-mob-menu" aria-expanded="false" aria-label="open menu">
                <svg width="20" height="20" aria-hidden="true">
                  <use xlink:href="#down"></use>
                </svg>
              </button>

            


              <ul class="admin-menu">
                <li class="menu-heading">
                  <h3 id="UserMenu" name="userMenu"><?php echo $_SESSION['Vusuario'] ?></h3>
                  <h3 id="UserIp" name="userUserIpMenu"><?php if (!empty($_SERVER['HTTP_CLIENT_IP']))   
                    {
                      $ip_address = $_SERVER['HTTP_CLIENT_IP'];
                    }
                  //whether ip is from proxy
                  elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))  
                    {
                      $ip_address = $_SERVER['HTTP_X_FORWARDED_FOR'];
                    }
                  //whether ip is from remote address
                  else
                    {
                      $ip_address = $_SERVER['REMOTE_ADDR'];
                    }
                  echo $ip_address; ?></h3>

                </li>
               
                <span id="crpMenu"></span>

                <button style="padding-left:30px" name="button" onclick="entro()">Salir</button>
                <input type="hidden" id="app" name="app" value="<?php echo $_SESSION['app'] ?>">
               
              </ul>
            </nav>
          </header>