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
    var markers = [
      {
        coordinates: pos,
        image: '../img/map-marker.png',
        info: '<div>You are here!</div>'
      },
      {
        coordinates: {lat: 43.917775, lng: -78.587485},
        image: '../img/farm-2.png',
        info: '<div class="marker--title">"R" FARM </div>'+'<hr class="marker--hr">'+
              '<div class="marker--product">Product: eggs</div>'+'<hr class="marker--hr">'+
              '<div class="marker--address">Address: Newcastle, ON L1B1L9</div>'+'<hr class="marker--hr">'+
              '<a href="#" class="marker--link">Show more</a>'
      },
      {
        coordinates: {lat: 52.123013, lng: -106.755475},
        image: '../img/farm-2.png',
        info: '<div class="marker--title">"Saskatoon" FARM</div>'+'<hr class="marker--hr">'+
              '<div class="marker--product">Product: beef</div>'+'<hr class="marker--hr">'+
              '<div class="marker--address">Address: Saskatoon, SK S7M5G8</div>'+'<hr class="marker--hr">'+
              '<a href="#" class="marker--link">Show more</a>'
      },
      {
        coordinates: {lat: 45.66116015111812, lng: -64.39642475776519},
        image: '../img/farm-2.png',
        info: '<div class="marker--title">"Herbert" FARM </div>'+'<hr class="marker--hr">'+
              '<div class="marker--product">Product: pigs</div>'+'<hr class="marker--hr">'+
              '<div class="marker--address">Address: River Herbert East, NS B0L1H0</div>'+'<hr class="marker--hr">'+
              '<a href="#" class="marker--link">Show more</a>'
      },
      {
        coordinates: {lat: 44.109401185859454, lng: -79.12068351989235},
        image: '../img/farm-2.png',
        info: '<div class="marker--title">"Uxbridge" FARM </div>'+'<hr class="marker--hr">'+
              '<div class="marker--product">Product: Scottish Highland beef</div>'+'<hr class="marker--hr">'+
              '<div class="marker--address">Address: Uxbridge, ON L9P1R1</div>'+'<hr class="marker--hr">'+
              '<a href="#" class="marker--link">Show more</a>'
      },
      {
        coordinates: {lat: 44.89910369903265, lng: -76.28509045763863},
        image: '../img/farm-2.png',
        info: '<div class="marker--title">"Perth" FARM</div>'+'<hr class="marker--hr">'+
              '<div class="marker--product">Product: chicken</div>'+'<hr class="marker--hr">'+
              '<div class="marker--address">Address: Perth, ON K7H3C9</div>'+'<hr class="marker--hr">'+
              '<a href="#" class="marker--link">Show more</a>'
      }
    ]
    
    for (var i = 0; i<markers.length; i++){
      addMarker(markers[i]);
    }
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
    // function handler(event){
    //   var buttonn = event.relatedTarget;
    //   console.log(buttonn);
    // }
    // document.getElementById('mapModal').addEventListener('show.bs.modal', function(e){
    //   console.log(e)
    // }, false)
  //   var app = Array.prototype;
  //   app.forEach.call(document.querySelectorAll('#mapModal'), function(el){
  //     el.addEventListener('show.bs.modal', function(){
  //       var buttonn = $(event.relatedTarget)
	// 	    console.log(buttonn)
  //    }, false);
  //  });

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