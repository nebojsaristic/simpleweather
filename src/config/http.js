import axios from "axios";

const restAPI = axios.create({
	baseURL: "https://api.openweathermap.org/data/2.5/onecall"	
});

export default restAPI;