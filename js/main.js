(function () {
    "use strict";
    
    
    var input = document.getElementById('number-of-people'), // input field passing information about number of people
        print, // function printing calculated value
        people = document.getElementById('people'),
        channels = document.getElementById('channels'),
        text = document.querySelector('.wrapper p'),
        // TO DO: automation of sprites capturing
        sprites = [document.querySelector('.inner-sprite'),
            document.querySelector('.inner-sprite-two'),
            document.querySelector('.inner-sprite-three'),
            document.querySelector('.inner-sprite-four')],
        line = {}, // line object
        x = 0;
    
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
    
    // constructor Line   
    function Line(element1, element2) {
        this.x1 = $(element1).position().left;
        this.x2 = $(element2).position().left;
        this.y1 = $(element1).position().top;
        this.y2 = $(element2).position().top;
        this.color = '#ffddee';
    }
    Line.prototype.drawLine = function () {
        var length = Math.sqrt(Math.pow(this.x1 - this.x2, 2) + Math.pow(this.y1 - this.y2, 2)),
            angle  = Math.atan2(this.y2 - this.y1, this.x2 - this.x1) * 180 / Math.PI,
            transform = 'rotate(' + angle + 'deg)',
            
            line = document.createElement('div'),
            spriteswrapper = document.querySelector('.sprites-wrapper');
        
        line.setAttribute('class', 'line');
        line.style.position = "absolute";
        line.style.transform = transform;
        line.style.width = length + 'px';
        line.style.left = this.x1 + 12 + 'px';
        line.style.top = this.y1 + 12 + 'px';
        line.style.background = this.color;
        spriteswrapper.appendChild(line);
        return line;
    };
    Line.prototype.setColor = function () {
        // TO DO: pick a random color from colors list
    };
    
    
    while (sprites.length > 0) {
        for (x = 0; x < sprites.length; x += 1) {
            if (x + 1 < sprites.length) {
                line = new Line(sprites[0], sprites[x + 1]);
                line.drawLine();
                line = null;
            }
        }
        sprites.shift();
    }
    
}());

