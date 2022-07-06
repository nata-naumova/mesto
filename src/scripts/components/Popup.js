export default class Popup {
    constructor(popupSelector, popupConfig) {
        this._popupSelector = popupSelector;
        this._activeModifier = popupConfig.activeModifier;
        this._closeButtonSelector = popupConfig.closeButtonSelector;
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleCloseBtnClick = () => {
        this.close();
    }

    _handleCloseOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            this.close();
        }
    }

    setEventListeners() {
        this._popup = document.querySelector(this._popupSelector);
        this._closeButton = this._popup.querySelector(this._closeButtonSelector);
        this._popup.addEventListener('mousedown', this._handleCloseOverlayClick);
        this._closeButton.addEventListener('click', this._handleCloseBtnClick);
    }

    open() {
        document.addEventListener('keydown', this._handleEscClose);
        this._popup.classList.add(this._activeModifier);
    }

    close() {
        document.removeEventListener('keydown', this._handleEscClose);
        this._popup.classList.remove(this._activeModifier);
    }
}