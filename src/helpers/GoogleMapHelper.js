export const generateStaticMapLink = (lat, lng, API_endpoint , API_key, width = "300", height = "200", zoom = "18", format = "png") => {
    const center = lat.toString() + "," + lng.toString();
    return `${API_endpoint}?center=${center}&zoom=${zoom}&format=${format}&visual_refresh=true&maptype=roadmap&markers=color:blue&size=${width}x${height}&key=${API_key}&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C${center}`;
}

// Load google or gaode map
// showCarouselWithMap: function(data, display_type) {
//     this.data = data;
//     this.display_type = display_type;
//     var scriptTag = document.createElement("script");
//     scriptTag.type = "text/javascript";
//     scriptTag.src = "https://maps.googleapis.com/maps/api/js?v=3.6&language=" + siteUI.currentLanguage + "&client=gme-hsbc&callback=conversationPanelUI.showCarousel";
//     document.body.appendChild(scriptTag);
//     this.map = 'google';
//     this.googleMapTimeout = window.setTimeout(function() {
//     var scriptTag = document.createElement("script");
//     scriptTag.type = "text/javascript";
//     scriptTag.setAttribute('crossorigin', 'anonymous');
//     scriptTag.src = "https://webapi.amap.com/maps?v=1.4.14&key=02e457cacd27094a9dc91ee964ac2e0a&callback=conversationPanelUI.showCarousel";
//     document.body.appendChild(scriptTag);
//     self.map = 'amap';
//     }, 5 * 1000);
//     this.mapLoaded = true;
// }

// if (c.siteMapObj && c.siteAddress) {
//     var address = c.siteAddress.replace(/#br#/g,'<br>');
//     var temp = address.split('<br>');
//     var clipboardText = '';
//     clipboardText = temp[temp.length-1].replace(/\(設有語音導航自動櫃員機\)|\(设有语音导航自动柜员机\)|\(With Voice Navigation ATM\|\(設有外幣提款機\)|\(设有外币提款机\)|\(With Foreign Currency ATM\)/g,'');
//     var location = {lat: parseFloat(c.siteMapObj.lat), lng: parseFloat(c.siteMapObj.lng)};
//     if (self.mapLoaded && self.map === 'google') {
//       var map = new google.maps.Map(
//         $(".owl-carousel:last #carouselItem" + c.id + 'img')[0], {
//           zoom: 18,
//           center: location,
//           gestureHandling: 'none',
//           zoomControl: false,
//           disableDefaultUI: true,
//           draggableCursor: 'pointer'
//         });

//       var marker = new google.maps.Marker({
//         position: location,
//         map: map,
//         icon: {
//           url: 'https://www.hangseng.com/etc/designs/hase/clientlib-branchLocator/images/haseicon.png'
//         }
//       });
//       map.addListener('click', function() {
//         overlayUI.showThirdPartyLinkPopUp(address.replace(/'/g, "\\'").replace(/^\s+|\s+$/g, ''), 'https://www.google.com/maps/search/?api=1&query=' + c.siteMapObj.lat + ',' + c.siteMapObj.lng)
//       });
//     } else if (self.mapLoaded && self.map === 'amap') {
//       AMap.convertFrom([location.lng, location.lat], 'gps', function(status, result) {
//         if (result.info !== 'ok') {
//           $(".owl-carousel:last #carouselItem" + c.id + 'img').remove();
//           console.error('AMap cannot convert coordinate');
//           console.error('AMAP status: ' + status);
//           console.error('AMap result: ' + JSON.stringify(result));
//           return;
//         }
//         var aMapLocation = result.locations[0];
//         var map = new AMap.Map(
//           $(".owl-carousel:last #carouselItem" + c.id + 'img')[0],
//           {
//             zoom: 18,
//             center: aMapLocation,
//             gestureHandling: 'none',
//             zoomEnable: false,
//             dragEnable: false,
//             defaultCursor: 'pointer',
//             lang: siteUI.currentLanguage === 'en-US' ? 'en' : 'zh_cn'
//           }
//         );

//         var aMapIcon = new AMap.Icon({
//           size: new AMap.Size(25, 40),
//           image: 'https://www.hangseng.com/etc/designs/hase/clientlib-branchLocator/images/haseicon.png',
//           imageSize: new AMap.Size(25, 40)
//         });

//         var marker = new AMap.Marker({
//           position: aMapLocation,
//           icon: aMapIcon,
//           offset: new AMap.Pixel(-13, -50)
//         });
//         map.add(marker);
//         map.on('click', function() {
//           overlayUI.showThirdPartyLinkPopUp(address.replace(/'/g, "\\'").replace(/^\s+|\s+$/g, ''), 'https://uri.amap.com/marker?position=' + aMapLocation.lng + ',' + aMapLocation.lat + '&name=' + (c.siteName ? c.siteName : ''));
//         });
//       });
//     } else {
//       $(".owl-carousel:last #carouselItem" + c.id + 'img').remove();
//     }
// }