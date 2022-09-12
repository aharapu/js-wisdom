import { CODE_SAMPLES } from "./code-samples.js";
import { MESSAGES, WINDOW_LOCATION } from "./messages.js";

const codeSamplesContainer = document.querySelector("#code-samples");
const sectionMessages = document.querySelector("#section-messages");

CODE_SAMPLES.forEach((sample) => {
  const sampleTitlehtml = document.createElement("h6");
  sampleTitlehtml.textContent = sample.name;

  const sampleHtml = document.createElement("p");
  sampleHtml.style = "border: 1px solid grey; background-color: lightgrey;";
  sampleHtml.textContent = sample.content;

  codeSamplesContainer.appendChild(sampleTitlehtml);
  codeSamplesContainer.appendChild(sampleHtml);
});

// MESSAGES SECTION
// TODO -> add a chat-like section to each container?
//  step 1 would be listing the incoming messages in each window in a chat-box style
MESSAGES.forEach((m) => {
  const container = document.createElement("div");
  container.style =
    "border: 2px solid black; margin-bottom: 15px; padding: 5px; background: #eaebfc";

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
    iframe.style =
      "display: block; margin-bottom: 10px; width: 500px; height: 300px; background: #eafbfc";
    iframe.onload = () => {
      targetWindow = iframe.contentWindow;
    };

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

  // TODO -> move event listener outside of loop. currently adding too many listeners
  window.addEventListener(
    "message",
    (event) => {
      if (event.origin === m.targetHost && event.data.sourceId === m.id) {
        receivedMsg.textContent = "Received Message:" + event.data.message;
      }
    },
    false
  );
});
