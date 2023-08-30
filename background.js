function executeScriptAtCurrentTab(file) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        const tab = tabs[0];
        if (!tab) return;
        chrome.scripting.executeScript({
            target: {tabId: tab.id, allFrames: true},
            files: [file],
        });
    });
}

// -----------------------------------------------------------------------------

chrome.commands.onCommand.addListener(async (command) => {
    console.debug(`command: ${command}`)
    switch (command) {
        case 'toggle-password':
            return executeScriptAtCurrentTab("toggle-password.js");
    }
});