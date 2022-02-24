
import axios from 'axios';

function doRequest (opts) {
    if (opts){
    return new Promise(async (resolve, reject) => {
        try {
            await axios.get(opts.url, opts.body).then((response) => resolve(response.data))
        } catch(error){ reject(error)}
});
    }
}


function request (opts) {
    console.log('Making request: %j', opts);
    return doRequest(opts)
        .then(function (response) {
            console.log('Request finished');
            return response;
        })
        .catch(function (reason) {
            console.log('Request error:', reason.message, reason.response && reason.response.statusCode);

            let message = 'Error requesting Google Play:' + reason.message;
            if (reason.response && reason.response.statusCode === 404) {
                message = 'App not found (404)';
            }
            const err = Error(message);
            err.status = reason.response && reason.response.statusCode;
            throw err;
        });
}

export default request;