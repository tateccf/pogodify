import axios from 'axios';

const KEY = process.env.REACT_APP_API_KEY;

export default axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/onecall',
  params: {
    appid: KEY,
    units: 'metric',
    exclude: 'current,minutely,hourly,alerts',
  },
});
