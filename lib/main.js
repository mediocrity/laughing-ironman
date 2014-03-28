var prefs = require('sdk/simple-prefs').prefs
var { Hotkey } = require("sdk/hotkeys");
var interact = require('./interact');



var bind_hotkey = Hotkey({
    combo: prefs['bind'],
    onPress: function() {
        console.log('clicking bind');
        interact.bind_current();
    }
});

var goto_search_hotkey = Hotkey({
    combo: prefs['goto'],
    onPress: function() {        
        console.log('clicking goto search');
        interact.focus_search_bar();
    }
});

var guess_search_hotkey = Hotkey({
    combo: prefs['guess'],
    onPress: function() {
        console.log('clicking guess search');
        interact.guess_search_bar();
    }
});

