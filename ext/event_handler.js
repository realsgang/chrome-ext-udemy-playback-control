chrome.runtime.onMessage.addListener(
  (message, sender, sendResponse) => {
    if (message.command) {
      simulateKeypress(message.command);
    }
  }
);

function simulateKeypress(command) {
  let keyDownEvent;
  const video = document.querySelector("video");
  switch (command) {
    case 'play-pause':
      keyDownEvent = new KeyboardEvent('keydown', {
        key: ' ',
        keyCode: 32,
        bubbles: true,
      });
      break;
    case 'seek-forward':
      // keyDownEvent = new KeyboardEvent('keydown', {
      //   key: 'ArrowRight',
      //   keyCode: 39,
      //   bubbles: true,
      // });
      if (video) video.currentTime += 5;
      break;
    case 'seek-backward':
      // keyDownEvent = new KeyboardEvent('keydown', {
      //   key: 'ArrowLeft',
      //   keyCode: 37,
      //   bubbles: true,
      // });
      if (video) video.currentTime -= 5;
      break;
  }

  document.getElementsByTagName('div')[0].dispatchEvent(keyDownEvent);
}
