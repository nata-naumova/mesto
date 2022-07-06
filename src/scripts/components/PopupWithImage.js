import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, popupConfig, { imageSelector, captionSelector }) {
        super(popupSelector, popupConfig);
        this._imageSelector = imageSelector;
        this._captionSelector = captionSelector;
        this._imageElement = document.querySelector(this._imageSelector);
        this._captionElement = document.querySelector(this._captionSelector);
        this.open = this.open.bind(this);
    }

    open(item) { //перезаписывает родительский метод open
        const { name, link } = item;
        this._imageElement.src = link;
        this._imageElement.alt = name;
        this._captionElement.textContent = name;
        super.open();
    }
}