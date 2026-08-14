const express = require("express");
const app = express();

// Disable version disclosure
app.disable("x-powered-by");

app.get("/", function (req, res) {
  res.send('{"response": "Hello, Welcome to Kalharcodes!!!"}');
});

// Start server only when this file is run directly
if (require.main === module) {
  app.listen(process.env.PORT || 3000, function () {
    console.log("App listening on port 3000!");
  });
}

module.exports = app;