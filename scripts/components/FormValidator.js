export class FormValidator {
    constructor(config, form) {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._form = form;

        this._inputList = Array.from(this._form.querySelectorAll(`.${this._inputSelector}`));
        this._buttonElement = this._form.querySelector(`.${this._submitButtonSelector}`);
    }
    //показать ошибки
    _showInputError(inputElement, errorMessage) {
        const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    }
    //скрыть ошибки
    _hideInputError(inputElement) {
        const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = "";
        errorElement.classList.remove(this._errorClass);
    }
    //проверка валидности инпута (показывает-скрывает ошибки)
    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }
    //проверка валидности всех инпутов
    _hasInvalidInput() {
        return this._inputList.some((inputEl) => {
            return !inputEl.validity.valid;
        });
    }
    //добавление/удаление класса кнопке
    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.disabled = true;
        } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
    }

    _setEventListeners() {
        this._toggleButtonState();

        this._inputList.forEach((inputEl) => {
            inputEl.addEventListener('input', () => {
                this._checkInputValidity(inputEl);
                this._toggleButtonState();
            });
        });
    }
    //включение валидации текущей формы
    enableValidation = () => {
        this._form.addEventListener('submit', (evt) => { evt.preventDefault(); });
        this._setEventListeners();
    }

    resetValidation = () => {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });
    }
}