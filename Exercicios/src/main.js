import validator from "../node_modules/validator/validator";

const email = document.querySelector('#email');
console.log(email);
console.log(validator.isEmail('email@email.com'))