var express = require('express');
var router = express.Router();

var seed = require("../config/seed.js")

//http://localhost:3000/api/seed
router.get('/users', seed.seedUsers);
router.get('/artists', seed.seedArtists);
router.get('/tickets', seed.seedTickets);
router.get('/shows', seed.seedShows);
// router.get('/tours', seed.seedTours);

module.exports = router;
