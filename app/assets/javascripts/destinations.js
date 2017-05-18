$(document).ready(function(){
  function init(){
    var myLatlng = new google.maps.LatLng(latitude, longitude);

    var mapOptions = {
      center: myLatlng,
      zoom: 15,
      scrollwheel: false
    };

    var map = new google.maps.Map(document.getElementById('destination-map'), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      map:map
    });
  }

  google.maps.event.addDomListener(window, 'load', init);
});
