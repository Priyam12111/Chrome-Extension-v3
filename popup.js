function updateTitle() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var title = tab.title;
        document.getElementById('title').textContent = title;
    });
}

document.addEventListener('DOMContentLoaded', function () {
    updateTitle();
});

document.getElementById('title').addEventListener('click', function () {
    updateTitle();
});
