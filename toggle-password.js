(function () {
    'use strict';
    const passwordRevealTimeout = 5000;
    const passwordRevealInputType = 'password-reveal';

    const activeElement = document.activeElement;
    if (activeElement.nodeName === "INPUT") {
        if (activeElement.type === "password") {
            revealPassword(activeElement);
        } else if (activeElement.getAttribute("type") === passwordRevealInputType) {
            maskPassword(activeElement);
        }
    }
    
    function revealPassword(passwordElement) {
        if (passwordElement.nodeName !== "INPUT" || passwordElement.type !== "password") return;
        console.debug("reveal password:", passwordElement)
        passwordElement.type = passwordRevealInputType;
        passwordElement.passwordRevealTimeout = setTimeout(
            () => maskPassword(passwordElement),
            passwordRevealTimeout
        );
    }

    function maskPassword(passwordElement) {
        if (passwordElement.nodeName !== "INPUT" || activeElement.getAttribute("type") !== passwordRevealInputType) return;
        console.debug("mask password:", passwordElement)
        passwordElement.type = "password";
        clearTimeout(passwordElement.passwordRevealTimeout);
        delete passwordElement.passwordRevealTimeout;
    }
})();
