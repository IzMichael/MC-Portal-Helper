function run() {
    var input = document.getElementById('input').value;
    var outputBox = document.getElementById('output');

    var coords = input.split(" ");
    var toMath = coords.slice(0, 5);
    
    var inX = toMath[0];
    var inY = toMath[1];
    var inZ = toMath[2];
    
    var outX = Math.floor(inX/8);
    var outY = inY;
    var outZ = Math.floor(inZ/8);

    if (toMath.length > 2) {
        var output = outX + ' ' + outY + ' ' + outZ;
        outputBox.innerHTML = output;
    }
}