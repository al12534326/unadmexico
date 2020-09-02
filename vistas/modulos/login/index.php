<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Local Resource-->
       <link rel="icon" type="image/png" href="localresource/images/icons/favicon.ico"/>
       <link rel="stylesheet" type="text/css" href="localresource/css/util.css">
        <link rel="stylesheet" type="text/css" href="localresource/css/index.css">
    <!-- Local Resource-->


</head>
<body>

<video autoplay muted loop id="myVideo">
    <source src="localresource/video/puerto.webm" type="video/mp4">
</video>

	<div class="limiter">
		<div class="container-login100">


            <div  id = "fondolog" style="background-color: #fff; width: 430px !important; height: 500px !important;  position: absolute; top: 20%; left: 40%;">
                <div class="wrap-login100 p-t-50 p-b-90">

					<span class="login100-form-title p-b-51">
						Login
					</span>


                    <div class="wrap-input100 validate-input m-b-16" >
                        <input class="input100" type="text" name="username" id = "username" placeholder="Usuario">
                        <span class="focus-input100"></span>
                    </div>


                    <div class="wrap-input100 validate-input m-b-16" >
                        <input class="input100" type="password" name="pass"  id = "pass" placeholder="Contraseña">
                        <span class="focus-input100"></span>
                    </div>
                    <div  >
                        <center><p id="error" style="color: darkred" ></p></center>

                    </div>



                    <div class="container-login100-form-btn m-t-17">
                        <button class="login100-form-btn" id="go" onclick="autenticar()" >
                            Login
                        </button>
                    </div>
                </div>

            </div>

		</div>
	</div>
	

	<div id="dropDownSelect1"></div>

    <!-- Local Resource-->
        <script src="localresource/js/index.js"></script>
    <!-- Local Resource-->



</body>
</html>