import { CODE_SAMPLES } from "./code-samples.js";
import { MESSAGES, WINDOW_LOCATION } from "./messages.js";

const msgInputElem = document.querySelector("#message-input");
const sendMsgBtn = document.querySelector("#send-message-button");
const receivedMsg = document.querySelector("#received-msg");
const btnPopupSameOrg = document.querySelector("#btn-popup-same-origin");
const btnPopupCrossOrg = document.querySelector("#btn-popup-cross-origin");
const codeSamplesContainer = document.querySelector("#code-samples");
const iframe = document.querySelector("#post-msg-iframe");
const sectionMessages = document.querySelector("#section-messages");

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

// MESSAGES SECTION
MESSAGES.forEach((m) => {
  const container = document.createElement("div");
  container.style =
    "border: 2px solid black; margin-bottom: 15px; padding: 5px";

  const title = document.createElement("h4");
  title.textContent = m.name;
  container.appendChild(title);

  let targetWindow;
  if (m.windowLocation === WINDOW_LOCATION.popup) {
    const openPopupBtn = document.createElement("button");
    openPopupBtn.textContent = "Open Pop-Up";
    openPopupBtn.style = "display: block; margin-bottom: 10px;";
    openPopupBtn.addEventListener("click", () => {
      targetWindow = window.open(m.targetHost + m.targetPath, "_blank");
    });

    container.appendChild(openPopupBtn);
  }

  if (m.windowLocation === WINDOW_LOCATION.iframe) {
    const iframe = document.createElement("iframe");
    iframe.src = m.targetHost + m.targetPath;
    iframe.style = "display: block; margin-bottom: 10px;";
    targetWindow = iframe.contentWindow;

    container.appendChild(iframe);
  }

  const inputField = document.createElement("input");
  inputField.type = "text";
  container.appendChild(inputField);

  const sendMsgBtn = document.createElement("button");
  sendMsgBtn.textContent = "Send Message";
  sendMsgBtn.addEventListener("click", () => {
    targetWindow.postMessage(inputField.value, "*");
  });
  container.appendChild(sendMsgBtn);

  const receivedMsg = document.createElement("p");
  receivedMsg.textContent = "Received Message:";
  container.appendChild(receivedMsg);

  sectionMessages.appendChild(container);

  window.addEventListener(
    "message",
    (event) => {
      console.log(`Message from ${event.origin} detected.`);
      if (event.origin === m.targetHost) {
        receivedMsg.textContent = "Received Message:" + event.data;
      }
    },
    false
  );
});
