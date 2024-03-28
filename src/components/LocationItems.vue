<template>
  <div>
    <div v-if="items && items.length > 0 && isLoading === false">
      <article class="my-3">
        <p v-html="message.message"></p>
      </article>
      <b-container>
        <carousel :responsive="{
          0: { items: 1, nav: false, dots: true },
          768: { items: 2, nav: false, dots: true },
          992: { items: 3, nav: false, dots: true }
        }">
          <location-item v-max-height ref="locationItems" v-bind:key="index" v-for="(item, index) in items" :item="item" />
        </carousel>
        <div class="m-3">
          <b-button pill variant="success" @click="resetItems">{{ $t("branchLocator.confirmSubmit.modify") }}</b-button>
        </div>
      </b-container>
    </div>
    <div class="text-center" v-else-if="isLoading === true">
      <b-spinner class="m-5" variant="success" label="Spinning"></b-spinner>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'
import Carousel from 'vue-owl-carousel';
import LocationItem from './LocationItem';
import { setTimeout } from 'timers';
import left from "../assets/Arrow-Left-icon.png";
import right from "../assets/Arrow-Right-icon.png";

export default {
  components: {
    'location-item': LocationItem,
    'carousel': Carousel
  },
  data() {
    return {
      heightOfCarousel: `fit-content`,
      left: left,
      right: right
    }
  },
  computed: {
    ...mapGetters({
      items: 'branchLocation/getLocationItems',
      isLoading: 'branchLocation/getLoadingState',
      message: 'branchLocation/getMessage'
    })
  },
  methods: {
    resetItems() {
      this.$store.dispatch('branchLocation/resetItems', { root: true });
    },
  },
  directives: {
    maxHeight: {
      bind: function (el) {
        let maxHeight = el.clientHeight;

        setTimeout(() => {
          const body = document.getElementsByClassName('location-content');

          if (body) {
            _.forEach(body, (element) => {
              element.style.minHeight = `fit-content`;
              if (element.clientHeight > maxHeight) {
                maxHeight = element.clientHeight
              }
            });

            _.forEach(body, (element) => {
              element.style.minHeight = `fit-content`;
              element.style.minHeight = `${maxHeight}px`;
            });
          }
        }, 0)
      }
    }
  }
}
</script>

<style>
.arrow {
    width: 100px;
    height: 20vh;
}
</style>
