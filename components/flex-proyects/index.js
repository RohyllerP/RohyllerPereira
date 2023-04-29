import { proyects } from './data.js';
const div = document.getElementById('flex-proyect');

proyects.map(k => {
    const divSon = document.createElement('div');
    const img = document.createElement('img');
    //
    divSon.setAttribute('id', `div-card-${k.id}`);
    divSon.classList.add('flex-proyect-div');
    img.setAttribute('src', `${k.url}`);
    img.setAttribute('alt', `${k.alt}`);

    //
    divSon.onclick = () => {
        let scrollx = window.scrollX;
        let scrolly = window.scrollY;
        let v = modal.classList.contains('oculto');
        const modalDiv = document.getElementById('modal-div-title');
        const titleDiv = document.createElement('p');
        const titleDivText = document.createTextNode(`${k.title}`);
        const btnModal = document.getElementById('btn-modal');
        const pDiv = document.createElement('div');
        const pDivp = document.createElement('p');
        const pDivText = document.createTextNode(`${k.text}`);
        const modalUrl = document.getElementById('modal-p-text');
        modalUrl.setAttribute('href', `${k.link}`);

        // ajustes
        pDiv.setAttribute('id', 'modal-p');
        // mandar
        pDivp.appendChild(pDivText);
        pDiv.appendChild(pDivp);
        titleDiv.appendChild(titleDivText);
        modalDiv.appendChild(titleDiv);
        modalDiv.appendChild(pDiv);

        if (v) {
            modal.classList.remove('oculto');
            modal.classList.add('flex-1');
            body.style.overflow = 'hidden';
            window.onscroll = function () { window.scrollTo(scrollx, scrolly) };
        }
        btnModal.onclick = function () {
            modal.classList.add('oculto');
            modal.classList.remove('flex-1');
            body.style.overflow = 'visible';
            window.onscroll = null;
            modalDiv.removeChild(titleDiv);
            modalDiv.removeChild(pDiv);
        }
    }
    //
    divSon.appendChild(img);
    div.appendChild(divSon);

});
