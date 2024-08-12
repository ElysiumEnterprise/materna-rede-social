//Variáveis dos elementos buttons mãe e anunciante;
const buttonCliente = document.querySelector('.btn-cliente');
const buttonAnunciante = document.querySelector('.btn-anunciante');

//Formulários

const formMae = document.querySelector('.form-cliente')
const formAnun = document.querySelector('.form-anunciante');

buttonCliente.classList.add('active');
buttonAnunciante.classList.remove('active')

//Ativar a interação de clicar no botõ da mãe

buttonCliente.addEventListener('click', function () {
    buttonCliente.classList.add('active');
    buttonAnunciante.classList.remove('active')
    formMae.style="display: flex";
    formAnun.style='display:none';
})

buttonAnunciante.addEventListener('click', function(){
    buttonAnunciante.classList.add('active')
    buttonCliente.classList.remove('active');
    formMae.style="display: none";
    formAnun.style='display:flex';
})