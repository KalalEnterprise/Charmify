const express = require('express');
const bodyParser = require('body-parser');
const botRoutes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/webhook', botRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});