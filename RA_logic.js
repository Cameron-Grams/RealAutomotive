function contactForm(){
    $("#contactModal").css("display", "block");
}

function returnSite(){
    $('#contactModal').css("display", "none");
}

 
function initMap(){
  var garageLocation = { lat: 34.724221, lng: -76.7370959};
  var mapProp = {
    center: garageLocation,
    zoom: 13,
    mapTypeId: 'roadmap'
  }
  var map = new google.maps.Map(document.getElementById('mapSection'), mapProp);

  var marker = new google.maps.Marker({
    position: garageLocation,
    map: map
  })
}
 


