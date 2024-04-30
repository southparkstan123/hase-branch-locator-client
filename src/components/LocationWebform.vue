<template>
  <div>
    <h4>
      {{ $t("branchLocator.webform.output") }}
      <b-button variant="link" class="p-0" size="lg" v-b-tooltip.hover="{
        title: $t('branchLocator.webform.hints'),
        placement: 'right'
      }">
        <font-awesome-icon class="info" icon="info-circle" @click="openATMTypeModal" />
      </b-button>
      <b-button variant="link" class="p-0" size="lg" v-b-tooltip.hover="{
        title: $t('branchLocator.webform.exchangeRate'),
        placement: 'right'
      }">
        <font-awesome-icon class="currency" icon="funnel-dollar" @click="openExchangeRateModal"/>
      </b-button>
    </h4>
    <b-form @submit="onSubmit">
      <b-form-group>
        <label class="mr-sm-2" for="inline-form-custom-select-pref">{{ $t("branchLocator.webform.serviceTypes")
          }}</label>
        <multiselect v-model="form.serviceType" track-by="value" label="text"
          :options="JSON.parse(this.$i18n.t('branchLocator.webform.serviceTypesOptions'))" :searchable="false"
          :placeholder="this.$i18n.t('branchLocator.webform.pleaseSelect')" :allow-empty="false"
          @input="toggleCurrenciesDropdown" selectLabel="" deselect-label="" :disabled="isLoading === true"></multiselect>
      </b-form-group>
      <b-form-group v-if="showCurrenciesDropdown">
        <label class="mr-sm-2" for="inline-form-custom-select-pref">{{ $t("branchLocator.webform.currencies") }}</label>
        <multiselect v-model="form.currencies" :multiple="true" :options="[{
        group: this.$i18n.t('branchLocator.forexMultiSelect.currenciesSelectedAll'),
        selections: JSON.parse(this.$i18n.t('branchLocator.webform.currenciesOptions'))
      }]" :placeholder="this.$i18n.t('branchLocator.forexMultiSelect.pleaseSelect')" label="text" track-by="value"
          :close-on-select="false" :clear-on-select="false" :preserve-search="true" :custom-label="customLabel"
          group-values="selections" group-label="group" :group-select="true" :taggable="false" :showNoResults="true"
          :selectedLabel="this.$i18n.t('branchLocator.forexMultiSelect.currenciesSelected')" selectGroupLabel=""
          selectLabel="" deselectLabel="" deselectGroupLabel="" :disabled="isLoading === true">
          <template slot="selection" slot-scope="{ values, search, option, isOpen }">
            <span class="multiselect__single" v-if="values.length >= 3 && values.length < 13 &amp;&amp; !isOpen">{{
        $t("branchLocator.forexMultiSelect.currenciesCustom") }}</span>
            <span class="multiselect__single" v-else-if="values.length === 13 &amp;&amp; !isOpen">{{
        $t("branchLocator.forexMultiSelect.currenciesSelectedAll") }}</span>
            <span slot="options" v-else-if="values.length > 0 && values.length < 3 &amp;&amp; !isOpen">
              {{ values.map(obj => (currentLanguage.value === 'en-US') ? obj.value :
        obj.text).join((currentLanguage.value === 'en-US') ? ', ' : '、') }}</span>
            <span slot="noResult"></span>
          </template>
        </multiselect>
      </b-form-group>
      <b-form-group>
        <label class="mr-sm-2" for="inline-form-custom-select-pref">{{ $t("branchLocator.webform.areas") }}</label>
        <multiselect v-model="form.areas" track-by="value" label="text"
          :options="JSON.parse(this.$i18n.t('branchLocator.webform.areasOptions'))" :searchable="false"
          :allow-empty="false" @input="toggleSubDistrictsDropdown"
          :placeholder="this.$i18n.t('branchLocator.webform.pleaseSelect')" selectLabel="" deselect-label="" :disabled="isLoading === true">
        </multiselect>
      </b-form-group>
      <b-form-group v-if="showSubDistrictsDropdown">
        <label class="mr-sm-2" for="inline-form-custom-select-pref">{{ $t("branchLocator.webform.districts") }}</label>
        <multiselect v-model="form.districts" track-by="value" label="text" :options="selectedDistricts"
          :searchable="false" :allow-empty="false" :placeholder="this.$i18n.t('branchLocator.webform.pleaseSelect')"
          selectLabel="" deselect-label="" :disabled="isLoading === true"></multiselect>
      </b-form-group>

      <div class="text-center" v-if="isLoading === true">
        <b-spinner class="m-5" variant="success" label="Spinning"></b-spinner>
      </div>
      <div v-else>
        <b-button class="mx-1" variant="secondary" type="button" @click="onReset">{{
          this.$i18n.t('branchLocator.webform.cancel') }}</b-button>
        <b-button class="mx-1" variant="success" type="submit">{{
          this.$i18n.t('branchLocator.webform.submit') }}</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import * as _ from "lodash";
