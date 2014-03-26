

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        console.log('Left was pressed');
    }
    else if(event.keyCode == 39) {
        console.log('Right was pressed');
    }
}, true);
