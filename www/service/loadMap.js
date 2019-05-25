//Android
var GetMapsUri = "http://192.168.0.13:8000/maps/5ce2e12e05b4e72f600d7edd";

$(document).ready(function() {
  loadMap();
});

function loadMap() {
  $.ajax(GetMapsUri, {
    beforeSend: function(xhr) {
      console.log('Pred');
    },
    complete: function() {
      console.log('Po');
    },
    contentType: 'application/json',
    dataType: 'json',
    async: true,
    type: 'GET',
    crossDomain: true,
    error: function(xhr, ajaxOptions, thrownError) {
      //alert(xhr.status);
      //alert(xhr.responseText);
      console.log('napaka');
      console.log(xhr.status);
      console.log(thrownError);
    },
    success: function(data, status) {
      console.log('Rezultat iz baze');
      console.log(JSON.stringify(data));
      var map = $('#mapplic').mapplic({
        source: data,
        height: 540,
        sidebar: true,
        lightbox: true,
        fillcolor: '#495360',
        closezoomout: true,
        minimap: false,
        thumbholder: true,
        fullscreen: true,
        maxscale: 1,
        landmark: null,
        developer: true,
      });
    }
  });
}