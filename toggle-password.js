(function () {
    'use strict';
    const showTimeout = 5000;
    if (document.activeElement.nodeName === "INPUT") {
        const inputElement = document.activeElement;
        if (document.activeElement.type === "password") {
            inputElement.type = "text";
            inputElement.showPassword = setTimeout(() => {
                inputElement.type = "password";
            }, showTimeout);
        } else if (document.activeElement.showPassword) {
            clearTimeout(inputElement.showPassword);
            inputElement.type = "password";
        }
    }
})();
