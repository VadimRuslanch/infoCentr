import maskInput from "inputmask";

const phoneInput = document.getElementById("phoneInput");

const maskOptions = {
    mask: "+7 (999) 999-99-99",
};

const mask = new Inputmask(maskOptions);
mask.mask(phoneInput);

phoneInput.addEventListener("click", function () {
    phoneInput.setSelectionRange(0, 0);
});