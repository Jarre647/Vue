const car = (name, model, owner, year, phone, image) => ({ name, model, owner, year, phone, image })
const log = (text, type, date = new Date()) => (text, type, date)

const cars = [
    car('Bugatty', 'Veyron', 'Seva', 2016, '+7 000 00-00', 'images/a.jpg'),
    car('Ford', 'Vyn', 'Eva', 2016, '+7 001 00-00', 'images/b.jpg'),
    car('MB', 'ron', 'Vasja', 2016, '+7 020 00-00', 'images/c.jpg'),
]


new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false,
        logs: []
    },
    methods: {
        selectCar(index) {
            this.car = cars[index],
                this.selectedCarIndex = index
        },
        newOrder() {
            this.modalVisibility = false;
            this.logs.push(
                log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
            )
        },
        cancelOrder() {
            this.modalVisibility = false;
            this.logs.push(
                log(`Success order: ${this.car.name} - ${this.car.model}`, 'cnl')
            )
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredCars() {
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            })
        }
    }
});
ymaps.ready(function () {
    var map;
    ymaps.geolocation.get().then(function (res) {
        var mapContainer = $('#map'),
            bounds = res.geoObjects.get(0).properties.get('boundedBy'),
            // Рассчитываем видимую область для текущей положения пользователя.
            mapState = ymaps.util.bounds.getCenterAndZoom(
                bounds,
                [mapContainer.width(), mapContainer.height()]
            );
        createMap(mapState);
    }, function (e) {
        // Если местоположение невозможно получить, то просто создаем карту.
        createMap({
            center: [55.751574, 37.573856],
            zoom: 2
        });
    });

    function createMap(state) {
        map = new ymaps.Map('map', state);
    }
});