if ($('#maparea').length) {
    ymaps.ready(function() {
        let groups = newGeo;
        coordPoints(groups);
    });
};

let coordPoints = (groups) => {
    if ($('#maparea').length) {
        var placemark = [];
        ymaps.ready(function() {

            // Создание экземпляра карты.
            var myMap = new ymaps.Map('maparea', {
                    center: [50.443705, 30.530946],
                    zoom: 9,
                    controls: []
                }),
                // Контейнер для меню.
                menu = $('<div class="delivery-list" id="count"/>');

            for (var i = 0, l = groups.length; i < l; i++) {
                createMenuGroup(groups[i]);
            }

            function createMenuGroup(group) {
                // Пункт меню.
                var menuItem = $('<div class="pointitem"><a href="#"><div class="pointitem-name">' + group.name + ' </div> <div class="pointitem-address">' + group.address + '</div> <div class="pointitem-phone">' + group.phone + '</div> <div class="pointitem-days">' + group.workDays + '</div> <div class="pointitem-times">' + group.workTime + '</div></a></div>'),
                    // Коллекция для геообъектов группы.
                    collection = new ymaps.GeoObjectCollection(null);

                // Добавляем коллекцию на карту.
                myMap.geoObjects.add(collection);
                // Добавляем подменю.
                placemark[i] = new ymaps.Placemark(group.center, {

                    balloonContent: '<div class="balloon-wrp"><span class="title">' + group.organization + ' "' + group.name + '"</span> <span class="blue">Адрес:</span> <span class="address">' + group.address + '</span></div>'
                });
                //console.log(group.organization);
                // Добавляем метку в коллекцию.
                collection.add(placemark[i]);

                // Добавляем пункт в подменю.
                menuItem
                    // Добавляем пункт в меню.
                    .appendTo(menu)

                    //по клику открывается балун и перемещается карта, центр координаты метки
                    .find('a')

                    .bind('click', function() {
                        $(this).parent('.pointitem').toggleClass('active')
                        $(this).parent('.pointitem').siblings('.pointitem').removeClass('active')
                        var id = $(this).parent('.pointitem').index()

                        if ($(this).parent('.pointitem').hasClass('active')) {
                            myMap.panTo(placemark[id].geometry.getCoordinates(), {
                                delay: 0,
                                duration: 1000,
                            }).then(function() {
                                myMap.setZoom(14),
                                    placemark[id].balloon.open();
                            });

                        } else {
                            myMap.panTo(placemark[id].geometry.getCoordinates(), {
                                delay: 0,
                                duration: 1000,
                            }).then(function() {
                                myMap.setBounds(myMap.geoObjects.getBounds());
                                placemark[id].balloon.close();
                            });
                        }
                        return false;
                    });
            }
            myMap.geoObjects.events.add('click', function(e) {
                var coords = e.get('target');
                var coordsss = coords.placemark;
                console.log(coords);
                console.log(coordsss);
            });

            myMap.geoObjects.options.set('preset', {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'assets/images/mark.svg',
                iconImageSize: [96, 96],
                iconImageOffset: [-43, -90],
            });
            // Добавляем меню в тэг BODY.

            $(".delivery-maps_block-inner").prepend(menu);

            // Выставляем масштаб карты чтобы были видны все группы.
            myMap.setBounds(myMap.geoObjects.getBounds());
        });

    }
}

