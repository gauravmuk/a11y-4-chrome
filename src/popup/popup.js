(function () {
    document.querySelector('#downloads-btn').addEventListener('click', function () {
        chrome.tabs.create({url: 'chrome://downloads'});
    });

    document.querySelector('#extensions-btn').addEventListener('click', function () {
        chrome.tabs.create({url: 'chrome://extensions'});
    });

    document.querySelector('#settings-btn').addEventListener('click', function () {
        chrome.tabs.create({url: 'chrome://settings'});
    });

    document.querySelector('#history-btn').addEventListener('click', function () {
        chrome.tabs.create({url: 'chrome://history'});
    });

    document.querySelector('#clear-data-btn').addEventListener('click', function () {
        chrome.tabs.create({url: 'chrome://settings/clearBrowserData'});
    });

    document.querySelector('#passwords-btn').addEventListener('click', function () {
        chrome.tabs.create({url: 'chrome://settings/passwords'});
    });

    document.querySelector('#autofill-btn').addEventListener('click', function () {
        chrome.tabs.create({url: 'chrome://settings/autofill'});
    });

    document.querySelector('#dino-btn').addEventListener('click', function () {
        chrome.tabs.create({url: 'chrome://dino'});
    });

    document.querySelector('#apps-btn').addEventListener('click', function () {
        chrome.tabs.create({url: 'chrome://apps'});
    });
})();