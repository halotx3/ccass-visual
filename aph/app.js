 
function start(){
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
    $('.collapsible').collapsible();
  });

};

start();

$(".main_pg").click(function(){
  $(document).ready(start);
  // console.log("testing123")
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'left',
    hoverEnabled: false
    
  });
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

