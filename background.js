chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.type === 'fetch_data') {
    const url = message.url;

    fetch(url)
      .then(response => response.text())
      .then(data => {
        sendResponse({ type: 'data_received', data });
      })
      .catch(error => {
        sendResponse({ type: 'error', error });
      });

    return true;
  }
});
