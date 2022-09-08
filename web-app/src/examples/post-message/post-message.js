import { CODE_SAMPLES } from "./code-samples.js";

const msgInputElem = document.querySelector("#message-input");
const sendMsgBtn = document.querySelector("#send-message-button");
const popupBtn = document.querySelector("#popup-btn");
const receivedMsg = document.querySelector("#received-msg");
const codeSamplesContainer = document.querySelector("#code-samples");
const iframe = document.querySelector("#post-msg-iframe");

iframe.src = `${window.JS_WISDOM_HOST}/examples/post-message/post-message-iframe.html`;

console.log("script is loaded");

function handleClick() {
  console.log("btn was clicked");
  const message = msgInputElem.value;
  console.log("current message is: ", message);
}

function openPopup() {
  console.log("clicking button");
  window.open(
    "http://localhost:3001/examples/post-message/post-message-popup.html",
    "_blank"
  );
}

sendMsgBtn.addEventListener("click", handleClick);
popupBtn.addEventListener("click", openPopup);

window.addEventListener("message", (event) => {
  console.log("message arrived");
  receivedMsg.textContent = event.data;
});

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
