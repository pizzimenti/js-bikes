(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function() {
  $('#findByCity').click(function() {
    // event.preventDefault();
    var city = $('#city').val();
    console.log(city);
    $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&proximity=' + city + '&proximity_square=100').then(function(response) {
      console.log(response);
      // var titleList = bikeTitles(response);
      var bikes = response;
      Object.keys(bikes).forEach(function (key) {
        bikes[key].forEach(function (elem, index) {
            console.log(elem, index);
            document.body.innerHTML += elem.title + '<br/>';
        });
    });


        // $('#showBikes').text(response.bikes[1].title);
    });
  });
});

},{}]},{},[1]);
