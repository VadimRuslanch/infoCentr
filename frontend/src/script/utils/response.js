import { authTitleElemnet, validationConfig } from "./constants";
import ErrorElement from './ErrorElement';

const response = (info, bool) => {
    authTitleElemnet.textContent = `${info}!`;
    const errorElement = new ErrorElement(validationConfig, info);
    if (bool) {
        console.log(1);
        errorElement.hiddenError();
    } else {
        errorElement.visibleError();    
    }
};

export default response;