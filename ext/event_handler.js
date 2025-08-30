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
    case 'seek-forward':
      if (video) video.currentTime += 5;
      break;
    case 'seek-backward':
      if (video) video.currentTime -= 5;
      break;
  }

  // keyDownEvent가 생성된 경우에만 dispatch
  if (keyDownEvent) {
    document.dispatchEvent(keyDownEvent);
  }
}
