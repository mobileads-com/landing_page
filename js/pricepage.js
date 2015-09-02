var current_tab = null;
$(function(){

	$('.selectpicker').timezones();

	$('#modal-id').on('shown.bs.modal', function(){
		if(!current_tab){
			current_tab = $('.tabs-right li.active').attr('data-plan');
		}
	});
	
	$('.tabs-right li').on('click', function(){
		console.log($(this).attr('data-plan'));
	})

	$('#form-'+current_tab).on('submit', function(){
		console.log(current_tab);
		return false;
	})
});