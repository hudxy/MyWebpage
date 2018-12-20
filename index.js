

//document.getElementById('date').innerHTML = new Date().toDateString();

$(document).ready(function(){
  $("#hide").click(function(){
    $("#image3").hide();
    });
  $("#show").click(function(){
    $(".image").show();
  });
});


$(document).keydown(function(e) {
    switch (e.which) {
    case 37:
        $("#image3").animate({
            left: '-=50px'
        });
        break;
    case 38:
        $("#image3").animate({
            top: '-=50px'
        });
        break;
    case 39:
        $("#image3").animate({
            left: '+=50px'
        });
        break;
    case 40:
        $("#image3").animate({
            top: '+=50px'
        });
        break;
    }
})

setTimeout(function(){ $("#image1").hide(); }, 3000);
setTimeout(function(){ $("#image2").hide(); }, 4000);
setTimeout(function(){ $("#image3").hide(); }, 5000);
