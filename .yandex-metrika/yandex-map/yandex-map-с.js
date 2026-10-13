// yandex-map-rostov.js
document.addEventListener('DOMContentLoaded', function() {
    if (typeof ymaps === 'undefined') {
        console.error('Yandex Maps API not loaded');
        return;
    }

    ymaps.ready(function() {
        console.log('Yandex Maps ready');
        
        const shopCoords = [47.237151, 39.740742];
        
        const myMap = new ymaps.Map('gmap', {
            center: shopCoords,
            zoom: 17, // Увеличил zoom
            controls: ['zoomControl', 'searchControl'] // Добавил поиск
        });

        console.log('Map created');

        // Яркая заметная метка
        const placemark = new ymaps.Placemark(shopCoords, {
            balloonContentHeader: '<strong>🚗 Золотая Подкова</strong>',
            balloonContentBody: 'г. Ростов-на-Дону, пл. Энергетиков<br>рынок "Рубин"',
            hintContent: 'Золотая Подкова - шиномонтаж'
        }, {
            preset: 'islands#redStretchyIcon', // Яркая красная метка
            iconColor: '#ff0000' // Красный цвет
        });

        myMap.geoObjects.add(placemark);
        console.log('Placemark added');

        // Центрируем карту на метке
        myMap.setCenter(shopCoords);
        
        // Открываем балун сразу
        setTimeout(() => {
            placemark.balloon.open();
            console.log('Balloon opened');
        }, 1500);

        // Добавляем обработчик клика на метку
        placemark.events.add('click', function() {
            console.log('Placemark clicked');
        });
    });
});
