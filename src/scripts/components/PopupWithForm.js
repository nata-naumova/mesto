import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formName, popupConfig, { inputSelector, submitButtonSelector, formSelector }, submitCallBack) {
        super(popupSelector, popupConfig);
        this._formName = formName;
        this._submitCallBack = submitCallBack;
        this._inputSelector = inputSelector;
        this._submitButtonSelector = submitButtonSelector;
        this._formSelector = formSelector;
        this._formElement = document.forms[this._formName];
        this._inputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
    }

    _getInputValues() { //собирает данные всех полей - при отправке
        this._formValues = {};
        this._inputs.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }
    setInputValues(values) { //при открытии
        this._inputs.forEach((input) => {
            input.value = values[input.name];
        })
    }

    setEventListeners() { //перезапись родительского метода
        super.setEventListeners();
        this._formElement.addEventListener('submit', this._handleSubmit);
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        this._submitCallBack(this._getInputValues());
        this.close();
    }

    close() { //перезапись родительского метода
        super.close();
        this._formElement.reset();
    }
}