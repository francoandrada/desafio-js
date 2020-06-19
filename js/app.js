const nombre = document.getElementById("name")
const apellido = document.getElementById("surname")
const edad = document.getElementById("edad")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const pass2 = document.getElementById("password2")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const ocultar = document.getElementById('ocultar')
const boton = document.getElementById('boton')


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(apellido.value.length <6){
        warnings += `El apellido no es valido <br>`
        entrar = true
    }
    if(edad.value > 150){
        warnings += `La edad no es valida <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }else if (pass.value !== pass2.value) {
        warnings += `Contraseñas no coinciden <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings

    }else{
         parrafo.innerHTML = "Enviado"
         ocultar.style.display="none";
         Swal.fire({
           icon: 'success',
           title: 'Muy bien!',
           text: 'Tu usuario ha sido registrado exitosamente!',
           showConfirmButton: true,
           confirmButtonColor: '#6369d0',
           backdrop: false
         })

    }


})
