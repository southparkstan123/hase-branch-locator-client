<template>
  <b-modal no-close-on-esc no-close-on-backdrop hide-header-close hide-footer centered :visible="show === true"
    size="md" scrollable>
    <template slot="modal-header">
      <h4>{{ this.$i18n.t('branchLocator.exchangeRateModal.header') }}</h4>
      <font-awesome-icon class="close-button" icon="times" @click="close" />
    </template>
    <template slot="default">
      <div class="d-block float-left">
        <b-button variant="link" size="sm" @click="fetchData">
          {{ this.$i18n.t('branchLocator.exchangeRateModal.refresh') }}
        </b-button>
        <b-table fixed small :items="exchangeRates" :fields="fields">
          <template slot="HEAD_currencies">
            {{ this.$i18n.t('branchLocator.exchangeRateModal.currencies') }}
          </template>
          <template slot="HEAD_buyRate">
            {{ this.$i18n.t('branchLocator.exchangeRateModal.buyRate') }}
          </template>
          <template slot="HEAD_sellRate">
            {{ this.$i18n.t('branchLocator.exchangeRateModal.sellRate') }}
          </template>
          <template slot="currencies" slot-scope="data">
             {{ data.item.ccyDisplayCode }}
          </template>
          <template slot="buyRate" slot-scope="data">
            {{ data.item.ttBuyRate }}
          </template>
          <template slot="sellRate" slot-scope="data">
            {{ data.item.ttSellRate }}
          </template>
        </b-table>
        <p class="float-right">{{ this.$i18n.t('branchLocator.exchangeRateModal.lastUpdateTime') }} {{ lastUpdateTime }}</p>
      </div>
    </template>
  </b-modal>
</template>

<script>
import ExchangeRateService from '../services/ExchangeRateServices';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      show: "exchangeRateModal/isShowModal",
    })
  },
  data() {
    return {
      fields: {
        'currencies': {
          label: this.$i18n.t('branchLocator.exchangeRateModal.currencies'),
          sortable: false
        },
        'buyRate': {
          label: this.$i18n.t('branchLocator.exchangeRateModal.buyRate'),
          sortable: false
        },
        'sellRate': {
          label: this.$i18n.t('branchLocator.exchangeRateModal.sellRate'),
          sortable: false
        },
      },
      exchangeRates: [],
      lastUpdateTime: null
    }
  },
  methods: {
    async fetchData() {
      try {
        const result = await ExchangeRateService.getExchangeRate();
        this.exchangeRates = result.fxttExchangeRates;
        this.lastUpdateTime = result.lastUpdateTime;
      } catch (error) {
        this.$store.dispatch('message/setMessage', { type: 'error', message: error.join("<br>") }, { root: true });
      }
    },
    close() {
      this.$store.dispatch('exchangeRateModal/close', { root: true })
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>

<style scoped>

</style>