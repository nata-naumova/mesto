export class Card {

    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = this._cardSelector
        .content
        .querySelector('.element')
        .cloneNode(true);
        return cardElement;
    }
    
    _handleLikeCard() {
        this.likeButton.classList.toggle('element__btn_active');
    }

    _handleDeleteCard() {
        this.card.remove();
    }

    _handleOpenCard() {
        const popupOpenImg = document.querySelector('#popup_img');
        const popupImg = document.querySelector('.popup__img');
        const popupTitleImg = document.querySelector('.popup__img-title');
        
        popupImg.src = `${this._link}`;
        popupImg.alt = this._name;
        popupTitleImg.textContent = this._name;

        this._openPopup(popupOpenImg);
    }

    _openPopup(popup) {
        popup.classList.add('popup_opened');
        document.addEventListener('keydown', (evt) => {
            if(evt.key === 'Escape' && popup) {
                this._closePopup(popup);
            }
        });
    }
    _closePopup(popup) {
        popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', (evt) => {
            if(evt.key === 'Escape' && popup) {
                this._closePopup(popup);
            }
        });
    }

    createCard() {
        this._element = this._getTemplate();

        this._element.querySelector('.element__img').src = `${this._link}`;
        this._element.querySelector('.element__img').alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;

        const deleteButton = this._element.querySelector('.element__trash');
        const card = deleteButton.closest('.element')
        this.card = card;
        deleteButton.addEventListener('click', () => {
            this._handleDeleteCard();
        });

        const likeButton = this._element.querySelector('.element__btn');
        this.likeButton = likeButton;               
        this.likeButton.addEventListener('click', () => {                             
            this._handleLikeCard();
        });

        const openImg = this._element.querySelector('.popup-img');
        this.openImg = openImg;
        this.openImg.addEventListener('click', () => {
            this._handleOpenCard();
        });
      
        return this._element;
    }    
}
