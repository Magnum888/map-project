$(function() {

	$('#mapModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget)
		var namefarm = button.data('namefarm')
		var productfarm = button.offsetParent().children().find(".farm__type--product").text()
		var addressfarm = button.offsetParent().children().find(".farm__type--address").text()
		var lat = button.data('lat')
		var lng = button.data('lng')
		var modal = $(this)
		modal.find('.modal-title').text(namefarm)
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
			content: "<div class='marker--title'>" + namefarm + "</div>" + "<hr class='marker--hr'>" + "<div>Product: " + productfarm + "</div>" + "<hr class='marker--hr'>" + "<div> Address: " + addressfarm + "</div>" + "<hr class='marker--hr'>" + "<a href=''>show more</a>"
		});
		marker.addListener('click', function(){
			infoWindow.open(map, marker)
		});
	  });

});
