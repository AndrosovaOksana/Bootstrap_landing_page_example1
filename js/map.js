function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: {lat: 49.833687, lng: 31.445085}
    });

    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var markers = locations.map(function(location, i) {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
      });
    });

    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  }
  var locations = [
    {lat: 50.001031, lng: 36.253664},
    {lat: 49.998824, lng: 36.212808},
    {lat: 50.004782, lng: 36.268427}
  ]