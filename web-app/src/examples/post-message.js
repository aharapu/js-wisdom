const msgInputElem = document.querySelector("#message-input");
const sendMsgBtn = document.querySelector("#send-message-button");
const popupBtn = document.querySelector("#popup-btn");
const receivedMsg = document.querySelector("#received-msg");

function handleClick() {
  console.log("btn was clicked");
  const message = msgInputElem.value;
  console.log("current message is: ", message);
}

function openPopup() {
  window.open(
    "http://localhost:3001/examples/post-message-popup.html",
    "_blank"
  );
}

sendMsgBtn.addEventListener("click", handleClick);
popupBtn.addEventListener("click", openPopup);

window.addEventListener("message", (event) => {
  console.log("message arrived");
  receivedMsg.textContent = event.data;
});

/*
Note: Setting target="_blank" on <a> elements implicitly provides the same rel behavior as setting rel="noopener" which does not set window.opener. See browser compatibility for support status.
*/
