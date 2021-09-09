<template>
    <nav class="nav">
             <div class="wrapper container">
                <div class="logo">
                    <a href="">
                        <img src="@/assets/img/logo.png" height="60" alt=""> <span>Kuafo Market Place</span>
                    </a>
                </div>
        <ul class="nav-list" :class="(sideMenu) ? 'show': ''">
            <div class="top">
                <label for="close-button" class="btn close-btn"><i class="fa fa-times"></i>
                </label>
            </div>
            <li v-for="category in categories" :key="category.id" class="category">
                <a href="#" class="desktop-item">{{category.name}} <span><i class="fas fa-chevron-down"></i></span></a>
                <input type="checkbox" :id="category.name" class="showMega"> 
                <label :for="category.name" class="mobile-item">{{category.name}} <span><i class="fas fa-chevron-down"></i></span></label>
                
                <div class="mega-box" >
                    <div class="content">
                        <div class="row">
                              <img :src="category.img" width="200" alt="">
                               <!--header>{{category.name }}</header-->
                            </div>

                        <div class="row" v-for="index in 2" :key="index">
                            <ul class="mega-links">
                                <li v-for="subCategory in category.subCategories" :key="subCategory.id">
                                    <a :href="subCategory.id">{{subCategory.name}}</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="left" style="display: block;">
        <label class="icons" for="search"><span><i class="fa fa-search"></i></span></label>
        <label  class="icons open-btn" for="open-btn" @click="toggleMenu()"  style="display: hidden;"><i class="fa fa-bars"></i></label>
        </div>
        
    </div>     
</nav>
</template>

<script>

export default {
    data() {
        return{
            categories: [],
            sideMenu: false
        }
    },
    name: 'NavBar',
    components: {
    },


    mounted(){
        this.getCategories();
        console.log(this.categories);
        
    },

    created(){

    },

    methods: {

        toggleMenu(){
            this.sideMenu = !this.sideMenu
        },

        getCategories(){
            this.$axios
            .get(this.$dataHost+'categories?_embed=subCategories')
            .then(response=> {
               let tmpCat =response.data;
                tmpCat.forEach((val)=>{
                    this.categories.push(val)
                })
                
            });
        }
    }
}
</script>

<style>
 /* Navigation */
  nav{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 999;
      background-color: var(--white);
      height: 8rem;
      line-height: 8rem;
  }

  nav.fix-nav{
      width: 100%;
      box-shadow: rgb(0, 0, 0, 0.3);
      z-index: 999 ;
  }

  .nav .wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 100%;
  }

  .wrapper .logo{
      height: 100%;
  }

 .wrapper .logo a{
     display: flex;
     align-items: center;
     justify-content: center;
     height: 100%;
 }

 .wrapper .nav-list{
     display: inline-flex;
 }

.nav-list li i{
    color: var(--grey2);
 }


.nav-list a{
    color: var(--black);
    font-size: 1.8rem;
    padding: .9rem 1.5rem;
    border-radius: .5rem;
    transition: all 300ms ease;
 }

 .nav-list a:hover{
     color: var(--primary);
 }

 .nav-list input.showMega{
  visibility: hidden;
 }

 .nav-list li:hover .mega-box{
    opacity:1;
    visibility: visible;
    top:6.5rem;
    transition: all 300ms ease;
 }

 .mega-box{
     box-shadow: rgb(0, 0, 0, 0.1);
     position: absolute;
     top:8.5rem;
     left: 0;
     padding: 0 6rem;
     width: 100%;
     background-color: var(--white);
     opacity: 0;
     transition: all 300ms ease;
     visibility: hidden;
 }

 .mega-box .content{
     padding: 2.5rem 2rem;
     display: flex;
     justify-content:center;
     text-align: left;
     width:100%;
 }

  .mega-box .content .row{
      width: calc(25%, -3rem);
      line-height: 4.5rem;
  }

.mega-box .content .row img{
    height: 100%;
    height: 100%;
    object-fit: contain;
}

.mega-box .content .row header{
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--grey1);
}

.mega-box .content .row .mega-links{
border-left: 1px solid rgb(255,255,255,0.9);
margin-left: 4rem;
}

.mega-box .content  li{
    padding: 0 2rem;
}

.mega-box .content  li a{
    padding: 0 2rem;
    display: block;
    color: var(--grey2);
}

.mega-box .content  li a:hover{
color: var(--primary);
}

.nav-list .mobile-item{
    display: none;
}

.wrapper .btn{
    color: var(--white);
    cursor:pointer;
    font-size: 2rem; 
    display: none;
}

.icons span{
    display: inline-block;
    margin: 0.5rem 1rem 0 0;
    position: relative;
}

@media (max-width: 968px) {
     .wrapper .nav-list{
      position: fixed;
      top: 0;
      left: -100%;
      width: 100%;
      height:100%;
      max-width: 35rem;
      background-color: var(--white);
      display:block;
      overflow-y:auto;
      transition: all 300ms ease;
      box-shadow: 1.5rem 1.5rem rgb(0, 0, 0, 0.1);
      line-height: 1.5rem;
     }

     .wrapper .nav-list.show{
         left: 0;
     }

     .nav-list li{
         margin: 1.5rem 1rem;
     }

     .nav-list a{
         display:block;
         padding: 0 2rem;
     }

     input:checked ~.mega-box{
         max-height: 100%;
         transition: all 300ms ease;
     }

     .nav-list .desktop-item{
         display:none;
     }

      .nav-list .mobile-item{
         display:block;
         font-size: 1.7rem;
          padding-left: 2rem;
          cursor:pointer;
          border-raduis:0.5rem;
          color: var(--black);
     }

     .nav-list .mobile-item:hover{
         color: var(--primary);
     }

     .mega-box{
         position: static;
         top:6.5rem;
         padding: 0 2rem;
         visibility: visible;
         max-height: 0;
         transition: all 300ms ease;
         overflow: hidden; 
     }

     .mega-box .content{
         flex-direction: column;
         padding: 2rem 2rem 0 2rem;
     }

      .mega-box .content .row{
         width: 100%;
         border-top: 1px solid rgb(255, 255, 255, 0.9);
         margin-bottom: 1.5rem;
     }

      .content .row:nth-child(1),
      .content .row:nth-child(2){
          border: 0;
      }

      .content .row .mega-links{
          border-left:0;
          padding-left: 2rem;
      }

      .content .row .mega-links li{
          margin-left: 2rem;
      }

      .wrapper .btn{
          display:block;
          color:var(--black);
      }

      .nav-list .top{
           position: relative;
           display: block;
           background-color: var(--primary);
           width:100%;
           height:8rem;
           
      }

      .nav-list .close-btn{
          position: absolute;
          top: 1.5em;
          right: 2.5rem;
          color: var(--white);
      }

      .icons span{
          padding-left:2rem;
      }

}


</style>
