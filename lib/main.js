var { Hotkey } = require("sdk/hotkeys");
var interact = require('./interact');

var bind_hotkey = Hotkey({
    combo: "alt-shift-d",
    onPress: function() {
        console.log('clicking bind');
        interact.bind_current();
    }
});

var goto_search_hotkey = Hotkey({
    combo: "alt-shift-s",
    onPress: function() {
        console.log('clicking goto search');
        interact.focus_search_bar();
    }
});

