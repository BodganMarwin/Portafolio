// Haz tú validación en javascript acá

// const elementosimputs = document.querySelectorAll('input');
// elementosimputs.forEach(elemento => {
//     elemento.addEventListener('blur', elemento=>{
//         console.log(elemento.target);
//         console.log(elemento.target.value);
//         console.log(elemento.target.validity.valid);
//     })
// });

const elementonombre = document.querySelector('#nombre');
elementonombre.addEventListener('blur', elementonombre =>{
    validarNombre(elementonombre.target)
})
function validarNombre(elemento){
    if (elemento.validity.valid){
        elemento.classList.remove('formcontato__input-error');
        // elemento.classList.add('formcontato__input');
    }
    else {
        elemento.classList.add('formcontato__input-error');
        elemento.setCustomValidity('El campo Nombre no puede estar vacio');
    }
}

//
const elementoemail = document.querySelector("#email");
elementoemail.addEventListener('blur', elementoemail=>{
    validarEmail(elementoemail.target);
});

function validarEmail(elemento){

}