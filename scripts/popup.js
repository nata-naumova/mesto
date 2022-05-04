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

/* КАРТОЧКИ */

const cardList = document.querySelector('.elements');
const cardTemplate = document.querySelector('.element-template').content;

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    }
];

initialCards.forEach(function (el) {
    const cardItem = cardTemplate.cloneNode(true);

    cardItem.querySelector('.element__img').src = el.link;
    cardItem.querySelector('.element__img').alt = el.name;
    cardItem.querySelector('.element__title').textContent = el.name;

    cardList.append(cardItem);
})

/* КАРТОЧКИ ДОБАВЛЕНИЕ НОВОЙ */

/* КАРТОЧКИ ЛАЙКИ */
const cardLike = document.querySelectorAll('.element__btn');

if(cardLike.length > 0) {
    for(let i = 0; i < cardLike.length; i++) {
        const like = cardLike[i];
        like.addEventListener('click', function (e) {
            addLike(like);
            e.preventDefault();
        });
    }
}

function addLike(like) {
    like.classList.toggle('element__btn_active');
}

/* УДАЛЕНИЕ КАРТОЧКИ */