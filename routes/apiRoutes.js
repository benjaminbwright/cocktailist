const router = require('express').Router();

router.get('/cocktails', (req, res) => {
  res.send('This will be all the cocktials in json format')
})

module.exports = router;
