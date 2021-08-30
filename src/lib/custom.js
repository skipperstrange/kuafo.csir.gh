/*
Template Name    : ZOOY - Modern & Beautiful Auto Parts HTML5 & Bootstrap 4 Template
Version          : 1.0.0
Author           : Ashish Shah
Author URI       : http://ncodetechnologies.com//
Created.         : March 2021
File Description : Main js file of the template

// ------------------------------------------ //
//              Table Of Content              //
// ------------------------------------------ //

1  Header
2  Header-aside & Mobile Header
3  MiniCart
4  newsModal
5  Banner Carousel
6  Top Products
7  Testimonial Carousel
8  Responsive Tab
9  quantityNumber
*/

$(function() {
  'use strict';


 ///////---------------1. Header -------------/////// 

  var HeaderAside = function() {
    $('.site-navigation .navbar  .navbar-toggler').on('click',function() {
      $('.site-navigation .navbar #Miannavigation').addClass('active');
      $('html').css('overflow-y','hidden');
    });
    $('.site-navigation .navbar .remove').click(function(event) {
      $('.site-navigation .navbar #Miannavigation').removeClass("active");
      $('html').removeAttr('style');
    });
    $('.site-navigation .navbar .has-children .expand').on('click',function(){
      $(this).next().slideToggle();
    });
  }
 
 ///////---------------2. Header-aside & Mobile Header -------------/////// 

  var HeaderAside1 = function() {
    $('.header-3 .middle-header .navbar  .navbar-toggler').on('click',function() {
      $('.header-3 .middle-header .navbar #Miannavigation').addClass('active');
      $('html').css('overflow-y','hidden');
    });
    $('#Miannavigation .remove').click(function(event) {
      $('.header-3 .middle-header .navbar #Miannavigation').removeClass("active");
      $('html').removeAttr('style');
    });
    $('.vertical-nav .navbar .has-children .expand').on('click',function(){
      $(this).next().slideToggle();
    });
  }

  var verticalNav = function() {
    $('.page-wrapper .btn-vertical-nav').on('click',function() {
      $('.page-wrapper .nav-part').addClass('active');
      // $('html').css('overflow-y','hidden');
    });
    $('.page-wrapper .vertical-nav .remove').click(function(event) {
      $('.page-wrapper .nav-part').removeClass("active");
      // $('html').removeAttr('style');
    });
    $('.vertical-nav .navbar .has-children .expand').on('click',function(){
      $(this).next().slideToggle();
    });
  }
      

  ///////---------------3. MiniCart -------------/////// 

  var MiniCart = function() {
    $('.cart-part .cart-box').on('click',function() {
      $(".minicart-droapdown").slideToggle();
    });
  };

  ///////---------------4. News Modal -------------/////// 
  
  var newsModal = function() {
    setTimeout(function() {
      $('#myModalNews').modal('show');
    },3500);
  };

  ///////---------------5. Banner Carousel -------------/////// 

  var bannerCarousel1 = function() {
   $('#owl-homebanner1').owlCarousel({
        loop: true,
        item: 1,
        nav: true,
        autoplay: false, 
        smartSpeed: 2500,
        navText: ['<i class="icon-left-open"></i>', '<i class="icon-right-open"></i>'],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
  }

  var bannerCarousel2 = function() {
     $('#owl-homebanner2').owlCarousel({
        loop: true,
        item: 1,
        nav: false,
        autoplay: false, 
        smartSpeed: 2500,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
      });
  }
  var bannerCarousel4 = function() {
   $('#owl-homebanner4').owlCarousel({
        loop: false,
        item: 1,
        nav: true,
        autoplay: false, 
        smartSpeed: 2500,
        navText: ['<i class="icon-left-open"></i>', '<i class="icon-right-open"></i>'],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
  }
    
  ///////---------------6. Top Products -------------///////

  var productCarousel = function() {
    $('.product-carousel,.product-carousel3,.product-carousel2,.product-carousel1').owlCarousel({
      loop:true,
      margin:30,
      nav:true,
      navText: ["<i class='icon-left-open'></i>","<i class='icon-right-open'></i>"],
      dots:false,
      autoplay:true,
      responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
      }
    });
  }
  ///////---------------7. Testimonial Carousel -------------///////

  $('.testi-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: ["<i class=' icon-angle-left'></i>","<i class=' icon-angle-right'></i>"],
    dots:false,
    autoplay:true,
    items:1
  });

  ///////---------------8. Responsive Tab-------------///////  

  var responsiveTab = function() {
    $('#horizontalTab-arrival').easyResponsiveTabs({
      type: 'default',       
      width: 'auto',
      fit: true,
      activate: function(event) {}
    });
  };

  ///////---------------9. quantityNumber-------------///////

  var quantityNumber = function() {
    $(".button").on("click", function() {
      var $button = $(this);
      var oldValue = $button.parent().find("input").val();
      if ($button.html() == '<i class="icon-add-1"></i>') {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        // Don't allow decrementing below one
        if (oldValue > 1) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 1;
        }
      }
      $button.parent().find("input").val(newVal);
    });
  };
    

  $(function() {
    MiniCart();
    HeaderAside();
    newsModal();
    bannerCarousel1();
    bannerCarousel2();
    productCarousel();
    HeaderAside1();
    bannerCarousel4();
    responsiveTab();
    quantityNumber();
    verticalNav();
  });

});