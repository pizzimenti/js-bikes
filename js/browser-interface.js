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
            document.('#showBikes').innerHTML += elem.title + '<br/>';
        });
    });


        // $('#showBikes').text(response.bikes[1].title);
    });
  });
});
