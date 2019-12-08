var map = L.map('map').setView([53.4, 59], 5);
var layer = L.tileLayer("https://api.mapbox.com/styles/v1/ayazhan95/ck24fr6zb02e61cofi92tvgj6/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYXlhemhhbjk1IiwiYSI6ImNrMjRmbDVsMTFhNjMzbm55enZvZGIydzYifQ.pvH8Coo8QcBWZuoioRCblw").addTo(map);
var layerLabels;

function setBasemap(basemap) {
	if (layer) {
		map.removeLayer(layer);
	}
	if (basemap === "WorldMap") {
		layer = L.tileLayer("https://api.mapbox.com/styles/v1/ayazhan95/ck24fr6zb02e61cofi92tvgj6/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYXlhemhhbjk1IiwiYSI6ImNrMjRmbDVsMTFhNjMzbm55enZvZGIydzYifQ.pvH8Coo8QcBWZuoioRCblw")
	} else {
		layer = L.esri.basemapLayer(basemap);
	}
	map.addLayer(layer);
	if (layerLabels) {
		map.removeLayer(layerLabels);
	}
	if (basemap === 'ShadedRelief' || basemap === 'Oceans' || basemap === 'Gray' || basemap === 'DarkGray' || basemap === 'Terrain') {
		layerLabels = L.esri.basemapLayer(basemap + 'Labels');
		map.addLayer(layerLabels);
	} else if (basemap.includes('Imagery')) {
		layerLabels = L.esri.basemapLayer('ImageryLabels');
		map.addLayer(layerLabels);
	}
};
document.querySelector('#basemaps').addEventListener('change', function (e) {
	var basemap = e.target.value;
	setBasemap(basemap);
});