var newGeo = [

    { organization: "Название", name: "Название", address: "Москва, ул. Автозаводская, 23, корп.2", phone: "+7 (000) 000 00-00", workDays: "Ежедневно", workTime: "09:00 – 21:00", center: [55.831903, 37.411961] },
    { organization: "Название", name: "Название", address: "Москва, ул. Автозаводская, 23, корп.2", phone: "+7 (000) 000 00-00", workDays: "Ежедневно", workTime: "09:00 – 21:00", center: [55.858585, 37.48498] },
    { organization: "Название", name: "Название", address: "Москва, ул. Автозаводская, 23, корп.2", phone: "+7 (000) 000 00-00", workDays: "Ежедневно", workTime: "09:00 – 21:00", center: [55.844708, 37.74887] },
    { organization: "Название", name: "Название", address: "Москва, ул. Автозаводская, 23, корп.2", phone: "+7 (000) 000 00-00", workDays: "Ежедневно", workTime: "09:00 – 21:00", center: [55.616448, 37.452759] },
    { organization: "Название", name: "Название", address: "Москва, ул. Автозаводская, 23, корп.2", phone: "+7 (000) 000 00-00", workDays: "Ежедневно", workTime: "09:00 – 21:00", center: [55.691046, 37.711026] },
    { organization: "Название", name: "Название", address: "Москва, ул. Автозаводская, 23, корп.2", phone: "+7 (000) 000 00-00", workDays: "Ежедневно", workTime: "09:00 – 21:00", center: [55.871539, 37.630223] },
    { organization: "Название", name: "Название", address: "Москва, ул. Автозаводская, 23, корп.2", phone: "+7 (000) 000 00-00", workDays: "Ежедневно", workTime: "09:00 – 21:00", center: [55.83866, 37.712326] },
    { organization: "Название", name: "Название", address: "Москва, ул. Автозаводская, 23, корп.2", phone: "+7 (000) 000 00-00", workDays: "Ежедневно", workTime: "09:00 – 21:00", center: [55.662903, 37.702087] },
    { organization: "Название", name: "Название", address: "Москва, ул. Автозаводская, 23, корп.2", phone: "+7 (000) 000 00-00", workDays: "Ежедневно", workTime: "09:00 – 21:00", center: [55.843363, 37.778445] },
    { organization: "Название", name: "Название", address: "Москва, ул. Автозаводская, 23, корп.2", phone: "+7 (000) 000 00-00", workDays: "Ежедневно", workTime: "09:00 – 21:00", center: [55.681006, 37.605126] },
    { organization: "Название", name: "Название", address: "Москва, ул. Автозаводская, 23, корп.2", phone: "+7 (000) 000 00-00", workDays: "Ежедневно", workTime: "09:00 – 21:00", center: [55.679195, 37.600961] },
    { organization: "Название", name: "Название", address: "Москва, ул. Автозаводская, 23, корп.2", phone: "+7 (000) 000 00-00", workDays: "Ежедневно", workTime: "09:00 – 21:00", center: [55.816515, 37.597163] },
    { organization: "Название", name: "Название", address: "Москва, ул. Автозаводская, 23, корп.2", phone: "+7 (000) 000 00-00", workDays: "Ежедневно", workTime: "09:00 – 21:00", center: [55.751841, 37.404853] },
    { organization: "Название", name: "Название", address: "Москва, ул. Автозаводская, 23, корп.2", phone: "+7 (000) 000 00-00", workDays: "Ежедневно", workTime: "09:00 – 21:00", center: [55.77597, 37.5129] },
    { organization: "Название", name: "Название", address: "Москва, ул. Автозаводская, 23, корп.2", phone: "+7 (000) 000 00-00", workDays: "Ежедневно", workTime: "09:00 – 21:00", center: [55.6338, 37.564769] }
]
var newGeoCities = [

    { name: "Москва", center: [55.831903, 37.411961] },
    { name: "Санкт-Петербург", center: [55.831903, 37.411961] },
    { name: "Орехово-Зуево", center: [55.831903, 37.411961] },
    { name: "Воронеж", center: [55.831903, 37.411961] },
    { name: "Екатеринбург", center: [55.831903, 37.411961] },
]
var swiper = new Swiper('.swiper-container.main-swiper', {
    slidesPerView: 1,
    loop: false,
    allowTouchMove: false,
    navigation: {
        nextEl: '.main-swiper .swiper-button-next',
        prevEl: '.main-swiper .swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: function(number) {
            if (number < 10) {
                number = number;
            }
            return number;
        },
        formatFractionTotal: function(number) {
            if (number < 10) {
                number = number;
            }
            return number;
        },
    }
});


var swiper = new Swiper('.swiper-container.marks-swiper', {
    slidesPerView: 5,
    navigation: {
        nextEl: '.marks_block-slider .swiper-button-next',
        prevEl: '.marks_block-slider .swiper-button-prev',
    },
});

var swiper = new Swiper('.swiper-container.product-swiper', {
    slidesPerView: 1,
    loop: false,
    allowTouchMove: false,
    navigation: {
        nextEl: '.product-images .swiper-button-next',
        prevEl: '.product-images .swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: function(number) {
            if (number < 10) {
                number = number;
            }
            return number;
        },
        formatFractionTotal: function(number) {
            if (number < 10) {
                number = number;
            }
            return number;
        },
    }
});

var swiper = new Swiper('.swiper-container.swiper-reviews', {
    loop: true,
    slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 250,
    navigation: {
        nextEl: '.swiper-reviews .swiper-button-next',
        prevEl: '.swiper-reviews .swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: function(number) {
            if (number < 10) {
                number = number;
            }
            return number;
        },
        formatFractionTotal: function(number) {
            if (number < 10) {
                number = number;
            }
            return number;
        },
    }
});


var scene1 = document.getElementById('scene_1');
var parallaxInstance1 = new Parallax(scene1);

var scene2 = document.getElementById('scene_2');
var parallaxInstance2 = new Parallax(scene2);

var scene3 = document.getElementById('scene_3');
var parallaxInstance3 = new Parallax(scene3);

$(document).ready(function() {
    $("#whydef").twentytwenty();
})