//Add some extra wrapping around the library autogenerated from the swagger.
/**
   * @file A wrapper around the swagger autogenerated client.
   * @copyright MetOcean Solutions Ltd. 2016
   */

var apiClient = require('./index.js');
var api = new apiClient.TilesApi();

/**
 * Tiles service.
 * @module wxTiles
 * @version 1.2.0
 * @copyright MetOcean Solutions Ltd. 2016
 * @borrows  module:api/TilesApi#getLayers as wxTiles#getLayers
 * @borrows  module:api/TilesApi#getLayer
 * @borrows  module:api/TilesApi#getInstance
 * @borrows  module:api/TilesApi#getTimes
 * @borrows  module:api/TilesApi#getLevels
 * @borrows  module:api/LegendsApi#getPNGLegend
 * @borrows  module:api/TilesApi#getTile
 */
module.exports = api;

//All following requests will have the header:
//apiKey: the_key
module.exports.setApiKeyHeader = (apiKey) => {
	api.apiClient.authentications.apiKeyHeader.apiKey = apiKey;
}

//All following requests will have the query string:
//?apiKey=the_key
module.exports.setApiKeyQuery = (apiKey) => {
	api.apiClient.authentications.apiKeyQuery.apiKey = apiKey;
}

//Returns the URL to pass to map libraries like leaflet.
//Will include the apiKey query string, if set.

/**
 * Callback function to receive the result of the getLayer operation.
 * @callback module:wrapper~getPNGTileURLCallback
 * @param {String} error Error message, if any.
 * @param {module:model/Layer} data The data returned by the service call.
 * @param {String} response The complete HTTP response.
 */
/**
 * A PNG tile URL to pass to map libraries
 * This endpoint provides a tile url template to pass to map libraries like leaflet.
 * @param {String} ownerId The owner of the dataset.
 * @param {String} layerId The id of the layer.
 * @param {String} instanceId The id of the instance.
 * @param {Date} time The time.
 * @param {String} level The level.
 * @param {module:wrapper~getPNGTileURLCallback} callback The callback function, accepting three arguments: error, data, response
 */
module.exports.getPNGTileURL = (ownerId, layerId, instanceId, time, level, callback) => {

	//The layer might not have levels.
	if(!level) {
		level = 0;
	}

	//The layer might not have times
	if(!time) {
		time = 0;
	}

	var urlTemplate = `/${ownerId}/tile/${layerId}/${instanceId}/${time}/${level}/{z}/{x}/{y}.png`
	var tileURL = api.apiClient.basePath + urlTemplate;

	//Add the apiKey to the url if it is set.
	if(api.apiClient.authentications.apiKeyQuery.apiKey) {
		tileURL += "?apiKey=" + api.apiClient.authentications.apiKeyQuery.apiKey;
	}

	callback(null, tileURL);
}

//Returns the URL for the legend.
//Will include the apiKey query string, if set.
module.exports.getPNGLegendURL = (ownerId, layerId, instanceId, size, orientation, callback) => {

	var urlTemplate = `/${ownerId}/legend/${layerId}/${instanceId}/${size}/${orientation}.png`
	var legendURL = api.apiClient.basePath + urlTemplate;

	//Add the apiKey to the url if it is set.
	if(api.apiClient.authentications.apiKeyQuery.apiKey) {
		legendURL += "?apiKey=" + api.apiClient.authentications.apiKeyQuery.apiKey;
	}

	callback(null, legendURL);
}

//Helper function for Google Maps.
//Call this with your url and plug the returned object into google maps.
//E.G:
//var layerTilesUrl = wxTiles.getPNGTileURL("wxtiles", "aLayer", "anInstance", "aTime", 0);
//var mapLayer = wxTiles.google.getImageMapType(layerTilesUrl);
//googleMap.overlayMapTypes.setAt(layerKey, mapLayer);
module.exports.googleMaps = {}
module.exports.googleMaps.getImageMapType = (layerTilesUrl) => {
  return new google.maps.ImageMapType({
    getTileUrl: (coord, zoom) => {
      return layerTilesUrl.replace('{z}', zoom).replace('{x}', coord.x).replace('{y}', (Math.pow(2, zoom) - coord.y - 1));
    },
    tileSize: new google.maps.Size(256, 256),
    isPng: true
  })
}
