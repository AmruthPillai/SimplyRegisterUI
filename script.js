var registrationForm = $('#registration-form');
var completed = $('#completed');

$(document.body).ready(function() {
    $(completed).hide();
})

$(registrationForm).submit(function(e) {
    e.preventDefault();

    $(this).hide();
    $(completed).fadeIn();
});