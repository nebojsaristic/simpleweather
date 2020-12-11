import {WeatherService} from "@/api/weatherApi";

export default {
    data() {
        return {
            error: false,
            loading: true,
            location: null,
            result: null
        };
    },

    methods: {
        getLocation,
        getForecast
    },

    mounted() {
		this.getLocation();
	}
};

function getLocation(){
    //check if gelocation is supported
    if(!("geolocation" in navigator)) {
        this.error = true;
        return;
    }

    navigator.geolocation.getCurrentPosition (position => {
            this.location = position;
            this.getForecast();
    }, () => {
        this.error = true
    });
}

async function getForecast() {
    try{
        const params = {
            lat: this.location.coords.latitude,
            lon: this.location.coords.longitude,
            units: "metric",
            appId: process.env.VUE_APP_OPEN_WEATHER_API_KEY
        }

        const {data} = await WeatherService.forcast(params);
        this.result = data;
    }
    catch (error){
        this.error = true;
        console.warn(error);
    }
    finally{
        this.loading = false;
    }
}