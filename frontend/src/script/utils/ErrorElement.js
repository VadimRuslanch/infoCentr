export default class ErrorElement {
    constructor(config, setting) {
        this._data = setting;
        this._formElement = config.formElement;
        this._fieldElement = config.fieldElement;
        this._inputSelector = config.inputSelector;
        this._fieldErrorClass = config.fieldErrorClass;
        this._inputErrorClass = config.inputErrorClass;
        this._submitButton = config.submitButton;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._errorClass = config.errorClass;
        this._submitButtonSelector = this._formElement.querySelector(this._submitButton);
        this._fieldList = Array.from(this._formElement.querySelectorAll(this._fieldElement));
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    }

    visibleError = () => {
        const errorElement = this._formElement.querySelector('.auth__error');
        errorElement.classList.add(this._errorClass);
        this._inputList.forEach((input) => {
            input.classList.add(this._inputErrorClass);
        });
        this._fieldList.forEach((field) => {
            field.classList.add(this._fieldErrorClass);
        });
    };

    hiddenError = () => {
        this._formElement.classList.add("auth_hidden");
    };

    _setFormError(errorMessage) {
        const errorElement = this._formElement.querySelector('.auth__error');
        if (errorElement) {
            errorElement.textContent = errorMessage;
            errorElement.classList.add(this._errorClass);
        }
    }

    _clearFormError() {
        const errorElement = this._formElement.querySelector('.auth__error');
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.classList.remove(this._errorClass);
        }
    }

    _setInputError(inputSelector, errorMessage) {
        if (inputSelector) {
            inputSelector.classList.add(this._inputErrorClass);
            this._setFormError(errorMessage);
        }
    }

    _clearInputError(inputSelector) {
        if (inputSelector) {
            inputSelector.classList.remove(this._inputErrorClass);
            this._clearFormError();
        }
    }

    _isValid(inputSelector) {
        if (inputSelector) {
            if (!inputSelector.validity.valid) {
                this._setInputError(inputSelector, inputSelector.validationMessage);
            } else {
                this._clearInputError(inputSelector);
            }
        }
    }

    _hasInvalidInput() {
        return this._inputList.some(inputSelector => !inputSelector.validity.valid);
    }

    _toggleButtonState() {
        if (this._submitButtonSelector) {
            if (this._hasInvalidInput()) {
                this._submitButtonSelector.classList.add(this._inactiveButtonClass);
                this._submitButtonSelector.setAttribute("disabled", "disabled");
            } else {
                this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
                this._submitButtonSelector.removeAttribute("disabled");
            }
        }
    }

    _setInputsListeners() {
        this._inputList.forEach(inputSelector => {
            inputSelector.addEventListener('input', () => {
                this._isValid(inputSelector);
                this._toggleButtonState();
            });
        });
    }

    _setSubmitListener() {
        if (this._formElement) {
            this._formElement.addEventListener('submit', evt => {
                evt.preventDefault();
            });
        }
    }

    enableValidation() {
        this._setSubmitListener();
        this._setInputsListeners();
    }
}