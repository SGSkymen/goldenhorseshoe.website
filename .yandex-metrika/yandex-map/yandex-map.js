// yandex-map-rostov.js
document.addEventListener('DOMContentLoaded',function(){
    if (typeof ymaps === 'undefined'){console.error('Yandex Maps API not loaded');return;}

    ymaps.ready(function(){console.log('Yandex Maps ready');
        
        const shopCoords = [47.237151,39.740742];
        const myMap = new ymaps.Map('gmap',{center: shopCoords, zoom: 17, controls: ['zoomControl']});
        const placemark = new ymaps.Placemark(shopCoords,{},{
            iconLayout: 'default#image',
            iconImageHref: 'plg/.wp-a/logo/icon-logo-label.png',
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -20]
        }); 
        

        myMap.geoObjects.add(placemark);
    });
});function showAbout(){window.open('https://yandex.ru/maps/?pt=39.740742,47.237151&z=17&l=map','_blank');}
