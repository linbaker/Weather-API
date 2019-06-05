import { WeatherService } from "./weather-service.js";

$(document).ready(function () {
            $('#weatherLocation').click(function () {
                    let city = $('#location').val();
                    $('#location').val("");

                    let weatherService = new WeatherService();
                    let promise = weatherService.getWeatherByCity(city);

                    promise.then(function (response) {
                            let body = JSON.parse(response);
                            $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
                            $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees`);
                        }, function (error) {
                            $('.showErrors').text('There was an error processing your request: ${error.message}');
                        });

                    });
            });