<template>
  <div>
    <b-alert :show="messageObj.show" dismissible @dismissed="closeAlert"
      :variant="this.mapCodeToClass(messageObj.type)">
      <span v-html="messageObj.message"></span>
    </b-alert>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      dismissSecs: 5
    }
  },
  computed: mapGetters({
    messageObj: 'message/getMessageObj'
  }),
  methods: {
    mapCodeToClass(type) {
      switch (type) {
      case 'error':
        return 'danger'
      case 'warning':
        return 'warning'
      default:
        return 'success'
      }
    },
    closeAlert() {
      this.$store.commit('message/closeMessage')
    }
  },
  updated() {
    if (this.messageObj.show) {
      setTimeout(() => {
        this.closeAlert()
      }, this.dismissSecs * 1000)
    }
  }
}
</script>

<style></style>
