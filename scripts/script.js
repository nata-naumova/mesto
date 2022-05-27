/* Объявления глобальных переменных */
const overlayList = document.querySelectorAll('.popup');

const cardList = document.querySelector('.elements');
const cardForm = document.querySelector('.add-card');
const template = document.querySelector('.element-template');

const profile = document.querySelector('.profile');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const profileForm = document.querySelector('.edit-profile');
const profileAddCard = profile.querySelector('.popup-add-card');
const nameInput = profileForm.querySelector('#name-profile');
const jobInput = profileForm.querySelector('#job-profile');
const openEdit = document.querySelector('.popup-edit-profile');

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
    const btn = evt.target.querySelector('.popup__btn');

    renderCard(cardList, name, link);
    closePopup(popupAddCard);
    evt.target.reset();
    btn.classList.add('popup__btn_error');
    btn.disabled = true;
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscPopup);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscPopup);
}

function handleEscPopup (evt) {
    if(evt.key === 'Escape') {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    } 
}

overlayList.forEach((popupEl) => {
    const popup = popupEl.closest('.popup');
    popupEl.addEventListener('mousedown', (evt) => {
        if(evt.target.classList.contains('popup')) {
            popup.classList.remove('popup_opened');
        }
    })
})

openEdit.addEventListener('click', () => {
    openPopup(popupEditForm);
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
});

profileAddCard.addEventListener('click', () => {
    openPopup(popupAddCard);
});

profileForm.addEventListener('submit', submitFormHandler);
cardForm.addEventListener('submit', creatCard);
closeBtnProfile.addEventListener('click', () => { closePopup (popupEditForm) })
closeBtnImage.addEventListener('click', () => { closePopup(popupOpenImg) })
closeBtnAddCard.addEventListener('click', () => { closePopup (popupAddCard) })