<template>
    <b-modal no-close-on-esc no-close-on-backdrop hide-header-close hide-header hide-footer centered :visible="modalObj.showServiceDetailsModal === true" id="service-details-modal">
        <div class="d-block float-right">
            <font-awesome-icon class="close-button" icon="times" @click="close"/>
        </div>
        <div class="d-block float-left">
            <h4 class="title">{{ modalObj.siteName }}</h4>
            <p class="my-2" v-html="toHtml(modalObj.siteAddress)"></p>
            <div v-if="!isServiceHourWeekdaysEmpty || !isServiceHourSatEmpty || !isServiceHourSunEmpty">
                <h4 class="title">{{ $t('branchLocator.result.serviceInfo.serviceHour') }}</h4>
                <div class="service-hours-content my-2">
                    <div class="mr-2">
                        {{ $t('branchLocator.result.serviceInfo.branch') }}
                    </div>
                    <div class="mr-2">
                        <div v-if="!isServiceHourWeekdaysEmpty">
                            {{ $t('branchLocator.result.serviceInfo.weekdays') }}
                        </div>
                        <div v-if="!isServiceHourSatEmpty">
                            {{ $t('branchLocator.result.serviceInfo.sat') }}
                        </div>
                        <div v-if="!isServiceHourSunEmpty">
                            {{ $t('branchLocator.result.serviceInfo.sun') }}
                        </div>
                    </div>
                    <div class="mr-2">
                        <div v-if="!isServiceHourWeekdaysEmpty">
                            {{ modalObj.siteServiceHourWeekdays }}
                        </div>
                        <div v-if="!isServiceHourSatEmpty">
                            {{ modalObj.siteServiceHourSat }}
                        </div>
                        <div v-if="!isServiceHourSunEmpty">
                            {{ modalObj.siteServiceHourSun }}
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="!isSiteAMBServiceHourEmpty">
                <h4 class="title">{{ $t('branchLocator.result.serviceInfo.automatedBankingMachineServiceHours') }}</h4>
                <p class="my-2" v-html="toHtml(modalObj.siteAMBServiceHour)"></p>
            </div>
            <div v-if="!isSiteServiceHourRemarkEmpty">
                <h4 class="title">{{ $t('branchLocator.result.serviceInfo.branchServices') }}</h4>
                <p class="my-2" v-html="toHtml(modalObj.siteServiceHourRemark)"></p>
            </div>
            <div v-if="!isFxAtmServicesEmpty">
                <h4 class="title">{{ $t('branchLocator.result.serviceInfo.fxAtmServices') }}</h4>
                <p class="my-2">{{ modalObj.siteFXATMServices }}</p>
            </div>
        </div>
    </b-modal>
</template>

<script>
import { mapGetters } from 'vuex'
import { generateHtmlForContent } from "../helpers/HTMLHelper"

export default {
    props:["text"],
    computed: mapGetters({
        modalObj: 'serviceDetailsModal/getModalObj',
        isServiceHourWeekdaysEmpty: 'serviceDetailsModal/isServiceHourWeekdaysEmpty',
        isServiceHourSatEmpty: 'serviceDetailsModal/isServiceHourSatEmpty',
        isServiceHourSunEmpty: 'serviceDetailsModal/isServiceHourSunEmpty',
        isFxAtmServicesEmpty: 'serviceDetailsModal/isFxAtmServicesEmpty',
        isSiteServiceHourRemarkEmpty: 'serviceDetailsModal/isSiteServiceHourRemarkEmpty',
        isSiteAMBServiceHourEmpty: 'serviceDetailsModal/isSiteAMBServiceHourEmpty'
    }),
    methods: {
        toHtml(val){
            return generateHtmlForContent(val);
        },
        close(){
            this.$store.dispatch('serviceDetailsModal/close', {root: true})
        }
    }
}
</script>

<style>
    .service-hours-content {
        display: flex;
    }
    .title {
        color: #33A343
    }
    .close-button {
        cursor: pointer;
    }
</style>
