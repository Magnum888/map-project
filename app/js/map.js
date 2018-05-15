function initMap() {
  var pos = {};
  var mapInclude = document.getElementById('map');
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  }else{
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: 34.052235, lng: -118.243683}
    });
  }
  function showPosition(position){
    pos.lat = position.coords.latitude;
    pos.lng = position.coords.longitude;
    var options = {
      zoom: 10,
      center: pos
    }
    var map = new google.maps.Map(document.getElementById('map'), options);
    
    addMarker({
      coordinates: pos,
      image: '../img/map-marker.png',
      info: '<div>You are here!</div>'
    });

    function addMarker(properties){
      var marker = new google.maps.Marker({
        position: properties.coordinates,
        map: map,
        icon: properties.image
      });
      if(properties.image){
        marker.setIcon(properties.image);
      };
      if(properties.info){
        var infoWindow = new google.maps.InfoWindow({
          content: properties.info
        });
        marker.addListener('click', function(){
          infoWindow.open(map, marker);
        });
      };
    };
  };
  function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            mapInclude.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            mapInclude.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            mapInclude.innerHTML = "The request to get user location timed out."
            break;
            break;
       case error.UNKNOWN_ERROR:
            mapInclude.innerHTML = "An unknown error occurred."
     };
  };
};