$(function() {

	$('#mapModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget)
		var namefarm = button.data('namefarm')
		var modal = $(this)
		modal.find('.modal-title').text('Location: ' + namefarm)
	  })

});
