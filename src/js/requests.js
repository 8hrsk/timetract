const axios = require('axios');

class Requests {
    post(route, data, callback) {
        axios
            .post(route, data)
            .then(response => callback(response.data))
            .catch(error => console.log(error));
    }

    get(route, callback) {
        axios
            .get(route)
            .then(response => callback(response.data))
            .catch(error => console.log(error));
    }
}

module.exports = Requests;