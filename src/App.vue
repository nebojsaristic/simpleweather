<template>
  <div id="app">
    <div>
      <div class="text-center">
        <h2>What's the weather</h2>
      </div>      
      <div class="containers">
        <weather></weather>
      </div>
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
