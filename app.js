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