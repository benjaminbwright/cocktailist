require('dotenv').config();
const express = require('express');
const exphbs = require("express-handlebars");
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

const PORT = process.env.PORT || 8000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(htmlRoutes)
// app.use('/api', apiRoutes);

app.get('*', (req,res) => {
  res.send('Your page not found. But, thanks for visiting.')
});

app.listen(PORT, () => {
  console.log(`You runnin on ${PORT}`);
})