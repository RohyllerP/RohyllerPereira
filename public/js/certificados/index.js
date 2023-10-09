import { datos } from './datos.js';
const div = document.getElementById('flex-certificados');

datos.map(k => {
    const divSon = document.createElement('div');
    const img = document.createElement('img');
    //
    divSon.setAttribute('id', `div-certifi-${k.id}`);
    divSon.classList.add('flex-certifi-div');
    img.setAttribute('src', `${k.img}`);
    img.setAttribute('alt', `${k.alt}`);

    //
    divSon.onclick = () => {
       alert("HOLA");
    }
    //
    divSon.appendChild(img);
    div.appendChild(divSon);
})