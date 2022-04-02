function geoFind() {

    return new Promise((resolve, reject) => {
    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

        const location={
            lat: latitude,
            lon: longitude
        };
       resolve(location);
    }


    function error() {

        reject(new Error('fail'));
    }

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        error();
    }

})}

function ipFind(){
    return new Promise((resolve, reject) => {
    fetch('https://ipapi.co/json/').then((response) => response.json())
    .then(data => {
        let latitude = data.latitude
        let longitude = data.longitude
        const location={
            lat: latitude,
            lon: longitude
        };
        resolve(location);
    }).catch(() => {
        reject(new Error('fail'));
    });

    })}

export {ipFind, geoFind};