define(["Vue", "JQuery"], function(Vue) {
    let Home = Vue.component("Home", {
        data: ()=>{
            return {
                intro: "Hello World"
            }
        },
        methods: {
                SayHi(){
                    alert(this.intro);
                    
                }
            
        },
        mounted(){
            $(()=>{
                alert(this.intro);
                let container = $('.uk-container');
                console.log(container);
                container.css({"color":"red"})
            });
        },
        template: `
            <div class="uk-container">
                <div class="uk-margin uk-card uk-card-default uk-card-body uk-margin-top">
                    <h1 class="uk-heading-small">im a Home</h1>
                    <p class="red">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <router-link class="uk-button uk-button-default" :to="{name: 'Article'}">Go to Article</router-link>
                    Or <button @click="SayHi()">Say hi</button>
                </div>
            </div>
        `
    })

    return Home
})