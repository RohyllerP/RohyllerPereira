const frameworks = [
    {
        id: 1,
        title: 'BOOTSTRAP', 'name': 'ANTERIOR',
        url: 'public/assets/img/iconos/bootstrap.png',
        alt: 'Bootstrap'
    },

    {
        id: 2,
        title: 'CHAKRA UI',
        name: 'ANTERIOR',
        url: 'public/assets/img/svg/chakra.svg',
        alt: 'chakra ui'
    },
    { 
        id: 3, 
        title: 'MATERIAL UI', 
        name: 'ANTERIOR', 
        url: 'public/assets/img/svg/material-ui.svg', 
        alt: 'material ui'
    },
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

