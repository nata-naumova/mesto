export class Card {
    constructor(data, cardTemplate, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardTemplate = cardTemplate;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardTemplate).content.querySelector('.element').cloneNode(true);
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

        this._deleteButton = this._element.querySelector('.element__trash');
        this._likeButton = this._element.querySelector('.element__btn');
        this._openImages = this._element.querySelector('.popup-img');

        this._setEventListeners();
        return this._element;
    }

    _setEventListeners() {
        this._deleteButton.addEventListener('click', this._handleDeleteCard);
        this._likeButton.addEventListener('click', this._handleLikeCard);
        this._openImages.addEventListener('click', this._handleImageClick);
    }

    _handleLikeCard = () => {
        this._likeButton.classList.toggle('element__btn_active');
    }

    _handleDeleteCard = () => {
        this._element.remove();
        this._element = null;
    }
}