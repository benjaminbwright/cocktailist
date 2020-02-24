require('dotenv').config();
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const db = require('./models')

const app = express();

const PORT = process.env.PORT || 8000;

app.use('/api', apiRoutes);

app.get('*', (req,res) => {
  res.send('Your page not found. But, thanks for visiting.')
});

db.sequelize.sync({force: true}).then(function(){
  app.listen(PORT, () => {
    console.log(`You runnin on ${PORT}`);
  });
});
