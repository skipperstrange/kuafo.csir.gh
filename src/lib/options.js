$(()=>{
    $(".default_option").click(function(){
      $(".dropdown ul").addClass("active");
    });

    $(".dropdown ul li").click(function(){
      var text = $(this).text();
      $(".default_option").text(text);
      $(".dropdown ul").removeClass("active");
    });
    $(' .currency select').niceSelect();

    $(function(){
      $('.selectpicker').selectpicker();
    });
  });