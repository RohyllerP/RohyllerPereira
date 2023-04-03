import { data } from "./data.js";

let divPadre = document.getElementById('herramientas-main');

let tamano = data.length;
data.forEach(e => {
    var validador = true;
    let change;
    let changeTwo;
   
    if(e.id % 2 == 0){
        change = "herra-right";
        changeTwo = "herra-left";
    }else{
        change = "herra-left";
        changeTwo = "herra-right";
    }

    // div
    let div = document.createElement('div');
    div.classList.add('card-herra-div');
    div.setAttribute("id", `${e.id}`);
    // div 1 hijo
    let divTwo = document.createElement('div');
    divTwo.classList.add('card-herramienta', `${change}`,'card-herra-div-1');

    // element
    let divPadreHerra = document.createElement('div');
    divPadreHerra.classList.add('div-padre-div-1');
    let divImg = document.createElement('div');
    let divSpan = document.createElement('div');
    divSpan.classList.add('div-herra-1-span');
    let img = document.createElement('img');
    img.src = `${e.img}`;
    img.alt = `${e.alt}`;
    let span = document.createElement('span');
    span.textContent = `${e.title}`;
    let divProgress = document.createElement('div');
    divProgress.classList.add('probar');
    let divSonProgress = document.createElement('div');
    divSonProgress.classList.add('probarTwo');
    divSonProgress.style.width = `${e.porcentaje}%`;

    // div 2 hijo
    let divThree = document.createElement('div');
    divThree.classList.add('card-herramienta', `${changeTwo}`, 'card-herra-div-2');
    let divCard = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = `${e.text}`;
    validador = false;

    if(e.id == tamano){
        divTwo.classList.add('card-herramienta-last-top');
        divThree.classList.add('card-herramienta-last');
    }

    // agregar
    divPadre.appendChild(div);
    div.appendChild(divTwo);
    divTwo.appendChild(divPadreHerra);
    divPadreHerra.appendChild(divImg);
    divPadreHerra.appendChild(divSpan);
    divImg.appendChild(img);
    divSpan.appendChild(span);
    divTwo.appendChild(divProgress);
    divProgress.appendChild(divSonProgress);

    // 3
    div.appendChild(divThree);
    divThree.appendChild(divCard);
    divCard.appendChild(p);
})
