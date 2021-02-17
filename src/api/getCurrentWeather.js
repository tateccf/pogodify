import axios from 'axios';

const KEY = process.env.REACT_APP_API_KEY;

export default axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
  params: {
    appid: KEY,
  },
});
