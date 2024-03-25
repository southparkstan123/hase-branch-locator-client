export default {
  "branchLocator": {
    "webform": {
      "yes": "是",
      "no": "否",
      "cancel": "取消",
      "submit": "提交",
      "displayHead": "分行及自助理财中心地址",
      "output": "请填写以下表格：",
      "hints": "溫馨小提示",
      "areas": "区域：",
      "areasOptions": "[{\"text\":\"香港岛\",\"value\":\"Hong Kong Island\"},{\"text\":\"九龙西\",\"value\":\"Kowloon West\"},{\"text\":\"九龙东\",\"value\":\"Kowloon East\"},{\"text\":\"新界西\",\"value\":\"New Territories West\"},{\"text\":\"新界东\",\"value\":\"New Territories East\"}]",
      "districts": "地区：",
      "districtsAll": "[\"Hong Kong Island\",\"Kowloon West\",\"Kowloon East\",\"New Territories West\",\"New Territories East\"]",
      "districtsOptions": {
        "hongKongIsland": "[{\"text\":\"中西区\",\"value\":\"Central & Western\"},{\"text\":\"湾仔\",\"value\":\"Wanchai\"},{\"text\":\"东区\",\"value\":\"Eastern\"},{\"text\":\"南区\",\"value\":\"Southern\"}]",
        "kowloonWest": "[{\"text\":\"油尖旺\",\"value\":\"Yau Tsim Mong\"},{\"text\":\"深水埗\",\"value\":\"Sham Shui Po\"},{\"text\":\"九龙城\",\"value\":\"Kowloon City\"}]",
        "kowloonEast": "[{\"text\":\"黄大仙\",\"value\":\"Wong Tai Sin\"},{\"text\":\"观塘\",\"value\":\"Kwun Tong\"}]",
        "newTerritoriesWest": "[{\"text\":\"荃湾\",\"value\":\"Tsuen Wan\"},{\"text\":\"屯门\",\"value\":\"Tuen Mun\"},{\"text\":\"元朗\",\"value\":\"Yuen Long\"},{\"text\":\"葵青\",\"value\":\"Kwai Tsing\"},{\"text\":\"离岛\",\"value\":\"Outlying Islands\"}]",
        "newTerritoriesEast": "[{\"text\":\"北区\",\"value\":\"North\"},{\"text\":\"大埔\",\"value\":\"Tai Po\"},{\"text\":\"沙田\",\"value\":\"Shatin\"},{\"text\":\"西贡\",\"value\":\"Sai Kung\"}]"
      },
      "branch": "分行及自助理财中心",
      "address": "地址",
      "specificServicesSymbol": "特定服务图示",
      "securitiesLong": "证券服务",
      "securities": "SEC",
      "safeboxLong": "保管箱服务",
      "safebox": "SDB",
      "currenciesEmpty": "请选择货币",
      "areasEmpty": "请选择区域",
      "serviceTypesEmpty": "请选择服务类型",
      "pleaseSelect": "请选择",
      "serviceTypes": "服务类型：",
      "serviceTypesOptions": "[{\"text\":\"分行\",\"value\":\"Branches\"},{\"text\":\"外币及人民币自动柜员机\",\"value\":\"FOREX\"}]",
      "currencies": "货币：",
      "currenciesOptions": "[{\"text\":\"澳元\",\"value\":\"AUD\",\"8notes\":\"true\",\"12notes\":\"true\"},{\"text\":\"加元\",\"value\":\"CAD\",\"8notes\":\"true\",\"12notes\":\"true\"},{\"text\":\"瑞士法郎\",\"value\":\"CHF\",\"8notes\":\"false\",\"12notes\":\"true\"},{\"text\":\"欧罗 \",\"value\":\"EUR\",\"8notes\":\"true\",\"12notes\":\"true\"},{\"text\":\"英镑\",\"value\":\"GBP\",\"8notes\":\"true\",\"12notes\":\"true\"},{\"text\":\"日圆\",\"value\":\"JPY\",\"8notes\":\"true\",\"12notes\":\"true\"},{\"text\":\"韩元\",\"value\":\"KRW\",\"8notes\":\"false\",\"12notes\":\"true\"},{\"text\":\"新西兰元\",\"value\":\"NZD\",\"8notes\":\"false\",\"12notes\":\"true\"},{\"text\":\"人民币\",\"value\":\"RMB\",\"8notes\":\"true\",\"12notes\":\"true\"},{\"text\":\"新加坡元\",\"value\":\"SGD\",\"8notes\":\"false\",\"12notes\":\"true\"},{\"text\":\"泰铢\",\"value\":\"THB\",\"8notes\":\"true\",\"12notes\":\"true\"},{\"text\":\"新台币\",\"value\":\"TWD\",\"8notes\":\"true\",\"12notes\":\"true\"},{\"text\":\"美元\",\"value\":\"USD\",\"8notes\":\"true\",\"12notes\":\"true\"}]"
    },
    "confirmSubmit": {
      "branchOutput": "以下为恒生分行及自助理财中心地址于<b style='color:#33A343;'>{districts}区</b>的位置： ",
      "forexOutputWithDistrict": "以下为恒生外币及人民币自动柜员机于<b style='color:#33A343;'>{districts}区</b>的位置：",
      "forexNoResultWithDistrict": "你所选取的地区并没有提供此外币提款机服务，请亲临分行进行兑换。<br>以下为恒生分行及自助理财中心于<b style='color:#33A343;'>{districts}区</b>的位置：",
      "forexNoResultWithDistrict1": "<b style='color:#33A343;'>{districts}区</b>快将提供<b>{listOfCurrencies}</b>的外币提款机服务，现在你亦可亲临分行提取相关外币。<br>以下为恒生分行及自助理财中心于<b style='color:#33A343;'>{districts}区</b>的位置：",     
      "forexNoResultWithDistrict2": "<b style='color:#33A343;'>{districts}区</b>目前只能提供<b>{supportedCurrencies}</b>外币提款机服务，尚未提供<b>{nonSupportedCurrencies}</b>外币提款机服务，但你亦可亲临分行提取相关外币。<br>以下为恒生分行及自助理财中心于<b style='color:#33A343;'>{districts}区</b>的位置：", 
      "forexNoResultWithDistrict3": "<b style='color:#33A343;'>{districts}区</b>快将提供外币提款机服务，现在你亦可亲临分行提取相关外币。<br>以下为恒生分行及自助理财中心于<b style='color:#33A343;'>{districts}区</b>的位置：",
      "forexNoResultWithDistrict4": "以下为提供<b>{supportedCurrencies}</b>的恒生外币及人民币自动柜员机于<b style='color:#33A343;'>{districts}区</b>的位置：",
      "branchNoResult": "你所选取的地区并没有提供此项服务。你可尝试其他地区。",
      "learnMore": "了解更多",
      "modify": "更改区域及地区",
      "actionBtn": {
        "label": "服务时间",
        "link": "https://www.hangseng.com/en-hk/contact-us/branch-addresses/"
      }
    },
    "result": {
      "serviceDetails": "服务详情",
      "serviceInfo": {
        "branch": "分行：",
        "weekdays": "星期一至五",
        "sat": "星期六",
        "sun": "星期日",
        "serviceHour": "服务时间",
        "automatedBankingMachineServiceHours": "自动柜员机服务时间",
        "branchServices": "分行服务",
        "fxAtmServices": "自动柜员机服务"
      }
    },
    "forexMultiSelect": {
      "pleaseSelect": "请选择",
      "selectAll": "选择所有",
      "deselectAll": "取消选择所有",
      "currenciesSelectedAll": "全选",
      "currenciesSelectedAllDefault": "全选（预设）",
      "currenciesSelected": "已选",
      "currenciesCustom":"自订"
    },
    "typeModal": {
      "header": "外币提款机提供外币种类",
      "content": "恒生外币提款机的外币提取服务多达12种外币。部分服务地点只提供8种外币的现钞提款服务。",
      "currencies": "货币",
      "8notes": "8种外币",
      "12notes": "12种外币",
      "print": "列印"
    }
  }
}