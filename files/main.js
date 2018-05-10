const canvas = $('.graphic');

$('#submitBtn').on('click', function() {
	const w = $('#width').val(),
	h = $('#height').val();

	transformWidthAndHeight(w, h)
})

function transformWidthAndHeight(width, height) {
	canvas.attr({
		width,
		height
	})
}