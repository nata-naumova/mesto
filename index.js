let body = document.querySelector('.page');
let modal = document.querySelector('.popup'); //модальное окно с формой
let open = document.querySelector('.profile-info__edit-btn'); //кнопка редактировать профиль
let close = document.querySelector('.popup__close'); //кнопка закрыть форму

//функция открытия формы
function openModal() {
    modal.classList.add('popup_active');
    body.style = 'overflow:hidden';
}
//функция закрытия формы
function closeModal() {
    modal.classList.remove('popup_active');
    body.style = 'overflow:visible';
}

//при нажатии вызвать функцию
open.addEventListener('click', openModal);
close.addEventListener('click', closeModal);