 

  $(document).ready(function(){
    // $('.tabs').tabs();
    $(".g1").hide();
    $(".g2").hide();
    $(".g3").hide();
    $(".g4").hide();
    $(".front").show();
    $('.materialboxed').materialbox();
    $('.slider').slider();
    $('.tabs').tabs();
  });

  
$(".graph1").click(function(){
    $(".g1").show();
     $(".g2").hide();
     $(".g3").hide();
     $(".g4").hide();
     $(".front").hide();
   });

$(".graph2").click(function(){
    $(".g1").hide();
    $(".g2").show();
    $(".g3").hide();
    $(".g4").hide();
    $(".front").hide();
});

$(".graph3").click(function(){
    $(".g1").hide();
    $(".g2").hide();
    $(".g3").show();
    $(".g4").hide();
    $(".front").hide();
});

$(".graph4").click(function(){
    $(".g1").hide();
    $(".g2").hide();
    $(".g3").hide();
    $(".g4").show();
    $(".front").hide();
});