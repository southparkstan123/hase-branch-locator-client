import _ from 'lodash';

export const mapLanguage = (locale) => {
  const languageList = {
    'en-US': 'EN',
    'zh-HK': 'ZH',
    'zh-CN': 'CN'
  }
  return _.chain(languageList).pick([locale]).values().head().value();
}