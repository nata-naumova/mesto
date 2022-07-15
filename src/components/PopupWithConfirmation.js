import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector, popupConfig) {
        super(popupSelector, popupConfig);
        this._form = this._popup.querySelector('.popup__form');
    }

    /* ---------- Коллбэк на удаление карточки ----------- */
    submitCallback(removing) {
        this._handleSubmit = removing;
    }

    /* ---------- Удаление карточки ----------- */
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('click', (event) => {
            event.preventDefault();
            this._handleSubmit();
        });
    }
}