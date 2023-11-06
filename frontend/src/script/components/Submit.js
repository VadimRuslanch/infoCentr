export default class Submit {
    constructor({ handleFormSubmit }) {
        this._auth = document.querySelector('.auth');
        this._inputList = this._auth.querySelectorAll(".auth__input");
        this._handleFormSubmit = handleFormSubmit;
    };

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(data => {
            this._formValues[data.name] = data.value;
            if (this._formValues.phone) {
                this._formValues.phone = this._formValues.phone.replace(/[^0-9]/g, '');
            }
        });
        return this._formValues;
    };

    setEventListeners() {
        this._auth.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    };
};