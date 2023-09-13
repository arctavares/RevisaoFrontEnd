const email = document.querySelector('#Email');
const options = document.querySelector('.options');
const btn = document.querySelector('.btn');
const text = document.querySelector('#Text')

btn.addEventListener('click', () => {
    if(options.value === 'Email' && validator.isEmail(email.value)){
        console.log('true');
        text.innerHTML = 'A validação retornou true'
    }else if(options.value === 'CPF' && !isNaN(email.value) && email.value.length === 11 ){
        text.innerHTML = 'A validação retornou true'
    }else {
        console.log('false')
        text.innerHTML = 'A validação retornou false'
    }
})