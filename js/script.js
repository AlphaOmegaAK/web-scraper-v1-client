const cont = document.querySelector('.container');

const creators = [{
        name: 'John',
        img: 'https://'
    },
    {
        name: 'Sew',
        img: 'https://'
    },
    {
        name: 'Leopald',
        img: 'https://'
    },
];

creators.forEach(creator => {
    const card = newEl('div', {
        class: 'card'
    });
    const title = newEl('h4', {
        innerText: creator.name
    });
    const img = newEl('img', {
        src: creator.img
    });
    cont.appendChild(card);
    card.appendChild(title);
    card.appendChild(img);
});