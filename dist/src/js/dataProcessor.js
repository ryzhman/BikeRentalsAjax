/*jshint esversion: 6 */

/**
 * Created by Олександр on 25.12.2016.
 */
'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function receiveData(URL) {
    _jquery2.default.get(URL, function (data) {
        return showData(data.networks);
    });
}

module.exports = {
    getRawData: receiveData()
};
//# sourceMappingURL=dataAccess.js.map