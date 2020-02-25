require('dotenv').config();
const express = require('express');
const exphbs = require("express-handlebars");
const apiRoutes = require('./routes/apiRoutes');
const db = require('./models')
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(htmlRoutes)
app.use('/api', apiRoutes);

// db.Ingredient.create({
//   name: 'tequila',
//   type: 'liqour',
//   flavorProfile: 'agave'
// });

app.get('*', (req,res) => {
  res.send('Your page not found. But, thanks for visiting.')
});

db.sequelize.sync().then(function(){
  app.listen(PORT, () => {
    console.log(`You runnin on ${PORT}`);
  });
});
