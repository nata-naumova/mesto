import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formName, popupConfig, { inputSelector, submitBtnSelector, formSelector }, errorsResetCallBack, submitCallBack, getterCallBack = null) {
        super(popupSelector, popupConfig);
        this._formName = formName;
        this._errorsResetCallBack = errorsResetCallBack;
        this._submitCallBack = submitCallBack;
        this._inputSelector = inputSelector;
        this._submitBtnSelector = submitBtnSelector;
        this._formSelector = formSelector;
        this._getterCallBack = getterCallBack;
        this._formElement = document.forms[this._formName];
        this._inputs = Array.from(this._formElement.querySelectorAll(`.${this._inputSelector}`));
        this._submitBtn = this._formElement.querySelector(`.${this._submitBtnSelector}`);
    }

    _getInputValues() { //собирает данные всех полей
        const values = {};
        this._inputs.forEach((input) => {
            values[input.id.slice(6)] = input.value;
        });
        return values;
    }
    _setInputValues(values) {
        this._inputs.forEach((input) => {
            input.value = values[input.id.slice(6)];
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

    open() {
        if (this._getterCallBack) {
            this._setInputValues(this._getterCallBack()); //запись в поля
        }
        else {
            this._formElement.reset(); //очистка полей
        }
        this._errorsResetCallBack();
        super.open();
    }

    close() { //перезапись родительского метода
        super.close();
        this._formElement.reset();
    }
}