import { mapGetters } from "vuex";
import { mapLanguage } from "../helpers/LanguageHelper";

export default {
  data() {
    return {
      result: {},
      form: {
        serviceType: '',
        currencies: [],
        areas: null,
        districts: null
      },
      showSubDistrictsDropdown: false,
      showCurrenciesDropdown: false,
      selectedDistricts: [],

      showErrorForCurrencies: false,
      showErrorForAreas: false,
    };
  },
  methods: {
    onReset() {
      this.form.areas = "";
      this.form.districts = "";
      this.form.currencies = [];
      this.form.serviceType = "";
      this.showCurrenciesDropdown = false;
      this.showSubDistrictsDropdown = false;
    },
    onSubmit(e) {
      e.preventDefault();
      let output = {};
      const { serviceType, areas, currencies, districts } = this.form;

      const isFormValidated = () => {
        if (serviceType.value === "FOREX") {
          return !_.isEmpty(serviceType) && !_.isEmpty(areas) && !_.isEmpty(districts) && currencies.length > 0;
        } else {
          return !_.isEmpty(serviceType) && !_.isEmpty(areas) && !_.isEmpty(districts);
        }
      }

      const lang = mapLanguage(this.currentLanguage.value);

      if (isFormValidated()) {
        if (serviceType.value === "Branches") {
          output = {
            ATMTypes: serviceType.value,
            areas: areas.value,
            districts: districts.value,
            lang
          };
        } else {
          output = {
            ATMTypes: serviceType.value,
            currencies: currencies.map(currency => currency.value),
            areas: areas.value,
            districts: districts.value,
            lang
          };
        }
        this.$store.dispatch('branchLocation/getBranchesOrATMLocationByDistrict', output, { root: true });
      } else {
        let errorObject = [];
        if (_.isEmpty(serviceType)) {
          errorObject.push(this.$i18n.t('branchLocator.webform.serviceTypesEmpty'))
        }
        if (serviceType.value === "FOREX" && currencies.length === 0) {
          errorObject.push(this.$i18n.t('branchLocator.webform.currenciesEmpty'))
        }
        if (_.isEmpty(areas)) {
          errorObject.push(this.$i18n.t('branchLocator.webform.areasEmpty'))
        }
        this.$store.dispatch('message/setMessage', { type: 'error', message: errorObject.join("<br>") }, { root: true });
      }
    },
    toggleCurrenciesDropdown() {
      if (this.form.serviceType.value === "FOREX") {
        this.showCurrenciesDropdown = true;
      } else {
        this.showCurrenciesDropdown = false;
      }
      this.form.currencies = [];
    },
    toggleSubDistrictsDropdown() {
      if (this.form.areas !== null) {
        this.showSubDistrictsDropdown = true;
        const index = _.camelCase(this.form.areas.value);
        this.selectedDistricts = JSON.parse(this.$i18n.t(`branchLocator.webform.districtsOptions.${index}`));
        this.form.districts = _.chain(this.selectedDistricts)
          .head()
          .value();
      } else {
        this.showSubDistrictsDropdown = false;
        this.selectedDistricts = [];
        this.form.districts = null;
      }
    },
    customLabel(obj) {
      return (obj.value === 'all') ? obj.text : ((this.$i18n.lang === 'en-US') ? `${obj.text}(${obj.value})` : `${obj.text}（${obj.value}）`);
    },
    openATMTypeModal() {
      this.$store.dispatch('ATMTypeModal/open', JSON.parse(this.$i18n.t('branchLocator.webform.currenciesOptions')), { root: true })
    },
    openExchangeRateModal() {
      this.$store.dispatch('exchangeRateModal/open', { root: true })
    }
  },
  computed: {
    ...mapGetters({
      currentLanguage: 'siteConfig/getCurrentLanguage',
      isLoading: 'branchLocation/getLoadingState'
    }),
    isAreaValidated() {
      return this.form.areas !== null;
    },
    isCurrenciesValidated() {
      return this.form.currencies.length > 0;
    }
  },
  mounted() {
    this.toggleCurrenciesDropdown();
    this.toggleSubDistrictsDropdown();
  },
  watch: {
    currentLanguage(newLang, oldLang) {
      if (oldLang.value !== newLang.value) {
        this.onReset()
      }
    }
  }
};
</script>

<style>
span.error {
  color: red;
}

.info {
  color: #33A343;
}

.currency {
  color: #545b62;
}
</style>
