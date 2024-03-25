<template>
  <b-card no-body tag="article" style="max-width: 20rem;height: 100%" class="card mb-2 ml-1 mr-1 mt-2">

    <b-img class="map" @click="toGoogleMapPage" :src="staticMapLink"></b-img>
    <b-card-body class="location-content">
      <b-card-title title-tag="h5">{{ item.siteName }}</b-card-title>
      <b-card-text v-html="toHtml(item.siteAddress)"></b-card-text>
    </b-card-body>
    <span class="remove-span"></span>
    <b-card-footer class="text-center">
      <b-button variant="outline-success" class="text-center" @click="openServiceDetailsModal">
        <font-awesome-icon icon="lightbulb"></font-awesome-icon> {{ $t("branchLocator.result.serviceDetails") }}
      </b-button>
    </b-card-footer>
  </b-card>
</template>

<script>
import { generateHtmlForContent } from "../helpers/HTMLHelper"
import { generateStaticMapLink } from "../helpers/GoogleMapHelper"
import { googleMapAPIEndpoint, googleMapAPIKey } from '../config';

export default {
  data() {
    return {
      staticMapLink: ''
    }
  },
  props: ["item", "heightOfCarousel"],
  methods: {
    toHtml(val) {
      return generateHtmlForContent(val);
    },
    openServiceDetailsModal() {
      const payload = {
        siteAddress: this.item.siteAddress,
        siteName: this.item.siteName,
        siteAMBServiceHour: this.item.siteAMBServiceHour,
        siteServiceHourRemark: this.item.siteServiceHourRemark,
        siteServiceHourWeekdays: this.item.siteServiceHourWeekdays,
        siteServiceHourSat: this.item.siteServiceHourSat,
        siteServiceHourSun: this.item.siteServiceHourSun,
        siteFXATMServices: this.item.siteFXATMServices
      }
      this.$store.dispatch('serviceDetailsModal/open', payload, { root: true })
    },
    toGoogleMapPage() {
      window.open('https://www.google.com/maps/search/?api=1&query=' + this.item.lat + ',' + this.item.lng, '_blank')
    }
  },
  mounted() {
    this.staticMapLink = generateStaticMapLink(this.item.lat, this.item.lng, googleMapAPIEndpoint, googleMapAPIKey)
  }
}
</script>

<style>
.address {
  font-size: 0.7rem;
}

h5 {
  color: #33A343;
}

.map {
  cursor: pointer;
}
</style>
