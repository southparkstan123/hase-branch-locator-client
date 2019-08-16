<template>
  <div>
    <LocationWebform/>
    <LocationItems/>
  </div>
</template>

<script>
import LocationWebform from '../components/LocationWebform.vue'
import LocationItems from '../components/LocationItems.vue'

export default {
  name: 'app',
  components: {
    LocationWebform,
    LocationItems
  }
}
</script>

<style>

</style>
