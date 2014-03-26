// module for interacting with tabs
var data = require('sdk/self').data;
var storage = require("storage");
var tabs = require("sdk/tabs");

var item_position = '';


function bind_current () {
    var worker  = tabs.activeTab.attach({
        contentScriptFile: [data.url('jquery-2.1.0.min.js'),
                        data.url('bind.js')],
        onMessage: function (message) {
            console.log('Getting message: ' + message);
            storage.insert(tabs.activeTab.url, message);
        }
    });

    worker.port.emit('get_path');
}       

function focus_search_bar () {
    var worker = tabs.activeTab.attach({
        contentScriptFile: [data.url('jquery-2.1.0.min.js'),
                            data.url('set-focus.js')]
    });

    var saved = storage.retrieve(tabs.activeTab.url);
    if (saved !== undefined) {
        worker.port.emit('set_focus', saved[1]);
    }
}

exports.bind_current = bind_current;
exports.focus_search_bar = focus_search_bar;
