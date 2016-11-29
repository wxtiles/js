/**
 * WXTiles
 * Make and explore beautiful, rapidly-refreshed weather maps with the WXTiles API
 *
 * OpenAPI spec version: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WxTiles) {
      root.WxTiles = {};
    }
    root.WxTiles.PartialInstance = factory(root.WxTiles.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PartialInstance model module.
   * @module model/PartialInstance
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>PartialInstance</code>.
   * A named instance of a dataset, typically used to represent a forecast model cycle.
   * @alias module:model/PartialInstance
   * @class
   * @param id {String} Instance ID
   * @param displayName {String} Instance name, intended for display to end users
   * @param created {Date} ISO 8601 datetime string representing when the instance configuration was created
   */
  var exports = function(id, displayName, created) {
    var _this = this;

    _this['id'] = id;
    _this['displayName'] = displayName;
    _this['created'] = created;


  };

  /**
   * Constructs a <code>PartialInstance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartialInstance} obj Optional instance to populate.
   * @return {module:model/PartialInstance} The populated <code>PartialInstance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('start')) {
        obj['start'] = ApiClient.convertToType(data['start'], 'Date');
      }
      if (data.hasOwnProperty('end')) {
        obj['end'] = ApiClient.convertToType(data['end'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Instance ID
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Instance name, intended for display to end users
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * ISO 8601 datetime string representing when the instance configuration was created
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * ISO 8601 datetime string representing the earliest retrievable time-step for an instance, if an instance has a time dimension.
   * @member {Date} start
   */
  exports.prototype['start'] = undefined;
  /**
   * ISO 8601 datetime string representing the latest retrievable time-step for an instance, if an instance has a time dimension.
   * @member {Date} end
   */
  exports.prototype['end'] = undefined;



  return exports;
}));


