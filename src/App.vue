<template>
  <div id="app">
    <div>
      <h2>What's the weather</h2>
    </div>
    <div>
      <weather></weather>
    </div>
  </div>
</template>

<script>
import Weather from './components/weather/weather.vue'

export default {
  components: {
    Weather
  }    
}
</script>
