const descriptionMotor =
    (model, type, power, voltage, ratedСurrent, speed, image) => ({
        model,
        type,
        power,
        voltage,
        ratedСurrent,
        speed,
        image
    });

const DescriptionsMotors = [
    descriptionMotor('ABLE ML631-2', 'single phase', '0,18', '220', '1.48', '2800', 'images/ml631.jpg')
];

//Vue.component('submenu'
//{
//    data: subMenus,
//        template:''
//})

let vue = new Vue({
    el: '#app',
    data: {
        DescriptionsMotors
    },
    methods: {
     
    },
    computed: {
      
    }
});