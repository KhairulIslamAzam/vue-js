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

// methods calls

// new Vue({

//     el: "#app",
//     methods: {
//         grettings(){
//             return "hello world"
//         }
//     },
// });

// v-bind example
// new Vue({

//     el: "#app",
//     data:{
//         name: "Khairul Islam Azam",
//         age: "<strong>27</strong>",
//         image: "https://avatars.githubusercontent.com/u/51885210?v=4",
//         alt: "profile pic of azam"
//     }
// });

// conditional statement

// new Vue({

//     el: "#app",
//     number: 1
// });

// //v-show
// new Vue({

//     el: "#app",
//     data:{
//         userName: "azam",
//     age: 27
//     },
//     methods: {
//         changeUser(){
//             return this.userName === "azam" ? "azam": null;
//         }
//     },
// })


//v-for
// new Vue({

//     el: "#app",
//     data:{
//         cars: ["toyota", "bmw", "ferrari"],
//         numbers: {
//             dig: 1,
//             dig: 2
//         }
    
//     }
// });


// v-once
// new Vue({

//     el: "#app",
//     data:{
//         name: "Azam"
//     },
//     methods: {
//         update(){
//             setTimeout(()=>{
//                 this.name = "khairul"
//             }, 2000)
//         },
//     }
// });


// v-event
// new Vue({

//     el: "#app",
//     data:{
//         name: "Azam"
//     },
//     methods: {
//         update(){
//             this.name = "khairul"
//         },
//     }
// });

//method with args and modifier
// new Vue({

//     el: "#app",
//     data:{
//         name: "Azam"
//     },
//     methods: {
//         update(name){
//             this.name = name;
//             console.log(event);
//         },
//     }
// });


//prevent defualt
// new Vue({

//     el: "#app",
//     data:{
//         name: "Azam"
//     }
// });

//v-model
// new Vue({

//     el: "#app",
//     data:{
//         formData:{
//             firstName: '',
//             lastName: ''
//         }
//     },

//     methods: {
//         handleForm(){
//             console.log(this.formData);
//         }
//     },
// });


//computed property and shortland
new Vue({

    el: "#app",
    data:{
        
        a: 0,
        b: 0,
        salary: 10
        
    },

    computed: {
        calculate_Salary_a(){
            return (this.salary + this.a);
        },
        calculate_Salary_b(){
            return (this.salary + this.b);
        }
    }
});

