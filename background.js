chrome.action.onClicked.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url.includes('youtube.com/watch')) {
    chrome.tabs.executeScript(tab.id, { file: "content.js" });
}});
