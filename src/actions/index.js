import axios from 'axios';

const API_KEY="2646df457adccfc849bbd60f5553e65c";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


//create ajax request with action creater
export const FETCH_WEATHER = 'FETCH_WEATHER'; //purpose -- failsafe; to keep action types consistant between action creaters and reducers

export function fetchWeather(city) {
    //can add different country code later
    const url = `${ROOT_URL}&q=${city},us`;
    //axios request
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        //this is what redux middleware returns instead of the promise
        payload: request
    };
}