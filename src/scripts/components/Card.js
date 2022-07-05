export class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement = this._cardSelector
            .content
            .querySelector('.element')
            .cloneNode(true);
        return cardElement;
    }

    _handleImageClick = () => {
        this._handleCardClick({ name: this._name, link: this._link });
    }

    createCard() {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__img');
        this._cardTitle = this._element.querySelector('.element__title');

        this._cardImage.src = `${this._link}`;
        this._cardImage.alt = this._name;
        this._cardTitle.textContent = this._name;

        this._delBtn = this._element.querySelector('.element__trash');
        this._likeBtn = this._element.querySelector('.element__btn');
        this._openImg = this._element.querySelector('.popup-img');

        this._setEventListeners();
        return this._element;
    }

    _setEventListeners() {
        this._delBtn.addEventListener('click', this._handleDeleteCard);
        this._likeBtn.addEventListener('click', this._handleLikeCard);
        this._openImg.addEventListener('click', this._handleImageClick);
    }

    _handleLikeCard = () => {
        this._likeBtn.classList.toggle('element__btn_active');
    }

    _handleDeleteCard = () => {
        this._element.remove();
    }
}