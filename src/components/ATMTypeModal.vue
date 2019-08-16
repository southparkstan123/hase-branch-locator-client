<template>
    <b-modal 
        no-close-on-esc 
        no-close-on-backdrop 
        hide-header-close 
        hide-footer 
        centered 
        :visible="show === true" 
        size="lg" 
        scrollable
    >
        <template slot="modal-header">
            <h4>{{ this.$i18n.t('branchLocator.typeModal.header') }} <font-awesome-icon id="print" icon="print" @click="toPrinter"/></h4>
            <font-awesome-icon class="close-button" icon="times" @click="close"/>
        </template>
        <template slot="default">
            <div class="d-block float-left">
                <p>{{ this.$i18n.t('branchLocator.typeModal.content') }}</p>
                <b-table fixed small :items="items" :fields="fields">
                    <template slot="HEAD_text">
                        {{ this.$i18n.t('branchLocator.typeModal.currencies') }}
                    </template>
                    <template slot="HEAD_8notes">
                        {{ this.$i18n.t('branchLocator.typeModal.8notes') }}
                    </template>
                    <template slot="HEAD_12notes">
                        {{ this.$i18n.t('branchLocator.typeModal.12notes') }}
                    </template>
                    <template slot="text" slot-scope="data">
                        {{ data.item | customLabel }}
                    </template>
                    <template slot="8notes" slot-scope="data">
                        <font-awesome-icon v-if="data.value === 'true'" icon="check"/>
                    </template>
                    <template slot="12notes" slot-scope="data">
                        <font-awesome-icon v-if="data.value === 'true'" icon="check"/>
                    </template>
                </b-table>
            </div>
        </template>
    </b-modal>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            show: "ATMTypeModal/isShowATMTypeModal",
            items: "ATMTypeModal/getList"
        })
    },
    data() {
      return {
        fields: {
            'text': {
                label: this.$i18n.t('branchLocator.typeModal.currencies'),
                sortable: false
            },
            '8notes': {
                label: this.$i18n.t('branchLocator.typeModal.8notes'),
                sortable: false
            },
            '12notes': {
                label: this.$i18n.t('branchLocator.typeModal.12notes'),
                sortable: false
            }
        }
      }
    },
    methods: {
        close(){
            this.$store.dispatch('ATMTypeModal/close', {root: true})
        },
        toPrinter(){
            window.print();
        }
    },
    filters: {
        customLabel(obj) {
            return  `${obj.text} - ${obj.value}`;
        },
    }
}
</script>
    
<style>
    #print {
        color: #34a344;
        cursor: pointer;
    }
    .close-button {
        cursor: pointer;
    }
    .table {
        font-size: 0.8em;
        border-spacing: 2px;
        border-collapse: separate;
        text-align: left;
    }
    .table thead th {
        color: white;
        background-color: #34a344;
    }
    .table tbody tr:nth-of-type(odd){
        background-color: #E9F0E9;
    }
    .table tbody tr:nth-of-type(even){
        background-color: #CDDFCF;
    }
</style>
