define(function(require) {

    let Vue = require("Vue")
    let VueRouter = require("VueRouter")
    let Router = require("Router")
    let Header = require("Header")

    Vue.use(VueRouter);

    let App = new Vue({
        el: "#kuafo-app",
        router: Router,
        components: {
            Header
        }
    })

})
