export const cardForm = document.querySelector('.add-card');
export const template = '.element-template';
export const profile = document.querySelector('.profile');
export const profileForm = document.querySelector('.edit-profile');
export const profileAddCard = profile.querySelector('.popup-add-card');
export const openEdit = document.querySelector('.popup-edit-profile');

export const initialCards = [
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
        link: 'https://oir.mobi/uploads/posts/2021-05/1619958346_10-oir_mobi-p-yenotiki-milie-zhivotnie-krasivo-foto-10.jpg'
    }
];

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
}
export const viewPopupConfiguration = {
    imageSelector: '.popup__img',
    captionSelector: '.popup__img-title',
}
export const cardsContainerSelector = '.elements';
export const newCardPopupSelector = '.popup_type_add-card';
export const profilePopupSelector = '.popup_type_edit-profile';
export const imagePopupSelector = '.popup_type_image';
export const newPlaceFormName = 'addCardForm';
export const profileFormName = 'editProfileForm';