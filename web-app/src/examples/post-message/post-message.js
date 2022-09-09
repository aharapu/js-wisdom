import { CODE_SAMPLES } from "./code-samples.js";

const msgInputElem = document.querySelector("#message-input");
const sendMsgBtn = document.querySelector("#send-message-button");
const receivedMsg = document.querySelector("#received-msg");
const btnPopupSameOrg = document.querySelector("#btn-popup-same-origin");
const btnPopupCrossOrg = document.querySelector("#btn-popup-cross-origin");
const codeSamplesContainer = document.querySelector("#code-samples");
const iframe = document.querySelector("#post-msg-iframe");

iframe.src = `${window.JS_WISDOM_HOST}/examples/post-message/post-message-iframe.html`;

function handleClick() {
  console.log("btn was clicked");
  const message = msgInputElem.value;
  console.log("current message is: ", message);
}

sendMsgBtn.addEventListener("click", handleClick);
btnPopupSameOrg.addEventListener("click", () =>
  window.open(
    `${window.JS_WISDOM_HOST}/examples/post-message/post-message-popup.html`,
    "_blank"
  )
);

btnPopupCrossOrg.addEventListener("click", () =>
  window.open("https://js-wisdom-post-message.surge.sh", "_blank")
);

window.addEventListener(
  "message",
  (event) => {
    console.log("message arrived");
    receivedMsg.textContent = event.data;
  },
  false
);

CODE_SAMPLES.forEach((sample) => {
  const sampleTitlehtml = document.createElement("h6");
  sampleTitlehtml.textContent = sample.name;

  const sampleHtml = document.createElement("p");
  sampleHtml.style = "border: 1px solid grey; background-color: lightgrey;";
  sampleHtml.textContent = sample.content;

  codeSamplesContainer.appendChild(sampleTitlehtml);
  codeSamplesContainer.appendChild(sampleHtml);
});

/*
Note: Setting target="_blank" on <a> elements implicitly provides the same rel behavior as setting rel="noopener" which does not set window.opener. See browser compatibility for support status.
*/
