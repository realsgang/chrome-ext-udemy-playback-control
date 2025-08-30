chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({ url: '*://*.udemy.com/*' }, (tabs) => {
    if (tabs.length > 0) {
      chrome.tabs.sendMessage(tabs[0].id, { command })
        .catch(err => console.warn("메시지 전송 실패:", err));
    }
  });
});
