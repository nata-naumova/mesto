import './index.css';
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from '../components/Api';
import PopupWithConfirmation from '../components/PopupWithConfirmation';

import {
    cardForm,
    template,
    profileForm,
    profileAddCard,
    openEdit,
    config,
    avatarForm,
    formConfiguration,
    popupConfiguration,
    profileConfiguration,
    cardsContainerSelector,
    newCardPopupSelector,
    profilePopupSelector,
    avatarPopupSelector,
    imagePopupSelector,
    newPlaceFormName,
    profileFormName,
    avatarFormName,
    viewPopupConfiguration,
    buttonEditAvatar,
    cardDeletePopupSelector,
    avatar,
} from "../utils/constants.js";

/* ---------- API ----------- */
const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-45',
    headers: {
        authorization: '3e8431a3-54b0-494c-b0b7-18b456b2213e',
        'Content-Type': 'application/json'
    }
});

let userId;

/* ---------- Загрузка информации ----------- */
Promise.all([api.getInitialCards(), api.getUserInfo()])
    .then(([initialCards, userData]) => {
        userInfo.setUserInfo(userData);
        userId = userData._id;
        cardsContainer.renderAll(initialCards);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    });

/* ---------- Экземпляр класса UserInfo ----------- */
const userInfo = new UserInfo(profileConfiguration);

/* ---------- Валидация форм ----------- */
const validProfile = new FormValidator(config, profileForm);
const validCard = new FormValidator(config, cardForm);
const validAvatar = new FormValidator(config, avatarForm);

/* ---------- Включение валидации форм ----------- */
validProfile.enableValidation();
validCard.enableValidation();
validAvatar.enableValidation();

/* ---------- Попап просмотра карточки ----------- */
const viewPopup = new PopupWithImage(
    imagePopupSelector,
    popupConfiguration,
    viewPopupConfiguration
);

viewPopup.setEventListeners();

/* ---------- Создание карточки ----------- */
const createCard = (data) => {
    const card = new Card(
        data,
        template,
        userId,
        viewPopup.open,
        {
            handleDeleteCardClick: (cardId) => {
                deleteCardPopup.open();
                deleteCardPopup.submitCallback(() => {
                    api.deleteCard(cardId)
                        .then(() => {
                            deleteCardPopup.close();
                            card.deleteCard();
                        })
                        .catch((err) => {
                            console.log(`Ошибка: ${err}`);
                        });
                });
            },
            handleSetLike: (cardId) => {
                api.setLike(cardId)
                    .then((data) => {
                        card.handleLikeCard(data);
                    })
                    .catch((err) => {
                        console.log(`Ошибка: ${err}`);
                    });
            },
            handleRemoveLike: (cardId) => {
                api.deleteLike(cardId)
                    .then((data) => {
                        card.handleLikeCard(data);
                    })
                    .catch((err) => {
                        console.log(`Ошибка: ${err}`);
                    });
            }
        }
    );
    return card.generateCard();
}

/* ---------- Создание экземпляра класса Section ----------- */
const cardsContainer = new Section({
    renderer: (card) => {
        cardsContainer.addItem(createCard(card));
    },
}, cardsContainerSelector);

/* ---------- Попап с удалением карточки ----------- */
const deleteCardPopup = new PopupWithConfirmation(cardDeletePopupSelector, popupConfiguration);
deleteCardPopup.setEventListeners();

/* ---------- Попап с формой добавления новой карточки ----------- */
const handleCardSubmit = (item) => {
    newCardPopup.loadingForm(true);
    api.addCard(item)
        .then((item) => {
            cardsContainer.addItemPrepend(createCard(item));
            newCardPopup.close();
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`);
        })
        .finally(() => {
            newCardPopup.loadingForm(false);
        })
}

const newCardPopup = new PopupWithForm(
    newCardPopupSelector,
    newPlaceFormName,
    popupConfiguration,
    formConfiguration,
    handleCardSubmit,
);

newCardPopup.setEventListeners();

/* ---------- Попап с формой редактирования профиля ----------- */
const handleProfileFormSubmit = (data) => {
    profilePopup.loadingForm(true);
    api.editUserInfo(data)
        .then((data) => {
            userInfo.setUserInfo(data);
            profilePopup.close();
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`);
        })
        .finally(() => {
            profilePopup.loadingForm(false);
        })
}

const profilePopup = new PopupWithForm(
    profilePopupSelector,
    profileFormName,
    popupConfiguration,
    formConfiguration,
    handleProfileFormSubmit,
);

profilePopup.setEventListeners();

/* ---------- Попап с формой редактирования аватара ----------- */
const handleAvatarFormSubmit = (data) => {
    editAvatarPopup.loadingForm(true);
    api.editAvatar(data)
        .then((data) => {
            avatar.src = data.avatar;
            console.log(data)
            editAvatarPopup.close();
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`);
        })
        .finally(() => {
            editAvatarPopup.loadingForm(false);
        })
}

const editAvatarPopup = new PopupWithForm(
    avatarPopupSelector,
    avatarFormName,
    popupConfiguration,
    formConfiguration,
    handleAvatarFormSubmit
);

editAvatarPopup.setEventListeners();

/* ---------- Обработчик кнопки - "редактирование аватара" ----------- */
buttonEditAvatar.addEventListener('click', () => {
    validAvatar.resetValidation();
    editAvatarPopup.open();
})

/* ---------- Обработчик кнопки - "добавление карточки (плюс) " ----------- */
const addCardSubmitHandler = () => {
    newCardPopup.open();
    validCard.resetValidation();
}

profileAddCard.addEventListener('click', addCardSubmitHandler);

/* ---------- Обработчик кнопки - "редактировать профиль" ----------- */
const handleProfilePopupOpen = () => {
    profilePopup.open();
    profilePopup.setInputValues(userInfo.getUserInfo());
    validProfile.resetValidation();
}

openEdit.addEventListener('click', handleProfilePopupOpen);