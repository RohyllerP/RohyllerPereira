// click en empezar

const start = document.getElementById('start');
const main = document.getElementById('main');
const mainBody = document.getElementById('main-main');
const bodyFixed = document.getElementById('body-flex');
const footer = document.getElementById('footer');
start.addEventListener('click', startBtn);
const jsConfetti = new JSConfetti();

function startBtn(){
    main.style.display = "none";
    mainBody.style.display = "block";
    bodyFixed.style.position = "static";
    bodyFixed.style.height = "0vh";
    footer.style.display = "flex";
    jsConfetti.addConfetti();
}
