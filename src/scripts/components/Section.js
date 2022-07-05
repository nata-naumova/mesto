export default class Section { //отрисовка элементов на странице
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._containerSelector = containerSelector;
        this._container = document.querySelector(`.${this._containerSelector}`);
    }

    addItem(item) { //добавляем в контейнер
        this._container.prepend(this._renderer(item))
    }

    renderAll() {
        this._items.forEach((item) => {
            this.addItem(item);
        });
    }
} 