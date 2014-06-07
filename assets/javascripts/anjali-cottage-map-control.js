var latlng, level, road;
var Anjali_Cottage;
var marker, estateInfoWindow;
var mapDiv;
var mapOb;
var directionsService;
var directionsDisplay;

function initialize() {

  latlng = new google.maps.LatLng(11.543175, 76.224708);
  level = 12;
  road = google.maps.MapTypeId.ROADMAP;

  Anjali_Cottage = "<strong>Anjali Cottage</strong><br/>Kozhikode-Vythiri-Gudallur Road, Chitragiri,<br/>Vaduvanchal, Chellangode B.O, Wayanad,<br/>Kerala - 673581";

  mapObject = {
    zoom: level,
    center: latlng,
    panControl: true,
    panControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT
    },
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.TOP_LEFT
    },
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    overviewMapControl: false,
    mapTypeId: road
  };

  mapDiv = document.getElementById('map_canvas');

  mapOb = new google.maps.Map(mapDiv, mapObject);

  marker = new google.maps.Marker({
    position: latlng,
    map: mapOb,
    title: 'Anjali Cottage'
  });

  var infoWindowObject = {
    content:Anjali_Cottage,
  };
  estateInfoWindow = new google.maps.InfoWindow(infoWindowObject);
  estateInfoWindow.open(marker.get('mapOb'), marker);

  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();

  directionsDisplay.setMap(mapOb);
  directionsDisplay.setPanel(document.getElementById("directions_list"));
}

function codeAddress() {
  var address = document.getElementById('address').value;
  var request = {
    origin:address,
    destination:latlng,
    travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

function drawDirections() {
  codeAddress();
  estateInfoWindow.close();
}

function loadScript() {
  var script = document.createElement("script");
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyCCj2RkdL2P4PRNOOT8Ac0yg2wQX8osGbg&sensor=false&callback=initialize";
  script.type = "text/javascript";
  document.body.appendChild(script);

  var button = document.getElementById("buttonClick");
  button.onclick = function() {
    drawDirections();
  };
}

window.onload = loadScript;