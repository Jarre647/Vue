const car = (name, model, owner, year, phone, image) => ({ name, model, owner, year, phone, image })

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
        search: ''
    },
    methods: {
        selectCar: function (index) {
            this.car = cars[index],
            this.selectedCarIndex = index
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
}) 