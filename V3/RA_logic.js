function contactForm(){
    $("#contactModal").css("display", "block");
}

function returnSite(){
    $('#contactModal').css("display", "none");
}

 
function initMap(){
  var garageLocation = { lat: 34.724221, lng: -76.7370959};
  var mapProp = {
    center: garageLocation, //need the exact location
    zoom: 13,
    mapTypeId: 'roadmap'
  }
  var map = new google.maps.Map(document.getElementById('mapSection'), mapProp);

  var marker = new google.maps.Marker({
    position: garageLocation,
    map: map
  })
}
 

// https://www.google.com/maps/place/Real+Automotive/@34.724221,-76.7370959,15z/data=!4m5!3m4!1s0x0:0x8782a82ac57a6d44!8m2!3d34.724221!4d-76.7370959

