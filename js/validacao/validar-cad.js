//Váriaveis do formulário de cadastro de cliente (Mãe)

const formCliente = document.querySelector(".form-cliente");
const nomeCliente = document.querySelector("#nomeCliente");
const emailCliente = document.querySelector("#emailCliente");
const senhaCliente = document.querySelector("#senhaCliente");
const dtCliente = document.querySelector("#dtCliente");
const tel = document.querySelector("#telCliente");

const date = new Date()
//COnst para mostrar erros:

const errorSpanCliente= document.querySelectorAll('.errorCliente');

//Função de Validar Cadastro de Usuário Cliente

formCliente.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    //Verificação de nome:
    if (nomeCliente.value==='') {
        errorSpanCliente[0].innerHTML="(Preencha esse campo)"
        nomeCliente.focus();
        return;
    }else{
        errorSpanCliente[0].innerHTML=""
    }

    if (nomeCliente.value.length<10||nomeCliente.value.length>250) {
        errorSpanCliente[0].innerHTML="(Nome inválido!)";
        nomeCliente.focus()
        return;
    }else{
        errorSpanCliente[0].innerHTML="";
    }

    //Verficação de data 
    if(dtCliente.value===''){
        errorSpanCliente[1].innerHTML='(Preencha esse campo")'
        dtCliente.focus();
        return
    }else {
        const date = new Date(dtCliente.value).toISOString();
        console.log(date)
        errorSpanCliente[1].innerHTML='';
    }
    //Validação de email
    if (emailCliente.value==='') {
        errorSpanCliente[2].innerHTML="(Preencha o campo de email!)";
        emailCliente.focus();
        return;
    }else{  
        errorSpanCliente[2].innerHTML="";
    }
    if (validarEmail(emailCliente.value)) {
        errorSpanCliente[2].innerHTML="Email inválido";
        emailCliente.focus();
        return;
    }else{
        errorSpanCliente[2].innerHTML="";
    }

    //Verficação de telefone

    //Verificação de Senha:
    formCliente.submit()
})

//Função de validação de email

function validarEmail(email) {
    //Criar uma regex para validar email
    const emailRegex = new RegExp(
        //Verificar cada elemento do email
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )
    if (emailRegex.test(email)){
        return false;
    }else{
        return true;
    }
}

//Abrir div de verificar senha

senhaCliente.addEventListener('focus', function(){
    const regrasDiv = document.querySelector('.regras-senha');
    regrasDiv.classList.add('active')
})
senhaCliente.addEventListener('blur', function(){
    const regrasDiv = document.querySelector('.regras-senha');
    regrasDiv.classList.remove('active')
})

//Função de vericar se a senha contem caracteres
function validarSenha(senhaCliente) {
   
    
}
senhaCliente.addEventListener('keyup', function(){
    

    const regra_uppercase = document.querySelector('.senha-uppercase');
    const regra_caracter = document.querySelector('.senha-caracteres');
    const regra_carcter_special = document.querySelector('.senha-carcter-especiais');
    const regra_numero = document.querySelector('.senha-numeros');
    //Verificar Se tem carctere maiúscula
    if (/[A-Z]/.test(senhaCliente.value)) {
        regra_uppercase.classList.add('active')
        
    }else{
        regra_uppercase.classList.remove('active')
        
    }
    //Verfiricar se a senha tem no mínimo 8 caracteres
    if(senhaCliente.value.length>=8){
        regra_caracter.classList.add('active')
        
    }else{
        regra_caracter.classList.remove('active');
        
    }
    //Verficar se a senha tem números
    if (/[0-9]/.test(senhaCliente.value)) {
        regra_numero.classList.add('active');
        
    }else{
        regra_numero.classList.remove('active');
        
    }
    //Verificar se a senha tem a caracteres especiais
    if(/[^A-Za-z0-9]/.test(senhaCliente.value)){
        regra_carcter_special.classList.add('active');
        senhaCaracterSpecial=true;
    }else{
        regra_carcter_special.classList.remove('active');
        senhaCaracterSpecial=false;
    }

})