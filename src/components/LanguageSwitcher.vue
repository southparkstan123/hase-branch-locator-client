<template>
    <div class="clearfix">
        <div class="float-right">
            <span class="lang" @click="changeLanguage(item.value)" variant="link" v-bind:key="index" v-for="(item, index) in selection">{{ item.label }}</span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    changeLanguage(val){
      const path = '/'
      this.$store.dispatch('siteConfig/setLanguage', val, { root: true })
      this.$store.dispatch('branchLocation/resetItems', { root: true })
      const query = {'lang': this.currentLanguage.value };
      this.$router.replace({path, query})
    }
  },
  computed: {
    ...mapGetters({
      selection: 'siteConfig/getLanguagesToBeSelected',
      currentLanguage: 'siteConfig/getCurrentLanguage'
    })
  }
}
</script>

<style>
    .lang{
        padding: 5px;
        cursor: pointer;
    }
</style>
