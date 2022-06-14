import { Card } from "./components/Card.js";
import { FormValidator } from "./components/FormValidator.js";
import {
    overlayList,
    cardList,
    cardForm,
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

initialCards.forEach((item) => {
    cardList.prepend(new Card(item, template).createCard());
});

function submitFormHandler (e) {
    e.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup(popupEditForm);
}

function creatCard(evt) {
    evt.preventDefault();
    const name = evt.target.nameCard.value;
    const link = evt.target.linkCard.value;
    const btn = evt.target.querySelector('.popup__btn');
    cardList.prepend(new Card({name, link}, template).createCard());
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

const validProfile = new FormValidator(config, profileForm);
const validCard = new FormValidator(config, cardForm);
validProfile.enableValidation();
validCard.enableValidation();

overlayList.forEach((popupEl) => {
    const popup = popupEl.closest('.popup');
    popupEl.addEventListener('mousedown', (evt) => {
        if(evt.target.classList.contains('popup')) {
            popup.classList.remove('popup_opened');
        }
    })
});

openEdit.addEventListener('click', () => {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    openPopup(popupEditForm);
});

profileAddCard.addEventListener('click', () => { openPopup(popupAddCard) });
profileForm.addEventListener('submit', submitFormHandler);
cardForm.addEventListener('submit', creatCard);
closeBtnProfile.addEventListener('click', () => { closePopup (popupEditForm) })
closeBtnImage.addEventListener('click', () => { closePopup(popupOpenImg) })
closeBtnAddCard.addEventListener('click', () => { closePopup (popupAddCard) })