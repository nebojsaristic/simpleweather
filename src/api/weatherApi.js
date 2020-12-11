import restAPI from "@/config/http";

export default class weatherAPI {
    forcast (params) {
        return restAPI ({
            metod: "GET",
            params: params
        });
    }
}

export const WeatherService = new weatherAPI();