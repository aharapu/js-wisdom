const express = require("express");
const app = express();
const port = 3001;

// TODO -> make src an environment variable and use src onl for dev
// and use dist for any other environments
app.use(express.static("./web-app/src"));

app.listen(port, () => {
  console.log(`JS Wisdom started running on port ${port}.`);
});
