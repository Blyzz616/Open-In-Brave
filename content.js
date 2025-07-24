document.addEventListener('click', function (e) {
    if (e.metaKey || e.ctrlKey) {
        chrome.runtime.sendMessage({ url: window.location.href });
    }
});
