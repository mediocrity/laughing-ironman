
function guess_search_bar () {
    var priority = [
        "*[type=search]",
        "*[type=text]",
        '*[name=q]'
    ];

    for (var i = 0; i < priority.length; i++) {
        var selected = $(priority[i]+':visible');
        if (selected.length > 0) {
            return selected.first();
        }
    }
}

self.port.on('make_guess', function() {
    var guess = guess_search_bar();
    if (guess) {
        guess.focus();
    }

});
