// To Do Check off
$('ul').on('click', 'li', function(){
	$(this).toggleClass('completed');
});

// CLick X to deleted TODO
$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	// Stop actions affecting parents
	event.stopPropagation();
})

$('input[type="text"]').keypress(function(event){
	if(event.which === 13){
		// grab new todo text
		var todoText = $(this).val();
		// clear input
		$(this).val('');
		// create new li
		$('ul').append('<li><span><i class="fas fa-trash"></i></span> ' + todoText + '</li>')
	}
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle(500);
	icon = $(this).find('i');
	icon.fadeOut(300, function(){
		icon.toggleClass('fa-plus fa-minus');
	});
	icon.fadeIn(300);
});