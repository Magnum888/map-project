$(function() {

	$('#mapModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget)
		// console.log(button)
		var namefarm = button.data('namefarm')
		var lat = button.data('lat')
		var lng = button.data('lng')
		console.log(lat, lng)
		var modal = $(this)
		modal.find('.modal-title').text('Location: ' + namefarm)
		var uluru = {lat: +lat, lng: +lng};
        var map = new google.maps.Map(document.getElementById('mapsModal'), {
          zoom: 18,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
		  map: map,
		  icon: '../img/map-marker.png'
		});
		var infoWindow = new google.maps.InfoWindow({
			content: "<span>" + namefarm + "</span>"
		});
		marker.addListener('click', function(){
			infoWindow.open(map, marker)
		});
	  });

});
