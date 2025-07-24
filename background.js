function getSettings(callback) {
    chrome.storage.managed.get(['closeTab', 'filterList', 'openInBoth'], function(managed) {
        chrome.storage.local.get(['closeTab', 'filterList', 'openInBoth'], function(local) {
            const settings = {
                closeTab: managed.closeTab ?? local.closeTab ?? false,
                openInBoth: managed.openInBoth ?? local.openInBoth ?? false,
                filterList: managed.filterList ?? local.filterList ?? []
            };
            callback(settings);
        });
    });
}

function sendToBrave(url, tabId, settings) {
    chrome.runtime.sendNativeMessage("open_in_brave", { url: url }, function (response) {
        if (chrome.runtime.lastError) {
            alert("Native host not installed. Please install it to use this extension.");
        } else {
            if (settings.closeTab && !settings.openInBoth && tabId) {
                chrome.tabs.remove(tabId);
            }
        }
    });
}

// Toolbar button
chrome.browserAction.onClicked.addListener(function (tab) {
    getSettings((settings) => sendToBrave(tab.url, tab.id, settings));
});

// Context menu
chrome.contextMenus.create({
    id: "open-in-brave-context",
    title: "Open link in Brave",
    contexts: ["link"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "open-in-brave-context") {
        getSettings((settings) => sendToBrave(info.linkUrl, null, settings));
    }
});

// Auto redirect
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        return new Promise(resolve => {
            getSettings((settings) => {
                const url = details.url;
                if (!settings.filterList) return resolve({});
                const match = settings.filterList.some(entry => url.includes(entry));
                if (match) {
                    sendToBrave(url, null, settings);
                    resolve({ cancel: true });
                } else {
                    resolve({});
                }
            });
        });
    },
    { urls: ["<all_urls>"], types: ["main_frame"] },
    ["blocking"]
);
