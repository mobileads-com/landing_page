$(function() {

    var formMsg = $('#contact .form-msg');
    formMsg.hide();
    $('#contact .fa-spinner').hide();

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
});