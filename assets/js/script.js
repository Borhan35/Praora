//Dropdown plugin data
$('#lang-htmlselect').ddslick({
    onSelected: function (selectedData) {
        //callback function: do something with selectedData;
    }
});

// Step Form Init
$('#step-form').steps({
    onFinish: function () {}
});

// Toggle Init

$(document).ready(function () {
    $('.toggle-bar').on('click', function () {
        $('.nav').addClass('active');
        $('.backdrop').addClass('active');
    })
    $('.backdrop').on('click', function () {
        $('.nav').removeClass('active');
        $('.backdrop').removeClass('active');
    })
})