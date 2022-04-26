/* Объявления переменных */
const profile = document.querySelector('.profile');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
const editBtn = profile.querySelector('.profile__edit-btn');

const popup = document.querySelector('.popup');
const popupClose = popup.querySelector('.popup__close');
const formElement = popup.querySelector('.popup__form');

let nameInput = formElement.querySelector('#popup__input_name');
let jobInput = formElement.querySelector('#popup__input_job');

const saveBtn = popup.querySelector('.popup__btn');

/* Функция открытия формы */
function openedForm() {
    popup.classList.add('popup_opened');
}

/* Функция закрытия формы */
function closeForm() {
    let titleName = profileTitle.textContent.length;
    let titleInput = nameInput.value.length;
    let subtitleJob = profileSubtitle.textContent.length;
    let subtitleInput = jobInput.value.length;

    popup.classList.remove('popup_opened');

    if(titleName != titleInput) {
        nameInput.value = profileTitle.textContent;
    } else if(subtitleJob != subtitleInput) {
        jobInput.value = profileSubtitle.textContent;
    }
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