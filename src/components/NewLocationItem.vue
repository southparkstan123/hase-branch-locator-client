<template>
  <b-list-group-item>
    <b-row>
      <b-col lg="5">
        <div class="d-flex justify-content-between align-items-center">
          <l-map style="width: 320px; height: 240px" :zoom="17" :center="location">
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
        </div>
      </b-col>
      <b-col lg="7">
        <b-card-body :title="item.siteName">
          <b-card-text v-html="toHtml(item.siteAddress)"></b-card-text>
          <b-button variant="outline-success" class="text-center" @click="openServiceDetailsModal">
            <font-awesome-icon icon="lightbulb"></font-awesome-icon> {{ $t("branchLocator.result.serviceDetails") }}
          </b-button>
        </b-card-body>
      </b-col>
    </b-row>
  </b-list-group-item>
</template>

<script>
import { generateHtmlForContent } from "../helpers/HTMLHelper"

export default {
  data() {
    return {
      staticMapLink: '',
      attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
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
        siteFXATMServices: this.item.siteFXATMServices,
        siteLocation: this.location
      }
      this.$store.dispatch('serviceDetailsModal/open', payload, { root: true })
    },
    toGoogleMapPage() {
      window.open('https://www.google.com/maps/search/?api=1&query=' + this.item.lat + ',' + this.item.lng, '_blank')
    }
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

.list-item {
  display: inline-block;
  margin-right: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all 3s ease 3s;
}

.list-enter,
.list-leave-to

/* .list-leave-active below version 2.1.8 */
  {
  opacity: 0;
  transform: translateY(30%);
}
</style>
