// Haz tú validación en javascript acá

const elementosimputs = document.querySelectorAll('input');
elementosimputs.forEach(elemento => {
    elemento.addEventListener('blur', elemento=>{
        console.log(elemento.target);
        console.log(elemento.target.validity.customError);
    })
});

const elementonombre = document.querySelector('#nombre');
elementonombre.addEventListener('blur', elementonombre =>{
    validarNombre(elementonombre.target)
})
function validarNombre(elemento){
    console.log(elemento.validity.valid + " "+ elemento.classList);
    if (elemento.validity.valid){
        elemento.classList.remove('formcontato__input-error');
        // elemento.classList.add('formcontato__input');
    }
    else {
        elemento.classList.add('formcontato__input-error');
        elemento.setCustomValidity('El campo Nombre no puede estar vacio');
    }
}
