import '../styles/index.css';

import ApiSubmit from './components/Api';
import Submit from './components/Submit';

import response from './utils/response';
import toggleLoader from './utils/loader';
import { validationConfig } from './utils/constants';
import ErrorElement from './utils/ErrorElement';
import { Inputmask } from "./utils/maskInput";

const formValidators = {};

const enableValidation = (config) => {
    const valodator = new ErrorElement(config);
    const name = config.formElement.getAttribute('name');
    formValidators[name] = valodator;
    valodator.enableValidation();
}

const submit = new Submit({
    handleFormSubmit: (userData) => {
        toggleLoader(true);
        ApiSubmit.submit(userData)
            .then(res => {
                response(res.message, true);
            })
            .catch(err => {
                response(err.message, false);
            })
            .finally(() => toggleLoader(false))
    },
});

submit.setEventListeners();
enableValidation(validationConfig);