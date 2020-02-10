const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3a4b7d119e3bd58c6504a517a3cb2bbc&units=metric`);

    return resp.data.main.temp;

}


module.exports = {
    getClima
}