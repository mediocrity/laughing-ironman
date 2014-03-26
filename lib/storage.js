
var ss = require("sdk/simple-storage");


// turns str into a valid identifier
function validify(str) {
    var new_str = '';
    for (var i = 0, len = str.length; i < len; i++) {
        new_str += str[i];
    }
    return new_str;
}


// takes a string as first argument
function insert () {
    var valid_first = validify(arguments[0]);
    ss.storage[valid_first] = arguments;
}

function retrieve () {
    var valid_first = validify(arguments[0]);
    return ss.storage[valid_first];
}

function destroy () {
    var valid_first = validify(arguments[0]);
    delete ss.storage[valid_first];
}

exports.insert = insert;
exports.retrieve = retrieve;
exports.destroy = destroy;
