<template>
    <div>
        <div v-if="loading">
            <p>Weather is loading</p>
        </div>
        <div v-if="!loading && error">
            <p>Allow browser to read your location</p>
        </div>
        <div v-if="!loading && !error">
           <p>Temperature {{ Math.round(result.current.temp) }}°</p>
           <p>Real feel {{ Math.round(result.current.feels_like) }}°</p>
           <p>Pressure {{result.current.pressure}} mb</p>
           <p>Humidity {{result.current.humidity}}%</p>
           <p>Wind {{ Math.round(result.current.wind_speed)*3.6}} km/h</p>
        </div>
    </div>
</template>

<style>
</style>

<script src="./weather.js"></script>