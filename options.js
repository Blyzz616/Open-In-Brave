function saveOptions() {
    const closeTab = document.getElementById('closeTab').checked;
    const openInBoth = document.getElementById('openInBoth').checked;
    const filterList = document.getElementById('filterList').value.split('\n').map(s => s.trim()).filter(Boolean);

    chrome.storage.local.set({ closeTab, openInBoth, filterList }, () => {
        alert('Settings saved');
    });
}

function restoreOptions() {
    chrome.storage.local.get(['closeTab', 'openInBoth', 'filterList'], (items) => {
        document.getElementById('closeTab').checked = items.closeTab ?? false;
        document.getElementById('openInBoth').checked = items.openInBoth ?? false;
        document.getElementById('filterList').value = (items.filterList || []).join('\n');
    });
}

document.getElementById('save').addEventListener('click', saveOptions);
document.addEventListener('DOMContentLoaded', restoreOptions);
