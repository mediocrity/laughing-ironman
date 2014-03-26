var data = require('sdk/self').data;


// Logic for setting and getting
var storage = require("storage");
var tabs = require("sdk/tabs");

var item_position = '';

function bind_selected_item () {
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

function focus_selected_item () {
    var worker = tabs.activeTab.attach({
        contentScriptFile: [data.url('jquery-2.1.0.min.js'),
                            data.url('retrieve.js')]
    });

    var saved = storage.retrieve(tabs.activeTab.url);
    if (saved !== undefined) {
        worker.port.emit('set_focus', saved[1]);
    }
    
}



// Hotkey setup
var { Hotkey } = require("sdk/hotkeys");

var bind_hotkey = Hotkey({
    combo: "alt-shift-d",
    onPress: function() {
        console.log('clicking bind');
        bind_selected_item();
    }
});

var goto_search_hotkey = Hotkey({
    combo: "alt-shift-s",
    onPress: function() {
        console.log('clicking goto search');
        focus_selected_item();
    }
});

