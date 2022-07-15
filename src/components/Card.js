export class Card {
    constructor(data, cardTemplate, userId, handleCardClick, { handleDeleteCardClick, handleSetLike, handleRemoveLike }) {
        this._name = data.name;
        this._link = data.link;
        this._cardId = data._id;
        this._likes = data.likes;

        this._userId = userId;
        this._cardOwnerId = data.owner._id;

        this._cardTemplate = cardTemplate;
        this._handleCardClick = handleCardClick;
        this._handleDeleteCardClick = handleDeleteCardClick;
        this._handleSetLike = handleSetLike;
        this._handleRemoveLike = handleRemoveLike;
    }

    /* ---------- Получаем шаблон карточки ----------- */
    _getTemplate() {
        const cardElement = document.querySelector(this._cardTemplate).content.querySelector('.element').cloneNode(true);
        return cardElement;
    }


    _handleImageClick = () => {
        this._handleCardClick({ name: this._name, link: this._link });
    }

    /* ---------- Слушатели карточки ----------- */
    _setEventListeners() {
        this._openImages.addEventListener('click', this._handleImageClick);
        this._deleteButton.addEventListener('click', () => { this._handleDeleteCardClick(this._cardId) });
        this._likeButton.addEventListener('click', () => {
            if (this._likeButton.classList.contains('element__like-btn_active')) {
                this._handleRemoveLike(this._cardId);
            } else {
                this._handleSetLike(this._cardId);
            }
        });
    }

    /* ---------- Проверка лайка ----------- */
    _isCardLiked() {
        if (this._likes.some((user) => {
            return this._userId === user._id;
        })) {
            this._likeButton.classList.add('element__like-btn_active');
        }
    }

    /* ---------- Убираем корзинку - кнопку удаления карточки ----------- */
    _hasDeleteBtn() {
        if (this._userId !== this._cardOwnerId) {
            this._deleteButton.remove();
        }
    }

    /* ---------- Лайки ----------- */
    handleLikeCard(data) {
        this._likes = data.likes;
        this._likesNumber.textContent = this._likes.length;
        this._likeButton.classList.toggle('element__like-btn_active');
    }

    /* ---------- Удаление карточки ----------- */
    deleteCard() {
        this._element.remove();
        this._element = null;
    }

    /* ---------- Генерируем карточку ----------- */
    generateCard() {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__img');
        this._cardTitle = this._element.querySelector('.element__title');

        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardTitle.textContent = this._name;

        this._deleteButton = this._element.querySelector('.element__trash');
        this._likeButton = this._element.querySelector('.element__like-btn');
        this._likesNumber = this._element.querySelector('.element__likes-number');
        this._openImages = this._element.querySelector('.popup-img');

        this._hasDeleteBtn();
        this._isCardLiked();
        this._likesNumber.textContent = this._likes.length;
        this._setEventListeners();

        return this._element;
    }
}