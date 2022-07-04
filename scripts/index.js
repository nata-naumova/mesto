import { Card } from "./components/Card.js";
import { FormValidator } from "./components/FormValidator.js";
//import Popup from "./components/Popup.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";

import {
    cardForm,
    template,
    profileForm,
    profileAddCard,
    openEdit,
    initialCards,
    config,
    formConfiguration,
    popupConfiguration,
    profileConfiguration,
    cardsContainerSelector,
    newCardPopupSelector,
    profilePopupSelector,
    imagePopupSelector,
    newPlaceFormName,
    profileFormName,
    viewPopupConfiguration,
} from "../utils/constants.js";

const validProfile = new FormValidator(config, profileForm);
const validCard = new FormValidator(config, cardForm);

//включаем валидацию
validProfile.enableValidation();
validCard.enableValidation();

const viewPopup = new PopupWithImage(
    imagePopupSelector,
    popupConfiguration,
    viewPopupConfiguration
);

viewPopup.setEventListeners();

const createCards = (item) => {
    const card = new Card(item, template, viewPopup.open);
    return card.createCard();
}

const cardsContainer = new Section({
    items: initialCards.reverse(),
    renderer: createCards,
}, cardsContainerSelector);

cardsContainer.renderAll();

const handleCardSubmit = (item) => { cardsContainer.addItem(item) }

//попал добавления карточки - инициализация
const newCardPopup = new PopupWithForm(
    newCardPopupSelector,
    newPlaceFormName,
    popupConfiguration,
    formConfiguration,
    validCard.resetValidation,
    handleCardSubmit,
);

newCardPopup.setEventListeners();


const user = new UserInfo(profileConfiguration);
function handleProfileFormSubmit(data) { user.setUserInfo(data) }

const profilePopup = new PopupWithForm(
    profilePopupSelector,
    profileFormName,
    popupConfiguration,
    formConfiguration,
    validProfile.resetValidation,
    handleProfileFormSubmit,
    user.getUserInfo,
);
profilePopup.setEventListeners();


const addCardSubmitHandler = () => { newCardPopup.open() }

const handleProfilePopupOpen = () => { profilePopup.open() }

openEdit.addEventListener('click', handleProfilePopupOpen); //кнопка карандаш
profileAddCard.addEventListener('click', addCardSubmitHandler); //кнопка плюсик