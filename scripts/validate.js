const config = {
  formSelector: 'popup__form',
  inputSelector: 'popup__input',
  submitButtonSelector: 'popup__btn',
  inactiveButtonClass: 'popup__btn_error',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
};

//показать ошибки
const showInputError = (inputConfig) => {
  const {formElement, inputElement, errorMessage, inputErrorClass, errorClass} = inputConfig;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  errorElement.textContent = errorMessage;
  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
};

//скрыть ошибки
const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

//проверка валидности инпута
const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
  if (!inputElement.validity.valid) {
    const errorMessage = inputElement.validationMessage;
    showInputError({formElement, inputElement, errorMessage, inputErrorClass, errorClass});
  } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  }
};

//проверка валидности всех инпутов
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
};

//добавление/удаление класса кнопке
const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.disabled = false;
    }
};

//обработчик на каждый инпут формы
const setEventListeners = (formElement, validConfig) => {
  const {inputSelector, submitButtonSelector,inputErrorClass, errorClass, inactiveButtonClass} = validConfig;
  const inputList = Array.from(formElement.querySelectorAll(`.${inputSelector}`));
  const buttonElement = formElement.querySelector(`.${submitButtonSelector}`);
  toggleButtonState(inputList, buttonElement, inactiveButtonClass);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });
};

// включение валидации вызовом enableValidation
const enableValidation = (validateConfig) => {
  const {formSelector} = validateConfig;
  const formList = Array.from(document.querySelectorAll(`.${formSelector}`));
   formList.forEach((formElement) => {
     formElement.addEventListener('submit', (evt) => {
       evt.preventDefault();
     });
     setEventListeners(formElement, validateConfig);
   });
};
// все настройки передаются при вызове
enableValidation(config);