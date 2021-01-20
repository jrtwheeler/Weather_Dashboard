import axios from "axios";
const BASEURL = "https://api.openweathermap.org/data/2.5/forecast?q="
const KEY = "&appid=9d93230f3ad2bc78a7973c5234d7ba2e";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getWeather: function (query) {
    return axios.get(BASEURL + query + KEY);
  }
};
