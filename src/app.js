define(function(require) {

    let Vue = require("Vue")
    let VueRouter = require("VueRouter")
    let Router = require("Router")

    Vue.use(VueRouter);

    let App = new Vue({
        el: "#kuafo-app",
        router: Router
    })

})
