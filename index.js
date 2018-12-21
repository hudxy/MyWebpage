

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



var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');
//image1.style.visibility = 'hidden';

function showHide(h) {
  if(getComputedStyle(h).visibility == 'visible') {
    h.style.visibility = 'hidden';
  } else if(getComputedStyle(h).visibility == 'hidden') {
    h.style.visibility = 'visible';
  }
}


setInterval(showHide, 3000, image1);
setInterval(showHide, 4000, image2);
setInterval(showHide, 5000, image3);



//Hide images after so many milliseconds
//setTimeout(function(){ $("#image1").hide(); }, 3000);
//setTimeout(function(){ $("#image2").hide(); }, 4000);
//setTimeout(function(){ $("#image3").hide(); }, 5000);
