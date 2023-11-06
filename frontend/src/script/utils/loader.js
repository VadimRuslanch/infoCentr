import { preloader, buttonSelector, inputSelector } from "./constants";

const toggleLoader = (isLoading) => {
    if (isLoading) {
        preloader.classList.add('preloader_opened')
    }
    else {
        preloader.classList.remove('preloader_opened')
    }
    
    buttonSelector.disabled = isLoading;

    inputSelector.forEach((input) => {

        input.disabled = isLoading;
    });
};

export default toggleLoader;