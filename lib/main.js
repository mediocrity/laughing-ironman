var prefs = require('sdk/simple-prefs').prefs
var { Hotkey } = require("sdk/hotkeys");

var interact = require('./interact');


var guess_hotkey = Hotkey({
    combo: prefs['guess'],
    onPress: function() {
        console.log('clicking guess search');
        interact.guess_search_box();
    }
});

