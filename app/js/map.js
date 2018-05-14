function initMap() {
  var pos = {};
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    function showPosition(position){
      pos.lat = position.coords.latitude;
      pos.lng = position.coords.longitude;
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: pos
      });
      var marker = new google.maps.Marker({
        position: pos,
        map: map
      });
    }
  }else{
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: -34.397, lng: 150.644}
    });
  }
  
    
}