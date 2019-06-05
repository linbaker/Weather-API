$(document).ready(function(){
    $('#weatherLocation').click(function(){
        let city = $('#location').val();
        $.ajax({
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6a33b6271afb4ed28ea9f07c3f231a1c`,
            type: 'GET',
            data: {
                format: 'json'
            },
            success: function(response) {
                $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
                $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
            },
            error: function() {
                $('#errors').text("There was an error processing your request. Please try again.");
            }
        });
    });
});