import { nanoid } from '../node_modules/nanoid/nanoid.js'

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
    displayPasswordEl.innerHTML = nanoid()
})