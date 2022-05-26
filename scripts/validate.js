//показать ошибки
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add('popup__input_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};
//скрыть ошибки
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove('popup__input_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};
//проверка валидности инпута
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};
//проверка валидности всех инпутов
const inputList = document.querySelectorAll('.popup__input');
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
};
//добавление/удаление класса кнопке
const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup__btn_error');
    } else {
      buttonElement.classList.remove('popup__btn_error');
    }
};
//обработчик на каждый инпут формы
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__btn');
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

// включение валидации вызовом enableValidation
const enableValidation = ({formSelector}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
   formList.forEach((formElement) => {
     formElement.addEventListener('submit', (evt) => {
       evt.preventDefault();
     });
     setEventListeners(formElement);
   });
};
// все настройки передаются при вызове
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_error',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
});