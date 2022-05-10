/* Объявления глобальных переменных */
const cardList = document.querySelector('.elements');
const cardForm = document.querySelector('.add-card');
const template = document.querySelector('.element-template');

const profile = document.querySelector('.profile');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const profileForm = document.querySelector('.edit-profile');
const profileAddCard = profile.querySelector('.popup-add-card');
const nameInput = profileForm.querySelector('#popup__input_name');
const jobInput = profileForm.querySelector('#popup__input_job');
const openEdit = document.querySelector('.popup-edit-profile');
const editProfile = document.querySelector('.popup__btn');

const popupImg = document.querySelector('.popup__img');
const popupTitleImg = document.querySelector('.popup__img-title');

/* Модальные окна */
const popupEditForm = document.querySelector('#popup_1');
const popupAddCard = document.querySelector('#popup_2');
const popupOpenImg = document.querySelector('#popup_img');

/* Кнопки закрытия модальных окон */
const closeBtnProfile = document.querySelector('.popup-close-edit');
const closeBtnImage = document.querySelector('.popup-close-img');
const closeBtnAddCard = document.querySelector('.popup-close-add');

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

function handleDeleteCard (evt) {
    evt.target.closest('.element').remove();
};

function handleLikeCard (evt) {
    const like = evt.target.closest('.element__btn');
    like.classList.toggle('element__btn_active');
};

function handleOpenCard (cardName, cardLink) {
    popupImg.src = cardLink;
    popupImg.alt = cardName;
    popupTitleImg.textContent = cardName;

    openPopup(popupOpenImg);
}

function getCardElement (cardName, cardLink) {
    const newCardElement = template.content.cloneNode(true);
    const newCardName = newCardElement.querySelector('.element__title');
    const newCardLink = newCardElement.querySelector('.element__img');

    newCardName.textContent = cardName;
    newCardLink.src = cardLink;
    newCardLink.alt = cardName;
        
    const deleteButton = newCardElement.querySelector('.element__trash');
    const likeButton = newCardElement.querySelector('.element__btn');
    const openImg = newCardElement.querySelector('.popup-img');

    deleteButton.addEventListener('click', handleDeleteCard);
    likeButton.addEventListener('click', handleLikeCard);
    openImg.addEventListener('click', () => handleOpenCard(cardName, cardLink));
    
    return newCardElement;
}

const renderCard = (wrap, cardName, cardLink) => {
    wrap.prepend(getCardElement(cardName, cardLink));
}

initialCards.forEach((item) => {
    const cardName = item.name;
    const cardLink = item.link;
    renderCard(cardList, cardName, cardLink);
});

function submitFormHandler (e) {
    e.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup(popupEditForm);
}

function creatCard (evt) {
    evt.preventDefault();
    const name = evt.target.nameCard.value;
    const link = evt.target.linkCard.value;

    if(name && link) {
        renderCard(cardList, name, link);
        closePopup(popupAddCard);
        evt.target.reset();
    }
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

openEdit.addEventListener('click', () => {
    openPopup(popupEditForm);
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;

    editProfile.addEventListener('click', submitFormHandler);
});

profileAddCard.addEventListener('click', () => {
    openPopup(popupAddCard);
    cardForm.addEventListener('submit', creatCard);
});

closeBtnProfile.addEventListener('click', () => { closePopup (popupEditForm) })
closeBtnImage.addEventListener('click', () => { closePopup(popupOpenImg) })
closeBtnAddCard.addEventListener('click', () => { closePopup (popupAddCard) })
//document.addEventListener('click',e => console.log(e.target));