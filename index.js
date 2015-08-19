/**
 * fis.baidu.com
 */

var cssgrace = require('./lib/cssgrace.js');
module.exports = function (content, file, settings) {
    return cssgrace.pack(content, { from: settings.filename } );
};
