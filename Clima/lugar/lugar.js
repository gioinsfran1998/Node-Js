const axios = require('axios');
// requerimos el axios de la libreria instalada

const getLugarLatLng = async(direccion) => {

    const encodedUlr = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        headers: { 'X-RapidAPI-Key': '5211f293ebmsh63acf5c61787660p1ee43cjsn0b2b905123eb' }
    });

    const resp = await instance.get();

    return {
        direccion,
        lat,
        lng
    }

}