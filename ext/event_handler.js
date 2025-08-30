chrome.runtime.onMessage.addListener(
  (message, sender, sendResponse) => {
    if (message.command) {
      simulateKeypress(message.command);
    }
  }
);

function simulateKeypress(command) {
  const video = document.querySelector("video");
  let keyDownEvent;

  switch (command) {
    case 'play-pause':
      // keyDownEvent = new KeyboardEvent('keydown', {
      //   key: ' ',
      //   keyCode: 32,
      //   bubbles: true,
      // });
      video.paused ? video.play() : video.pause();
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

  // keyDownEvent가 생성된 경우에만 dispatch
  if (keyDownEvent) {
    document.dispatchEvent(keyDownEvent);
  }
}
