// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).ready(function (){
  function init(){

    var myLatlng = new google.maps.LatLng(35.779590, -78.638179)
    var mapOptions = {
      center: myLatlng,
      zoom: 8,
      scrollwheel: false,
      mapTypeControl: false
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    //var image = "https://s-media-cache-ak0.pinimg.com/originals/40/dd/e4/40dde432312a8b8fa4534e15d4c2115c.jpg";
    var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          //icon: image,
          animation: google.maps.Animation.DROP
        });
  }

  google.maps.event.addDomListener(window, 'load', init);
})
