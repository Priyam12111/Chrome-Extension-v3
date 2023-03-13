function updateTitle() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var title = tab.title;
        document.querySelector('.title > yt-formatted-string').textContent = "title";
        console.log("TITLE CHANGED")
    });
}

document.addEventListener('DOMContentLoaded', function () {
    updateTitle();
});

document.querySelector('.title > yt-formatted-string').addEventListener('click', function () {
    updateTitle();
});
