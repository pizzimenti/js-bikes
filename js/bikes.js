exports.bikes = function(bikes) {
  var bikeList = [];

  Object.keys(bikes).forEach(function (key) {
    bikes[key].forEach(function (elem, index) {
        console.log(elem, index);
        document.'#showBikes'.innerHTML += elem.title + '<br/>';
    });
});

  }
}
