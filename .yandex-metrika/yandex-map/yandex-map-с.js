// yandex-map-rostov.js
document.addEventListener('DOMContentLoaded',function(){
    if (typeof ymaps === 'undefined'){console.error('Yandex Maps API not loaded');return;}


    ymaps.ready(function(){console.log('Yandex Maps ready');
        
        const shopCoords = [47.237151,39.740742];
        const myMap = new ymaps.Map('gmap',{center: shopCoords, zoom: 17, controls: ['zoomControl','searchControl']
        });console.log('Map created');
        const placemark = new ymaps.Placemark(shopCoords,{
            balloonContentHeader: '<strong>🚗 Золотая Подкова</strong>', balloonContentBody: 'г. Ростов-на-Дону, пл. Энергетиков<br>рынок "Рубин"', hintContent: 'Золотая Подкова - шиномонтаж'
        },{ preset: 'islands#redStretchyIcon', iconColor: '#ff0000' });


        myMap.geoObjects.add(placemark); console.log('Placemark added');
        myMap.setCenter(shopCoords);


        setTimeout(() =>{placemark.balloon.open();console.log('Balloon opened');
        },1500);
        placemark.events.add('click', function(){console.log('Placemark clicked');
        });
    });
});
