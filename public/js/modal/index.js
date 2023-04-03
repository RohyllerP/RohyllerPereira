
function show($title,$p,$url){
    let scrollx = window.scrollX;
    let scrolly = window.scrollY;
    let v = modal.classList.contains('oculto');
    const modalDiv = document.getElementById('modal-div-title');
    const titleDiv = document.createElement('p');
    const titleDivText = document.createTextNode($title);
    const btnModal = document.getElementById('btn-modal');
    const pDiv = document.createElement('div');
    const pDivp = document.createElement('p');
    const pDivText = document.createTextNode($p);
    const modalUrl = document.getElementById('modal-p-text');
    modalUrl.setAttribute('href',$url);

    // ajustes
    pDiv.setAttribute('id','modal-p');
    // mandar
    pDivp.appendChild(pDivText);
    pDiv.appendChild(pDivp);
    titleDiv.appendChild(titleDivText);
    modalDiv.appendChild(titleDiv);
    modalDiv.appendChild(pDiv);
    
    if(v){
        modal.classList.remove('oculto');
        modal.classList.add('flex-1');
        body.style.overflow = 'hidden';
        window.onscroll = function(){ window.scrollTo(scrollx, scrolly) };
    }
    btnModal.onclick = function(){
        modal.classList.add('oculto');
        modal.classList.remove('flex-1');
        body.style.overflow = 'visible';
        window.onscroll = null;
        modalDiv.removeChild(titleDiv);
        modalDiv.removeChild(pDiv);
    }
}
