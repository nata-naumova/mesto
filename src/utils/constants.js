export const cardForm = document.querySelector('.add-card');
export const template = '.element-template';
export const profile = document.querySelector('.profile');
export const profileForm = document.querySelector('.edit-profile');
export const avatarForm = document.querySelector('.avatar-profile');
export const profileAddCard = profile.querySelector('.popup-add-card');
export const openEdit = document.querySelector('.popup-edit-profile');
export const buttonEditAvatar = document.querySelector('.profile__avatar-btn');

export const config = {
    formSelector: 'popup__form',
    inputSelector: 'popup__input',
    submitButtonSelector: 'popup__btn',
    inactiveButtonClass: 'popup__btn_error',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__input-error_active'
};
export const formConfiguration = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn',
    formSelector: '.popup__form',
}

export const popupConfiguration = {
    activeModifier: 'popup_opened',
    closeButtonSelector: '.popup__close',
}
export const profileConfiguration = {
    titleSelector: '.profile__title',
    jobSelector: '.profile__subtitle',
    avatarSelector: '.profile__avatar',
}
export const viewPopupConfiguration = {
    imageSelector: '.popup__img',
    captionSelector: '.popup__img-title',
}
export const cardsContainerSelector = '.elements';
export const newCardPopupSelector = '.popup_type_add-card';
export const profilePopupSelector = '.popup_type_edit-profile';
export const avatarPopupSelector = '.popup_type_avatar';
export const imagePopupSelector = '.popup_type_image';
export const cardDeletePopupSelector = '.popup_type_delete-card';

export const newPlaceFormName = 'addCardForm';
export const profileFormName = 'editProfileForm';
export const avatarFormName = 'avatarProfileForm';
export const avatar = document.querySelector('.profile__avatar');