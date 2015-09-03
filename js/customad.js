var signupForm = function(){
	this.form = '#form-signup';
	this.initEvents();
}

signupForm.prototype.initEvents = function(){
	var _this = this;

	$(_this.form).validate({
		rules:{
			name: { required : true, minLength: 1},
			email: { required : true, email : true},
			company: { required : true, minLength: 1}
		},
		messages:{
			name: { required : "Please enter your name." },
			email: { required : "Please enter your email." },
			company: { required : "Please enter your company name." }
		},
		tooltip_options: {
			_all_: { placement: 'left' }
		},
		submitHandler: function(){
		// 	// $.post('/path/to/file', { 'agency' : true, 'name' : $('[name=name]').val(), 'email' : $('[name=email]').val(), 'industry' : '',  'password':$('[name=password]').val(), 'platform':'ma', 'role':'agency', 'timezone':$('[name=timezone]').val(), 'subscriptionId':3}, function(data, textStatus, xhr) {
		// 		/*optional stuff to do after success */
		// 	// });
		},
		invalidHandler: function(event, validator) {
			return false;
		}
	});
}

signupForm.prototype.validateForm = function(){
	$(_this.form).validate({
		rules:{
			name: { required : true, minLength: 1},
			email: { required : true, email : true},
			company: { required : true, minLength: 1}
		},
		messages:{
			name: { required : "Please enter your name." },
			email: { required : "Please enter your email." },
			company: { required : "Please enter your company name." }
		}
	});
}

$(function(){
	var signup = new signupForm();
});