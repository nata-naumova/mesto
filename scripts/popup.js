const cardList = document.querySelector('.elements');
const cardForm = document.querySelector('.add-card');
const template = document.querySelector('.element-template');

const initialCards = [
    {
        name: 'Пантера в папоротнике',
        link: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1612582013_50-p-foto-zhivotnikh-na-zelenom-fone-77.jpg'
    },
    {
        name: 'Снежный Барс',
        link: 'https://proprikol.ru/wp-content/uploads/2020/12/snezhnye-barsy-krasivye-kartinki-11.jpg'
    },
    {
        name: 'Сервал Мяурицио',
        link: 'https://wallpapershome.ru/images/pages/pic_h/1336.jpg'
    },
    {
        name: 'Лесной Кот',
        link: 'https://cdn.fishki.net/upload/post/2021/01/27/3576227/eb08e205c4865e5f6d6313b307c10c5c.jpg'
    },
    {
        name: 'Енотовидная панда',
        link: 'https://www.ejin.ru/wp-content/uploads/2017/11/24-5.jpg'
    },
    {
        name: 'Енот-полоскун',
        link: 'https://wallbox.ru/resize/960x800/wallpapers/main/201523/85121fb83f62a3c.jpg'
    }
];

const handleDeleteCard = (evt) => {
    evt.target.closest('.element').remove();
};

const handleLikeCard = (evt) => {
    const like = evt.target.closest('.element__btn');
    like.classList.toggle('element__btn_active');
};

const getCardElement = (cardName, cardLink) => {
    const newCardElement = template.content.cloneNode(true);
    const newCardName = newCardElement.querySelector('.element__title');
    const newCardLink = newCardElement.querySelector('.element__img');

    newCardName.textContent = cardName;
    newCardLink.src = cardLink;
    newCardLink.alt = cardName;
        
    const deleteButton = newCardElement.querySelector('.element__trash');
    const likeButton = newCardElement.querySelector('.element__btn');

    deleteButton.addEventListener('click', handleDeleteCard);
    likeButton.addEventListener('click', handleLikeCard);
    
    return newCardElement;
}

cardForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const name = evt.target.nameCard.value;
    const link = evt.target.linkCard.value;

    if(name && link) {
      renderCard(cardList, name, link);  
    }
    evt.target.reset();
    const targetClose = evt.target.closest('.popup');
    popupClosed(targetClose);
})

const renderCard = (wrap, cardName, cardLink) => {
    wrap.prepend(getCardElement(cardName, cardLink));
}

initialCards.forEach((item) => {
    const cardName = item.name;
    const cardLink = item.link;
    renderCard(cardList, cardName, cardLink);
});


const popupLinks = document.querySelectorAll('.popup-link');
const popupClose = document.querySelectorAll('.popup__close');

if(popupLinks.length > 0) {
    for(let i = 0; i < popupLinks.length; i++) {
        const popupLink = popupLinks[i];
        popupLink.addEventListener('click', function (e) {
            const popupName = popupLink.dataset.dismiss;
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
            
            const popupImg = document.querySelector('.popup__img');
            const popupTitleImg = document.querySelector('.popup__img-title');
            const popupLinkImg = e.target.closest('.element__img-wrapper').querySelector('.element__img');
            popupImg.src = popupLinkImg.src;
            popupImg.alt = popupLinkImg.alt;
            popupTitleImg.textContent = popupLinkImg.alt;
        });
    }
}

if(popupClose.length > 0) {
    for(let i = 0; i < popupClose.length; i++) {
       const elem = popupClose[i];
       elem.addEventListener('click', function (e) {
           const targetClose = e.target.closest('.popup');
            popupClosed(targetClose);
           e.preventDefault();
       });
    }
}

function popupOpen(currentPopup) {
    currentPopup.classList.add('popup_opened');
}

function popupClosed(targetClose) {
    targetClose.classList.remove('popup_opened');
}


//document.addEventListener('click',e => console.log(e.target));