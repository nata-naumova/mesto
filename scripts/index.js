/* Объявления переменных */
const profile = document.querySelector('.profile');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const editBtn = profile.querySelector('.profile__edit-btn');

const popup = document.querySelector('.popup');
const popupClose = popup.querySelector('.popup__close');
const formElement = popup.querySelector('.popup__form');

let nameInput = formElement.querySelector('#popup__input_name');
let jobInput = formElement.querySelector('#popup__input_job');

/* 
Функция открытия формы, должна изменять 
значения в форме из значений в профиле
*/
function openedForm() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;

    popup.classList.add('popup_opened');
}

/* Функция закрытия формы */
function closeForm() {
    popup.classList.remove('popup_opened');
}

/* Функция обработчик "отправки" формы */
function formSubmitHandler(evt) {
    /* Отменить стандартную отправку */
    evt.preventDefault(); 

    /* Добавления новых значений */
    profileTitle.textContent = nameInput.value; 
    profileSubtitle.textContent = jobInput.value; 

    closeForm();
}

/* Вызовы функций */
editBtn.addEventListener('click', openedForm);
popupClose.addEventListener('click', closeForm);
formElement.addEventListener('submit', formSubmitHandler);