import { datos } from './datos.js';
const divPadre = document.getElementById('flexCertificados');
const fleIzquierda = document.getElementById('fleIzquierda');
const fleDerecha = document.getElementById('fleDerecha');

let aux = 0;
const div = document.createElement('div');
const p = document.createElement('p');
const a = document.createElement('a');
a.setAttribute('href', datos[aux].url);
a.setAttribute('target', '_blank');
a.textContent = datos[aux].text;
p.appendChild(a);
div.appendChild(p);
divPadre.insertBefore(div,divPadre.children[2]);

fleIzquierda.onclick = function(){
    if(aux != 0){
        aux--;
        a.setAttribute('href', datos[aux].url);
        a.textContent = datos[aux].text
    }
}
fleDerecha.onclick = function(){
    if(aux != datos.length-1){
        aux++;
        a.setAttribute('href', datos[aux].url);
        a.textContent = datos[aux].text
    }
}