export const overlayList = document.querySelectorAll('.popup');
export const cardList = document.querySelector('.elements');
export const cardForm = document.querySelector('.add-card');
export const nameCard = document.querySelector('#name-card');
export const linkCard = document.querySelector('#link-card');
export const template = document.querySelector('.element-template');
export const profile = document.querySelector('.profile');
export const profileTitle = profile.querySelector('.profile__title');
export const profileSubtitle = profile.querySelector('.profile__subtitle');
export const profileForm = document.querySelector('.edit-profile');
export const profileAddCard = profile.querySelector('.popup-add-card');
export const nameInput = profileForm.querySelector('#name-profile');
export const jobInput = profileForm.querySelector('#job-profile');
export const openEdit = document.querySelector('.popup-edit-profile');
export const popupImg = document.querySelector('.popup__img');
export const popupTitleImg = document.querySelector('.popup__img-title');
export const popupEditForm = document.querySelector('#popup_1');
export const popupAddCard = document.querySelector('#popup_2');
export const popupOpenImg = document.querySelector('#popup_img');
export const closeBtnProfile = document.querySelector('.popup-close-edit');
export const closeBtnImage = document.querySelector('.popup-close-img');
export const closeBtnAddCard = document.querySelector('.popup-close-add');

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
        link: 'https://wallbox.ru/resize/960x800/wallpapers/main/201523/85121fb83f62a3c.jpg'
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