const msgInputElem = document.querySelector("#message-input");
const sendMsgBtn = document.querySelector("#send-message-button");

function handleClick() {
  console.log("btn was clicked");
  const message = msgInputElem.value;
  console.log("current message is: ", message);
}

sendMsgBtn.addEventListener("click", handleClick);
