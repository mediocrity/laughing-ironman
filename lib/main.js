var prefs = require('sdk/simple-prefs').prefs
var { Hotkey } = require("sdk/hotkeys");

var interact = require('./interact');


var guess_hotkey = Hotkey({
    combo: prefs['guess'],
    onPress: function() {
        interact.guess_search_box();
    }
});

