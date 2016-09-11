let db = require('../../config/db/db');

let service = {
    getTeas
};

///////////////////////////////////////

function getTeas() {
    return ['tea1', 'tea2', 'tea3'];
}

///////////////////////////////////////


module.exports = service;