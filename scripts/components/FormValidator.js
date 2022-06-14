export class FormValidator {
    constructor(config, form) {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._form = form;
    }
    //показать ошибки
    _showInputError(inputElement, errorMessage) {
        const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.classList.add(this._errorClass);
        errorElement.textContent = errorMessage;
    }
    //скрыть ошибки
    _hideInputError(inputElement) {
        const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(this._errorClass);
    }
    //проверка валидности инпута (показывает-скрывает ошибки)
    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            const errorMessage = inputElement.validationMessage;
            this._showInputError(inputElement, errorMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }
    //проверка валидности всех инпутов
    _hasInvalidInput(inputList) {
        return inputList.some((inputEl) => {
            return !inputEl.validity.valid;
        });
    }
    //добавление/удаление класса кнопке
    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.disabled = true;
        } else {
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.disabled = false;
        }
    }
    //включение валидации текущей формы
    enableValidation() {
        const inputList = Array.from(this._form.querySelectorAll(`.${this._inputSelector}`));
        const buttonElement = this._form.querySelector(`.${this._submitButtonSelector}`);
        this._toggleButtonState(inputList, buttonElement);

        inputList.forEach((inputEl) => {
            inputEl.addEventListener('input', () => {
            this._checkInputValidity(inputEl);
            this._toggleButtonState(inputList, buttonElement);
            });
        });
    }
    /*
    cleanUpForm = () => {
        const inputList = Array.from(this._form.querySelectorAll(`.${this._inputSelector}`));
        const buttonElement = this._form.querySelector(`.${this._submitButtonSelector}`);
        inputList.forEach((inputEl) => {
            this._hideInputError(inputEl);
        });
        this._toggleButtonState(inputList, buttonElement);
    }
    */
}