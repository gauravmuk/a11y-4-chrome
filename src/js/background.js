function forceReload(extension) {
    chrome.management.setEnabled(extension.id, false, function () {
        chrome.management.setEnabled(extension.id, true, function () {
        });
    });
}

function reloadExtensions() {
    chrome.management.getAll(function (extensions) {
        extensions.forEach(function (extension) {
            if (extension.installType === 'development' && extension.name !== 'Chrome +') {
                forceReload(extension);
            }
        });
    });

    chrome.browserAction.setBadgeText({text: 'OK'});
    setTimeout(function () {
        chrome.browserAction.setBadgeText({text: ''});
    }, 1000);
}

chrome.commands.onCommand.addListener(function(command) {
    if (command === 'open_extensions_page') {
        chrome.tabs.create({url: 'chrome://extensions'});
    } else if (command === 'reload_extensions') {
        reloadExtensions();
    }
});