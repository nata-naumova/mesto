export default class UserInfo { //управление отображения информации о пользователе
    constructor({ titleSelector, jobSelector, avatarSelector }) {
        this._titleSelector = titleSelector;
        this._jobSelector = jobSelector;
        this._avatarSelector = avatarSelector;
        this._titleElement = document.querySelector(this._titleSelector);
        this._jobElement = document.querySelector(this._jobSelector);
        this._avatarElement = document.querySelector(this._avatarSelector);
    }

    /* ---------- Установить значения ----------- */
    setUserInfo = (data) => {
        this._titleElement.textContent = data?.name || '';
        this._jobElement.textContent = data?.about || '';
        this._avatarElement.src = data?.avatar || '';
    }

    /* ---------- Получить значения ----------- */
    getUserInfo = () => {
        return {
            name: this._titleElement.textContent,
            about: this._jobElement.textContent,
            avatar: this._avatarElement.src
        };
    }

}