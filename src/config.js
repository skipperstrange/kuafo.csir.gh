require.config({

    baseUrl: "src",
    paths: {
        // from libs
        Vue: "lib/vue",
        VueRouter: "lib/vue-router",
        JQuery: 'lib/jquery',
        JQueryUi: 'lib/jquery-ui.min',
        Uikit: "lib/uikit",
        UikitIcons: "lib/uikit-icons",

        // from pages
        HomePage: "pages/Home.vue",
        ArticlePage: "pages/Article.vue",

        // main
        Router: "router"
    }
})
