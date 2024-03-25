<template>
  <div>
    <LocationWebform v-if="items.length === 0"/>
    <LocationItems v-else/>
  </div>
</template>

<script>
import LocationWebform from '../components/LocationWebform.vue'
import LocationItems from '../components/LocationItems.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    LocationWebform,
    LocationItems
  },
  computed:{
    ...mapGetters({
      items: 'branchLocation/getLocationItems'
    })
  }
}
</script>

<style>

</style>
