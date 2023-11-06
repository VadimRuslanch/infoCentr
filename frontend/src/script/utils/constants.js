export const preloader = document.querySelector('.preloader');
export const authFormElement = document.querySelector('.auth__form');
export const authTitleElemnet = document.querySelector('.auth__title');
export const inputSelector = document.querySelectorAll('.auth__input');
export const buttonSelector = document.querySelector('.auth__button');

export const validationConfig = {
    formElement: authFormElement,

    fieldElement: '.auth__field',

    inputSelector: '.auth__input',
    submitButton: '.auth__button',
    inactiveButtonClass: 'auth__button-inactive',

    fieldErrorClass: 'auth__field_error',
    inputErrorClass: 'auth__input_error',
    errorClass: 'auth__error_active',
};