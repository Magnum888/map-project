$(function() {

	$('#mapModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget)
		// console.log(button)
		var namefarm = button.data('namefarm')
		var modal = $(this)
		modal.find('.modal-title').text('Location: ' + namefarm)
		var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('mapsModal'), {
          zoom: 13,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
	  })

});
