const express = require("express");
const app = express();

// ============ FIX: Disable version disclosure ============
app.disable('x-powered-by');
// ============ FIX END ============

app.get("/", function (req, res) {
  res.send('{"response": "Hello, Welcome to Kalharcodes!!!"}');
});

//listen to port 3000 by default
app.listen(process.env.PORT || 3000, function () {
  console.log("App listening on port 3000!");
});

module.exports = app;