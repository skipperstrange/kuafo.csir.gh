define(["Vue", "JQuery"], function(Vue) {
    let Header = Vue.component("Header", {
        data: ()=>{
            return {
                companyDetails:{
                    contactMobile: "233 20x xxx xxx",
                    contactFax: "",
                    contactEmail: "",
                    location: {
                        address:"",
                        street: "",
                        lon: "",
                        lat: ""
                    },
                    hours: {
                        from: "08:00",
                        to: "17:00",
                        days: "Mon - Fri"
                    },
                    socialMedia: {
                        facebook: "",
                        twitter: "",
                        pintrest: "",
                        youttube: "",
                        whatsap: "",
                    }
                }
            }
        },
        methods: {
             
            
        },
        mounted(){
           
        },
        template: `
        <header class="header-main header-1">
        <!-- Top Header -->
        <div class="topheader">
          <div class="container">
            <div class="d-flex justify-content-between">
                <div class="lpart">
                    <div class="lang">
                    <!-- additional settings and info can go here -->
                    </div>
                </div>
              <div class="midpart">
                  <div class="tel">
                    <i class="icon-phone-receiver"></i>Quick Contact <span>|</span> <a :href="'tel:'+companyDetails.contactMobile">{{this.companyDetails.contactMobile}}</a>
                  </div>
              </div>
              <div class="rpart">
                <!--div class="user"><i class="icon-user"></i>Hello</!--div -->
                <ul class="user-list">
                <li><router-link :to="{name: 'Login'}">Sign In</router-link></li>
                <li><router-link :to="{name: 'Register'}">Register</router-link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- End Top Header -->
        </header>
        `
    })

    return Header
})