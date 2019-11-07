const car = (name, model, owner, year, phone, image) => ({ name, model, owner, year, phone, image })
const log = (text, type, date = new Date()) => (text, type, date)

const cars = [
    car('Bugatty', 'Veyron', 'Seva', 2016, '+7 000 00-00', 'images/a.jpg'),
    car('Ford', 'Vyn', 'Eva', 2016, '+7 001 00-00', 'images/b.jpg'),
    car('MB', 'ron', 'Vasja', 2016, '+7 020 00-00', 'images/c.jpg'),
]
const subMenus =[ ]
Vue.component('submenu'
{
    data: subMenus,
        template:''
})

new Vue({
    el: '#app',
    data: {
      
    },
    methods: {
     
    },
    computed: {
      
    }
});
