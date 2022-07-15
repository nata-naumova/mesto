export default class Section { //отрисовка элементов на странице
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._containerSelector = containerSelector;
        this._container = document.querySelector(this._containerSelector);
    }

    /* ---------- Добавляем в контейнер ----------- */
    addItem(item) {
        this._container.prepend(item);
    }

    /* ---------- Отрисовка ----------- */
    renderAll(data) {
        data.forEach(item => this._renderer(item));
    }
} 