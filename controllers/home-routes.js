const router = require('express').Router();
const sequelize = require('../connection/connections');
const { NewTrips, FutureTrips,  } = require('../models');

router.get('/', (req, res) => {
  res.render('homepage');
});

module.exports = router;