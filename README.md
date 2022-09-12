# js-wisdom
Lessons learned while developing.

// TODO -> write a script that does ALL of this? simply run a setup-environment.sh ?
to run this locally:
1. use unix-like terminal
1. install deno
1. install denon

// TODO -> write a script that autowrites these? perhaps just commit config.js and put a note to
// replace? no... to risky, someone will accidentally commit
1. create a config.js file in the web-app/src/ folder and add the following vales to the window object: window.JS_WISDOM_HOST = "http://localhost:3001";
window.JS_WISDOM_POST_MESSAGE_FOREIGN_HOST =
  "https://js-wisdom-post-message.surge.sh";