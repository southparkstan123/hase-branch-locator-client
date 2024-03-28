import _ from 'lodash';
import { i18n } from '../main';

export const outputMessageForResult = (messageObj) => {
  const { messageType, districts, supportedCurrencies, nonSupportedCurrencies } = messageObj
    
  switch(messageType) {
  case 'branchOutput':
    return {
      type: "success",
      message: i18n.t('branchLocator.confirmSubmit.branchOutput', { districts })
    }
  case 'forexNoResultWithDistrict1':
    return {
      type: "warning",
      message: i18n.t('branchLocator.confirmSubmit.forexNoResultWithDistrict1', { 
        districts, 
        listOfCurrencies: displayAvailableCurrencies(supportedCurrencies) 
      })
    }
  case 'forexNoResultWithDistrict2':
    return {
      type: "warning",
      message: i18n.t('branchLocator.confirmSubmit.forexNoResultWithDistrict2', { 
        districts, 
        supportedCurrencies: displayAvailableCurrencies(supportedCurrencies), 
        nonSupportedCurrencies: displayAvailableCurrencies(nonSupportedCurrencies) 
      })
    }
  case 'forexNoResultWithDistrict3':
    return {
      type: "warning",
      message: i18n.t('branchLocator.confirmSubmit.forexNoResultWithDistrict3', { 
        districts 
      })
    }
  case 'forexNoResultWithDistrict4':
    return {
      type: "success",
      message: i18n.t('branchLocator.confirmSubmit.forexNoResultWithDistrict4', { 
        districts, 
        supportedCurrencies: displayAvailableCurrencies(supportedCurrencies) 
      })
    }
  default:
    return {
      type: "warning",
      message: i18n.t('branchLocator.confirmSubmit.branchNoResult')
    }
  }
}

export const unauthorizedAPI = () => {
  return {
    type: "error",
    message: i18n.t('branchLocator.webform.unauthorizedAPI')
  }
}

export const displayAvailableCurrencies = (currencies) => {
  const allCurrencies = JSON.parse(i18n.t('branchLocator.webform.currenciesOptions'))
  let availableCurrencies = [];

  _.forEach(allCurrencies, (item) => {
    if(currencies.indexOf(item.value) !== -1){
      availableCurrencies.push(item)
    }
  })

  return _.chain(availableCurrencies)
    .map(currency => (i18n.locale === 'en-US') ? currency.value : currency.text)
    .join((i18n.locale === 'en-US') ? ", " : "、")
    .value();
}