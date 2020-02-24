require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.get('*', (req,res) => {
  res.send('Your page not found. But, thanks for visiting.')
});

app.listen(PORT, () => {
  console.log(`You runnin on ${PORT}`);
})