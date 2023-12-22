chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({ url: '*://*.udemy.com/*' }, (tabs) => {
    if (tabs.length > 0) {
      chrome.tabs.sendMessage(tabs[0].id, { command: command });
    }
  });
});
