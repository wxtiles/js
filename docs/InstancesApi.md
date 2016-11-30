# WxTiles.InstancesApi

All URIs are relative to *http://127.16.1.15/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInstance**](InstancesApi.md#getInstance) | **GET** /{ownerId}/layer/{layerId}/instance/{instanceId}/ | Information about a particular (potentially non-persistant) instance of a layer
[**getLevels**](InstancesApi.md#getLevels) | **GET** /{ownerId}/layer/{layerId}/instance/{instanceId}/levels/ | A collection of vertical levels for which data exists and can be requested (as tiles) for an instance of a layer.
[**getTimes**](InstancesApi.md#getTimes) | **GET** /{ownerId}/layer/{layerId}/instance/{instanceId}/times/ | A collection of moments in time for which data exists and can be requested (as tiles) for an instance of a layer.


<a name="getInstance"></a>
# **getInstance**
> Instance getInstance(ownerId, layerId, instanceId, )

Information about a particular (potentially non-persistant) instance of a layer

This endpoint provides information about an instance of a specific *WXTiles* layer that can be requested as map tiles. Instances are typically added and removed as the data underlying a dataset changes with time (e.g. forecasts expire, and forecast horizons continuously move forward). Therefore a particular instance of a layer may not be persistant.

### Example
```javascript
var WxTiles = require('wx_tiles');
var defaultClient = WxTiles.ApiClient.default;

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new WxTiles.InstancesApi();

var ownerId = "ownerId_example"; // String | The owner of the dataset.

var layerId = "layerId_example"; // String | The id of the layer.

var instanceId = "instanceId_example"; // String | The id of the instance.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInstance(ownerId, layerId, instanceId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **String**| The owner of the dataset. | 
 **layerId** | **String**| The id of the layer. | 
 **instanceId** | **String**| The id of the instance. | 

### Return type

[**Instance**](Instance.md)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLevels"></a>
# **getLevels**
> Levels getLevels(ownerId, layerId, instanceId, )

A collection of vertical levels for which data exists and can be requested (as tiles) for an instance of a layer.

This endpoint exposes the array of vertical positions that data exists for a particular instance. Each element can be used to substitute the {level} part of a tile URL. Not all layer instances have a vertical (e.g. it may be surface wave height and therefore only apply at sea level). If a layer has no vertical dimension, the array will be empty.

### Example
```javascript
var WxTiles = require('wx_tiles');
var defaultClient = WxTiles.ApiClient.default;

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new WxTiles.InstancesApi();

var ownerId = "ownerId_example"; // String | The owner of the dataset.

var layerId = "layerId_example"; // String | The id of the layer.

var instanceId = "instanceId_example"; // String | The id of the instance.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLevels(ownerId, layerId, instanceId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **String**| The owner of the dataset. | 
 **layerId** | **String**| The id of the layer. | 
 **instanceId** | **String**| The id of the instance. | 

### Return type

[**Levels**](Levels.md)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTimes"></a>
# **getTimes**
> Times getTimes(ownerId, layerId, instanceId, )

A collection of moments in time for which data exists and can be requested (as tiles) for an instance of a layer.

This endpoint exposes the array of moments that data exists for a particular instance. Each element can be used to substitute the &lt;time&gt; part of a tile URL. Not all layer instances have a temporal dimension (e.g. it may be static bathymetry, or an observational dataset with no forecast or hindcast). If a layer has no temporal dimension, the array will be empty. The times in the array may not be unique (this is almost always due to grouped datasets containing overlapping time steps).

### Example
```javascript
var WxTiles = require('wx_tiles');
var defaultClient = WxTiles.ApiClient.default;

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new WxTiles.InstancesApi();

var ownerId = "ownerId_example"; // String | The owner of the dataset.

var layerId = "layerId_example"; // String | The id of the layer.

var instanceId = "instanceId_example"; // String | The id of the instance.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTimes(ownerId, layerId, instanceId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **String**| The owner of the dataset. | 
 **layerId** | **String**| The id of the layer. | 
 **instanceId** | **String**| The id of the instance. | 

### Return type

[**Times**](Times.md)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json
