chrome.runtime.sendMessage({ type: 'fetch_data', url: 'https://www.youtube.com/watch*' }, function(response) {
  if (response.type === 'data_received') {
    const data = response.data;

    // Modify the page's body content with the fetched data
    const body = document.body;
    body.innerHTML = '<h1>Fetched Data</h1>' + data + body.innerHTML;
  } else if (response.type === 'error') {
    const error = response.error;

    // Handle the error appropriately
  }
});
