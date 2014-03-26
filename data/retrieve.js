
self.port.on('set_focus', function(path) {
    console.log('Getting path: ' + path);
    $(path).focus();
});
