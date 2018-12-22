

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

//Create new Event
//var event = new CustomEvent('myEvent', {'detail': 'Example event'});



image1.addEventListener('click', function(){showHide(image1);});
image2.addEventListener('click', function() {showHide(image2)});
image3.addEventListener('click', function() {showHide(image3)});

setInterval(function(){$('#image1').trigger('click');}, 3000);
setInterval(function(){$('#image2').trigger('click');}, 4000);
setInterval(function(){$('#image3').trigger('click');}, 5000);




//Hide images after so many milliseconds
//setTimeout(function(){ $("#image1").hide(); }, 3000);
//setTimeout(function(){ $("#image2").hide(); }, 4000);
//setTimeout(function(){ $("#image3").hide(); }, 5000);
