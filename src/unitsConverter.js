function getSpeedUnit (unit) {
    switch (unit){
        case 'mph':
        {
            return unit;
        }
        case 'fps':
        {
            return unit;
        }
        case 'km/h':
        {
            return unit;
        }
        default:
        {
            return 'm/s';
        }
    }

}

function getTempUnit(unit){
    switch (unit){
case 'C':
    {
        return '°C'
    }
case 'F':
    {
        return '°F'
    }
default:
    {
        return 'K&ensp;';
    }
    }
}

function unitConvert (value, unit) {
    switch (unit){
        case 'mph':
        {
            return value*2.24;
        }
        case 'fps':
        {
            return value*3.28;
        }
        case 'km/h':
        {
            return value*3.6;
        }
        case 'C':
        {
            return value - 273.15;
        }
        case 'F':
        {
            return value * 9/5 - 459.67;
        }
        default:    //default for K and m/s
        {
            return value;
        }
    }
}

export {unitConvert, getTempUnit, getSpeedUnit};