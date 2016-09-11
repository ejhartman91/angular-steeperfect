let express = require('express');
let router = express.Router();

let teaService = require('./tea.service');

router.get('/', (req, res) => {
    const teas = teaService.getTeas();
    res.send(teas);
});

module.exports = router;