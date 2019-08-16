<template>
  <div id="app" class="container">
    <Alert/>
    <LanguageSwitcher/>
    <ServiceDetailModal/>
    <ATMTypeModal/>
    <router-view/>
  </div>
</template>

<script>
import Alert from './components/Alert.vue'
import ServiceDetailModal from './components/ServiceDetailModal.vue'
import ATMTypeModal from './components/ATMTypeModal.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'

export default {
  name: 'app',
  components: {
    Alert,
    ServiceDetailModal,
    LanguageSwitcher,
    ATMTypeModal
  }
}
</script>

<style>

</style>
