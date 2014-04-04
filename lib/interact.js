// module for interacting with tabs
var data = require('sdk/self').data;
var tabs = require("sdk/tabs");

function guess_search_box () {
    var worker = tabs.activeTab.attach({
        contentScriptFile: [data.url('jquery-2.1.0.min.js'),
                            data.url('guess.js')]
    });

    worker.port.emit('make_guess');
}

exports.guess_search_box = guess_search_box;
