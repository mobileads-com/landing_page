$(function() {

    var formMsg = $('#contact .form-msg');
    formMsg.hide();
    $('#contact .fa-spinner').hide();

    $('#signup-form, #signup-form-sm').validate({
        rules : {
            name : {
                required : true
            },
            email : {
                required : true, 
                email : true
            },
            password : {
                required : true
            }
        },

        submitHandler : function () {
            $.post('/register.htm', 
                   {'agency':true, 'email':$('[name=email]').val(), 'industry':'', 'name':$('[name=name]').val(), 'password':$('[name=password]').val(), 'platform':'ma', 'role':'agency', 'timezone':$('[name=timezone]').val(), 'subscriptionId':3}, function () {
            }).done(function (jsonObject) {
                console.log(jsonObject);
                console.log('done');
                formMsg.addClass('text-success').text('You have successfully signed up!');
                formMsg.show();

            }).fail(function (jsonObject) {
                console.log(jsonObject);
                console.log('Request failed');
                formMsg.addClass('text-red').text('Something was wrong! Please try again later.');
                formMsg.show();
            });
        }, 
        invalidHandler : function () {

        }
    });
    
    /*
    $('#signup-form, #signup-form-sm').submit(function(event) {
        event.preventDefault();

        $.ajax({
            url: $("#signup-form").attr("action"),
            type: $("#signup-form").attr("method"),
            dataType: 'json',
        }).success(function() {
            console.log('done');


            $('#contact .panel').height('390px');
            formMsg.addClass('text-success').text('You have successfully signed up!');
            formMsg.show();
            // REDIRECT TO THE DASHBOARD HERE

        }).fail(function(jqXHR, textStatus) {
            console.log('Request failed', textStatus);
            $('#contact .panel').height('390px');
            formMsg.addClass('text-red').text('Please fill in all fields.');
            formMsg.show();
        });
    });
    */
});