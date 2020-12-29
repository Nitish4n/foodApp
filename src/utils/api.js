import axios from 'axios';
const API_KEY = "ef927de6cc0f1cf2db04db170b532622";
const BASE_URL="https://developers.zomato.com/api/v2.1/";

const headers = {
    'Content-Type' : 'application/json',
    'user-key': API_KEY
}
export function getGeoCodeAPI(lat, lon) {
    return fetch(`${BASE_URL}geocode?lat=${lat}&lon=${lon}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'user-key': API_KEY
        }
    })
    .then(response => response.json())
    .catch(err => err.message)
}


export const getRestaurantDetails = async (id) => {
    const details = await axios.get(`${BASE_URL}restaurant`, {
        params: {
            res_id: id
        },
        headers: headers
    });
    return details;
}

export const getRestaurantDailyMenu = async (id) => {
    console.log('just to call')
    console.log(`${BASE_URL}dailymenu`)
    console.log(id)
    const details = await axios.get(`${BASE_URL}dailymenu`, {
        params: {
            res_id: id
        },
        headers: headers
    });
    console.log('daily menu')
    console.log(details)
    return details;
}

