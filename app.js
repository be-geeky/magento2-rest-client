var Magento2Client = require('magento2-rest-client').Magento2Client;
var assert = require('assert');
    var options = {
          'url': 'http://172.16.60.51/node_code/index.php/rest',
          'consumerKey': '0sosybom1979gmb43pt22yw257vfjy1s',
          'consumerSecret': 'f699j3uexfjfw95pca8x889ivtk7nsr6',
          'accessToken': 'gsem1c78naqn0ub0j5575vlaa2y64ff0',
          'accessTokenSecret': '5ylxtfow0u0hl7orxq4abbr5mmemfksh'
    };
    var client = Magento2Client(options);
    client.categories.list()
        .then(function (categories) {
//            assert.equal(categories.parentId, 1);
		console.log(categories);
        })
