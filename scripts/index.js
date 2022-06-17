import { Card } from "./components/Card.js";
import { FormValidator } from "./components/FormValidator.js";
import {
    overlayList,
    cardList,
    cardForm,
    nameCard,
    linkCard,
    template,
    profile,
    profileTitle,
    profileSubtitle,
    profileForm,
    profileAddCard,
    nameInput,
    jobInput,
    openEdit,
    popupImg,
    popupTitleImg,
    popupEditForm,
    popupAddCard,
    popupOpenImg,
    closeBtnProfile,
    closeBtnImage,
    closeBtnAddCard,
    initialCards,
    config
} from "../utils/constants.js";

const validProfile = new FormValidator(config, profileForm);
const validCard = new FormValidator(config, cardForm);

//включаем валидацию
validProfile.enableValidation();
validCard.enableValidation();

function submitFormHandler (e) {
    e.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup(popupEditForm);
}
//размещение карточки
function renderCards(wrapper, data) {
    const card = new Card(data, template, handleCardClick);
    wrapper.prepend(card.createCard());
}
//создание новой карточки
function createCard(evt) {
    evt.preventDefault();
    const data = {
        name: nameCard.value,
        link: linkCard.value
    };
    renderCards(cardList, data);
    evt.target.reset();
    closePopup(popupAddCard);
}

initialCards.forEach((item) => {
    cardList.prepend(new Card(item, template, handleCardClick).createCard());
});

function handleCardClick() {
    popupImg.src = `${this._link}`;
    popupImg.alt = this._name;
    popupTitleImg.textContent = this._name;
    openPopup(popupOpenImg);
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

//обработчик крестиков
const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        const btn = evt.target.classList.contains('popup__close');
        const overlay = evt.target.classList.contains('popup');
       if (btn || overlay) { 
        closePopup(popup);
    }
    })
});

openEdit.addEventListener('click', () => { //кнопка редактировать профиль
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    validProfile.resetValidation();
    openPopup(popupEditForm);
}); 
profileAddCard.addEventListener('click', () => { //кнопка добавить запись (карточку)
    cardForm.reset();
    validCard.resetValidation();
    openPopup(popupAddCard);
});
profileForm.addEventListener('submit', submitFormHandler); //мод окно с формой профиля
cardForm.addEventListener('submit', createCard); //мод окно с формой карточки

/*
document.addEventListener('click', (e) => {
    console.log(e.target);
});
*/
