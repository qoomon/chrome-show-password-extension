(function () {
    'use strict';
    const passwordRevealTimeout = 5000;
    const passwordRevealInputType = 'password-reveal';

    if (activeElement.nodeName === "INPUT") {
        if (activeElement.type === "password") {
            revealPassword(activeElement);
        } else if (activeElement.type === passwordRevealInputType) {
            maskPassword(activeElement);
        }
    }
    
    function revealPassword(passwordElement) {
        if (passwordElement.nodeName !== "INPUT" || passwordElement.type !== "password") return;
        passwordElement.type = passwordRevealInputType;
        passwordElement.passwordRevealTimeout = setTimeout(
            () => maskPassword(passwordElement),
            passwordRevealTimeout
        );
    }

    function maskPassword(passwordElement) {
        if (passwordElement.nodeName !== "INPUT" | passwordElement.type !== passwordRevealInputType)  return;
        passwordElement.type = "password";
        clearTimeout(passwordElement.passwordRevealTimeout);
        delete passwordElement.passwordRevealTimeout;
    }
})();
