export const WINDOW_LOCATION = {
  popup: "POPUP",
  iframe: "IFRAME",
};

export const MESSAGES = [
  {
    id: 1,
    name: "Same Site Pop-Up",
    targetHost: window.JS_WISDOM_HOST,
    targetPath: "/examples/post-message/post-message-popup.html",
    windowLocation: WINDOW_LOCATION.popup,
  },
  {
    id: 2,
    name: "Same Site IFrame",
    targetHost: window.JS_WISDOM_HOST,
    targetPath: "/examples/post-message/post-message-iframe.html",
    windowLocation: WINDOW_LOCATION.iframe,
  },
  {
    id: 3,
    name: "Cross Site Pop-Up",
    targetHost: window.POST_MESSAGE_FOREIGN_HOST,
    targetPath: "",
    windowLocation: WINDOW_LOCATION.popup,
  },
  {
    id: 4,
    name: "Cross Site IFrame",
    targetHost: window.POST_MESSAGE_FOREIGN_HOST,
    targetPath: "",
    windowLocation: WINDOW_LOCATION.iframe,
  },
];
