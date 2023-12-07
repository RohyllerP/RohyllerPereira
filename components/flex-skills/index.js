const frameworks = [
    {
        id: 1,
        title: 'BOOTSTRAP', 
        url: 'public/assets/img/iconos/bootstrap.png',
        alt: 'Bootstrap'
    },

    {
        id: 2,
        title: 'CHAKRA UI',
        url: 'public/assets/img/svg/chakra.svg',
        alt: 'chakra ui'
    },
    { 
        id: 3, 
        title: 'MATERIAL UI', 
        url: 'public/assets/img/svg/material-ui.svg', 
        alt: 'material ui'
    },
    {
        id: 4,
        title: 'JQUERY',
        url: 'public/assets/img/iconos/jquery.png',
        alt: 'jquery'
    },
    {
        id: 5,
        title: 'SASS',
        url: 'public/assets/img/iconos/sass.png',
        alt: 'sass'
    }
];

const frame = document.getElementById('frameworks-css');

frameworks.map((k) => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    div.classList.add('div-frameworks-img');
    div.setAttribute('id', `div-frameworks-${k.id}`)
    img.setAttribute('src', `${k.url}`);
    img.setAttribute('alt', `${k.alt}`);
    div.appendChild(img);
    frame.appendChild(div);
});

