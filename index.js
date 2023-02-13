const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^[a-zA-Z0-9]{8,16}$/, // Entre 8 y 16 caracteres, letras o numeros
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	
}

const campos = { 
	nombre:false,
	email:false,
	password:false
	
}

const validarformulario = (e) => {
	switch (e.target.name){
		case "nombre":
				if(expresiones.nombre.test(e.target.value)){
					document.getElementById('grupo_nombre').classList.remove('formulario_grupo-incorrecto');
					document.getElementById('grupo_nombre').classList.add('formulario_grupo-correcto');
					campos['nombre'] = true;
					
				} else {
					document.getElementById('grupo_nombre').classList.add('formulario_grupo-incorrecto');
					document.getElementById('grupo_nombre').classList.remove('formulario_grupo-correcto');
					/*document.querySelector('#grupo_nombre .formulario_input-error').classList.add('formulario_input-error-activo');

					Estuve tratando que saliera el mensaje de .formulario_input-error pero aun no lo he logrado, tengo todos los estilos creados en css.
					Aquí debería ir también el código para la imagen pero cada vez que lo coloco me sale un error. 
					*/
					
					campos['nombre'] = false;
				}
		break;
		case "email":
			if(expresiones.email.test(e.target.value)){
				document.getElementById('grupo_email').classList.remove('formulario_grupo-incorrecto');
				document.getElementById('grupo_email').classList.add('formulario_grupo-correcto');
				campos['email'] = true;
				
			} else {
				document.getElementById('grupo_email').classList.add('formulario_grupo-incorrecto');
				document.getElementById('grupo_email').classList.remove('formulario_grupo-correcto');
				campos['email'] = false;
			
			}
		break;
		case "password":
			if(expresiones.password.test(e.target.value)){
				document.getElementById('grupo_password').classList.remove('formulario_grupo-incorrecto');
				document.getElementById('grupo_password').classList.add('formulario_grupo-correcto');
				campos['password'] = true;
				
			} else {
				document.getElementById('grupo_password').classList.add('formulario_grupo-incorrecto');
				document.getElementById('grupo_password').classList.remove('formulario_grupo-correcto');
				campos['password'] = false;
		
			}
		break;
		case "password2":
			validarpassword2();
		
		break;


	}
}

const validarpassword2 = () => {
	const inputpassword1=document.getElementById('password');
	const inputpassword2=document.getElementById('password2');

	if(inputpassword1.value !== inputpassword2.value){
		document.getElementById('grupo_password2').classList.add('formulario_grupo-incorrecto');
		document.getElementById('grupo_password2').classList.remove('formulario_grupo-correcto');
		/*document.querySelector('#grupo_password2 .formulario_input-error').classList.remove('formulario_input-error-activo');*/
		campos['password'] = false;
	} else{
		document.getElementById('grupo_password2').classList.remove('formulario_grupo-incorrecto');
		document.getElementById('grupo_password2').classList.add('formulario_grupo-correcto');
		/*document.querySelector('#grupo_password2 .formulario_input-error').classList.add('formulario_input-error-activo');*/
		campos['password'] = true;

	}

	}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarformulario);
	input.addEventListener('blur', validarformulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.nombre && campos.email && campos.password){
		formulario.reset();

		document.getElementById('formulario_mensaje-exito').classList.add('formulario_mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario_mensaje-exito').classList.remove('formulario_mensaje-exito-activo');

		}, 5000)

		document.querySelectorAll('.formulario_grupo-correcto').forEach((borde) =>{
			borde.classList.remove('formulario_grupo-correcto');

		})
	
	} else{
		document.getElementById('formulario_mensaje').classList.add('formulario_mensaje-activo');
		setTimeout(() => {
			document.getElementById('formulario_mensaje').classList.remove('formulario_mensaje-activo');

		}, 4000)
	
	}


});