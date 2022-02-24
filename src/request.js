
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

    return doRequest(opts)
        .then(function (response) {
            return response;
        })
        .catch(function (reason) {

            let message = 'Error requesting: ' + reason.message;

            const err = Error(message);
            err.status = reason.response && reason.response.statusCode;
            throw err;
        });
}

export default request;