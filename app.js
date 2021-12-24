// element and data property
// new Vue({

//     el: "#app",
//     data: {
//         title: "Vue JS App",
//         version: "1.0.0",
//         number: 1,
//         items: ['x','y','z'],
//         hellowMethod: ()=>{
//             return "Hello world";
//         }
//     }
// });

new Vue({

    el: "#app",
    methods: {
        grettings(){
            return "hello world"
        }
    },
});