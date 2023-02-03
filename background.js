function togglePassword() {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        const tab = tabs[0];
        if(!tab) return;
        chrome.scripting.executeScript({
            target: {tabId: tab.id,  allFrames : true},
            files: ["toggle-password.js"],
        });
    });
}

// -----------------------------------------------------------------------------

chrome.commands.onCommand.addListener(async (command) => {
    console.debug(`command: ${command}`)
    switch (command) {
        case 'toggle-password':
            return togglePassword()
    }
})