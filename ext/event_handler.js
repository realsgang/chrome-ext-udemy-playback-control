chrome.runtime.onMessage.addListener(
  (message, sender, sendResponse) => {
    if (message.command) {
      simulateKeypress(message.command);
    }
  }
);

function simulateKeypress(command) {
  let keyDownEvent;
  switch (command) {
    case 'play-pause':
      keyDownEvent = new KeyboardEvent('keydown', {
        key: ' ',
        keyCode: 32,
        bubbles: true,
      });
      break;
    case 'seek-forward':
      keyDownEvent = new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        keyCode: 39,
        bubbles: true,
      });
      break;
    case 'seek-backward':
      keyDownEvent = new KeyboardEvent('keydown', {
        key: 'ArrowLeft',
        keyCode: 37,
        bubbles: true,
      });
      break;
  }

  document.getElementsByTagName('div')[0].dispatchEvent(keyDownEvent);
}
