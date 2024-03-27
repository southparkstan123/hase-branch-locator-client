<template>
  <b-card no-body tag="article" style="height: 100%" class="card mb-2 ml-1 mr-1 mt-2">
    <l-map v-if="showMap" style="height: 240px;align-items: center;" :zoom="17" :center="location" :options="{zoomControl: false, dragging: false}">
      <l-tile-layer :url="'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'"
        :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="location">
        <l-popup>
          <div>
            {{ item.siteName }}
          </div>
        </l-popup>
      </l-marker>
    </l-map>
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
export default {
  data() {
    return {
      staticMapLink: '',
      attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      showMap: false
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
    }
  },
  mounted() {
    this.showMap = true;
  },
  computed: {
    location: function () {
      return [this.item.lat, this.item.lng]
    }
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
