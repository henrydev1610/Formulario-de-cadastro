const form = document.getElementById('form'),
    username = document.getElementById('username'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    passowrdConfirm = document.getElementById('password-confirm') 



form.addEventListener('submit',(e)=>{
    e.preventDefault()
    checkForm();
           
 
    

})


username.addEventListener('blur',()=>{

   checkInputUsername();



})
email.addEventListener('blur', ()=>{
    checkInputEmail()
})

password.addEventListener('blur', ()=>{
    checkInputPassword
})
 passowrdConfirm.addEventListener('blur', ()=>{
    checkPasswordConfirm()
 })


function checkInputUsername(){
  const usernameValue = username.value;
  if(usernameValue == ""){
    errorInput(username, "Preencha o Campo!");
  }else{
    const formItem = username.parentElement;
    formItem.classList = 'form-content'
  }
}



function checkInputEmail(){
    const emailValue = email.value

    if(emailValue == ""){
        errorInput(email, 'prencha o campo de E-mail!');
    }else{
        formItem = email.parentElement;
        formItem.classList = 'form-content'
    }

}

function checkInputPassword(){
    const passwordValue = password.value;
    if(passwordValue == ''){
        errorInput(password, 'A senha é obrigatória!')
    }else if(passwordValue.length <8){
        errorInput(password, 'Senha precisa ter no mínimo 8 caracteres!')
    }else{
        const formItem = password.parentElement;
        formItem.classList = 'form-content'
    }
}


function checkPasswordConfirm(){
    const passwordValue = password.value
    const passowrdConfirmValue = passowrdConfirm.value 
    if(passowrdConfirmValue == ''){
        errorInput(passowrdConfirm, 'Insira a senha de confirmação')
    }
    else if(passowrdConfirmValue != passwordValue){
        errorInput(passowrdConfirm, 'As senhas não correspondem')
    }else{
        const formItem = passowrdConfirm.parentElement;
        formItem.classList = 'form-content'
    }
}



function checkForm(){
        
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkPasswordConfirm();

    const formItems = form.querySelectorAll('.form-content')
    const isValid = [...formItems].every((item)=>{
        return item.className === "form-content"
    })

    if(isValid){
        alert('cadastrado com sucesso!')
    }



}





function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector('a');
    textMessage.innerText = message;

    formItem.className = "form-content error";

}