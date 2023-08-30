(function () {
    'use strict';
    const maskPasswordTimeout = 5000;

    if (document.activeElement.nodeName !== "INPUT") return;
    if (document.activeElement.type !== "password" && !document.activeElement.maskPasswordTimeout) return;

    if (document.activeElement.type === "password") {
        revealPassword(document.activeElement);
    } else {
        maskPassword(document.activeElement);
    }

    function revealPassword(passwordElement) {
        if (document.activeElement.nodeName !== "INPUT" || document.activeElement.type !== "password") return;
        passwordElement.type = "text";
        passwordElement.maskPasswordTimeout = setTimeout(
            () => maskPassword(passwordElement),
            maskPasswordTimeout
        );
    }

    function maskPassword(passwordElement) {
        if (document.activeElement.nodeName !== "INPUT" || !document.activeElement.maskPasswordTimeout) return;
        passwordElement.type = "password";
        clearTimeout(passwordElement.maskPasswordTimeout);
        delete passwordElement.maskPasswordTimeout;
    }
})();
