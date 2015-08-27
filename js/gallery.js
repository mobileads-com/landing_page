$(function() {

    $('#carousel-expandable-md, #carousel-expandable-sm').hide();
    $('#carousel-embedded-md, #carousel-embedded-sm').hide();
    $('#carousel-interstitial-md, #carousel-interstitial-sm').hide();


    function setAsActive(context) {
        $('#button-div div').removeClass('active');
        $(context).addClass('active');
    }

    $('#expandable').click(function() {
        setAsActive(this);

        $('#carousel-embedded-md, #carousel-embedded-sm').hide();
        $('#carousel-interstitial-md, #carousel-interstitial-sm').hide();
        $('#carousel-all-md, #carousel-all-sm').hide();

        $('#carousel-expandable-md, #carousel-expandable-sm').show();
    });

    $('#embedded').click(function() {
        setAsActive(this);

        $('#carousel-all-md, #carousel-all-sm').hide();
        $('#carousel-expandable-md, #carousel-expandable-sm').hide();
        $('#carousel-interstitial-md, #carousel-interstitial-sm').hide();
        
        $('#carousel-embedded-md, #carousel-embedded-sm').show();
    });

    $('#interstitial').click(function() {
        setAsActive(this);

        $('#carousel-all-md, #carousel-all-sm').hide();
        $('#carousel-embedded-md, #carousel-embedded-sm').hide();
        $('#carousel-expandable-md, #carousel-expandable-sm').hide();
        
        $('#carousel-interstitial-md, #carousel-interstitial-sm').show();
    });

    $('#all').click(function() {
        setAsActive(this);

        $('#carousel-embedded-md, #carousel-embedded-sm').hide();
        $('#carousel-expandable-md, #carousel-expandable-sm').hide();
        $('#carousel-interstitial-md, #carousel-interstitial-sm').hide();
        
        $('#carousel-all-md, #carousel-all-sm').show();
    });

});