(function() {
    'use strict';
    const logPrefix = "Chrome Extension: Password Show: "
    console.debug(logPrefix + "script injected");


    if (document.activeElement.nodeName === "INPUT") {
        const inputElement = document.activeElement;
        if(document.activeElement.type === "password") {
            inputElement.type = "text";
            inputElement.showPassword = setTimeout(() => {
                inputElement.type = "password";
                }, 5000);
        } else if(document.activeElement.showPassword) {
            clearTimeout(inputElement.showPassword);
            inputElement.type = "password";
        }
    }
})();
