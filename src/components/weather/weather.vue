<template>
    <div class="loading">
        <div v-if="loading">
            <p>Weather is loading</p>
        </div>

        <div v-if="!loading && error">
            <p>Allow browser to read your location</p>
        </div>

        <div v-if="!loading && !error">
            <div class="content">
                <div class="temperature">
                    <img v-bind:src="`http://openweathermap.org/img/wn/${result.current.weather[0].icon}.png`" alt="Current weather icon" class="col-6">
                    <h5 class="col-6">{{result.current.weather[0].description}}</h5>                    
                    <p>{{ Math.round(result.current.temp) }}°</p>                                    
                </div>
                <div class="details"> 
                    <div class="col-6">
                        <img src="/img/temperature.png" alt="Feels like icon" class="col-6">
                        <h5>Feels like</h5>  
                        <p>{{ Math.round(result.current.feels_like) }}°</p>
                    </div>
                    <div class="col-6">
                        <img src="/img/humidity.png" alt="Humidity icon">
                        <h5>Humidity</h5>  
                        <p>{{result.current.humidity}}%</p>
                    </div>                  
                    <div class="col-6">
                        <img src="/img/pressure.png" alt="Pressure icon">
                        <h5>Pressure</h5>  
                        <p>{{result.current.pressure}} mb</p>
                    </div>  
                    <div class="col-6">
                        <img src="/img/wind.png" alt="Wind icon">
                        <h5>Wind</h5>   
                        <p>{{ Math.round(result.current.wind_speed)*3.6}} km/h</p>
                    </div>                
                </div>                    
            </div>
        </div>
    </div>
</template>

<style lang="scss">
</style>

<script src="./weather.js"></script>