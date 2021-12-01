const apiKey = 'at_L29E5IrOpXIhJv67BHrrMMKMRFHjm';

export const ipApi = async (ip = '') => {
    try {
        let response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${ip}`);
        let jsonResponse = await response.json();
        return jsonResponse || {};
    }
    catch(error){
        console.log(error)
    }
}