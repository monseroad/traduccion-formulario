
function traducir (){

	//Traducir el titulo
	document.getElementById('form-signin-heading').innerHTML = "Por favor inicia sesión";
    
    //Traducir "email"
	var input = document.getElementById('inputEmail');
	   input.placeholder = "Correo Electrónico";

	//Traducir "password"
	var input = document.getElementById('inputPassword');
	   input.placeholder = "Contraseña";

	//Traducir "Remember me" 
	document.querySelector('.checkbox span').innerHTML = "Recordar datos";

	//Traducir "Sign in"
	document.querySelector('button').textContent = "Iniciar Sesión";

}