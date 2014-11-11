(function () {
    "use strict";
    
    
    var input = document.getElementById('number-of-people'), // input field passing information about number of people
        print, // function printing calculated value
        people = document.getElementById('people'),
        channels = document.getElementById('channels'),
        text = document.querySelector('.wrapper p');
    
    // Function calculates number of connections between people
    function calculate(number) {
        var result = 0; // variable passing result of calculation

        result = (Math.pow(number, 2) - number) / 2;
        return result;
    }
    
    // Function prints calculation results in console
    print = function () {
        var value = parseInt(input.value, 10);
        
        if (!isNaN(value) && text.classList.contains('invisible')) {
            text.classList.remove('invisible');
        } else if (isNaN(value) && !text.classList.contains('invisible')) {
            text.classList.add('invisible');
        } else if (isNaN(value) && text.classList.contains('invisible')) {
            return;
        }
        
        people.innerHTML = value;
        channels.innerHTML = calculate(value);
        
    };
    // event handler
    input.addEventListener('change', print, false);
    
    function createLine(x1, y1, x2, y2) {
        var length = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)),
            angle  = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI,
            transform = 'rotate(' + angle + 'deg)',
            line = $('<div>')
                .appendTo('.sprites-wrapper')
                .addClass('line')
                .css({
                    'position': 'absolute',
                    'transform': transform
                })
                .width(length)
                /*.offset({left: x1, top: y1});*/
                .css('left', x1 + 12 + 'px')
                .css('top', y1 + 12 + 'px');
        return line;
    }
    
    createLine(238, -12, 238, 488);
    createLine(238, -12, -12, 238);
    createLine(238, -12, 488, 238);
}());

