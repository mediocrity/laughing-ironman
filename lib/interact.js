// module for interacting with tabs
var data = require('sdk/self').data;
var storage = require("storage");
var tabs = require("sdk/tabs");

var item_position = '';


// getting domain name from url
function retrieve_domain(str) {
    var re = /[^\/]+\/\/(([^\/]+\.?)+)/;
    return str.match(re)[0];
}

function current_tab_domain() {
    return retrieve_domain(tabs.activeTab.url);
}


function bind_current () {
    var worker  = tabs.activeTab.attach({
        contentScriptFile: [data.url('jquery-2.1.0.min.js'),
                        data.url('bind.js')],
        onMessage: function (message) {
            console.log('Getting message: ' + message);
            storage.insert(current_tab_domain(), message);
        }
    });

    worker.port.emit('get_path');
}       

function focus_search_bar () {
    var worker = tabs.activeTab.attach({
        contentScriptFile: [data.url('jquery-2.1.0.min.js'),
                            data.url('set-focus.js'),
                            data.url('guess.js')]
    });

    var saved = storage.retrieve(current_tab_domain());
    if (saved !== undefined) {
        worker.port.emit('set_focus', saved[1]);
    }
    else{
        worker.port.emit('make_guess');
    }
}

function guess_search_bar () {
    var worker = tabs.activeTab.attach({
        contentScriptFile: [data.url('jquery-2.1.0.min.js'),
                            data.url('guess.js')]
    });

    worker.port.emit('make_guess');
}

exports.bind_current = bind_current;
exports.focus_search_bar = focus_search_bar;
exports.guess_search_bar = guess_search_bar;
