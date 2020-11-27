(function () {
    'use strict';
    /* GET ALL BUTTONS */
    var output = document.getElementById('calc-output-box');
    var equal = document.querySelector('button.btn[data-value="="]');
    var reset = document.querySelector('button.btn[data-value="reset"]');
    var symbols = {
        dot: document.querySelector('button.btn[data-value="."]'),
        add: document.querySelector('button.btn[data-value="+"]'),
        remove: document.querySelector('button.btn[data-value="-"]'),
        divide: document.querySelector('button.btn[data-value="÷"]'),
        invert: document.querySelector('button.btn[data-value="+/-"]'),
        multiply: document.querySelector('button.btn[data-value="x"]'),
        percentage: document.querySelector('button.btn[data-value="%"]')
    };
    var numbers = {
        one: document.querySelector('button.btn[data-value="1"]'),
        two: document.querySelector('button.btn[data-value="2"]'),
        three: document.querySelector('button.btn[data-value="3"]'),
        fourth: document.querySelector('button.btn[data-value="4"]'),
        five: document.querySelector('button.btn[data-value="5"]'),
        six: document.querySelector('button.btn[data-value="6"]'),
        seven: document.querySelector('button.btn[data-value="7"]'),
        eight: document.querySelector('button.btn[data-value="8"]'),
        nine: document.querySelector('button.btn[data-value="9"]'),
        zero: document.querySelector('button.btn[data-value="0"]')
    };
    /* SET ALL EVENTS */
    Object.keys(numbers).forEach(function (key, value) {
        document.querySelector("button.btn[data-value=\"" + value + "\"]").addEventListener('click', function () {
            writeNumberInOutput(value.toString());
        });
    });
    reset.addEventListener('click', function () {
        clearOutput();
    });
    /* DEFINE ALL FUNCTIONS */
    var writeInOperation = function (p1) {
    };
    var writeNumberInOutput = function (p1) {
        var content = output.textContent;
        output.textContent = content + p1;
        return;
    };
    var clearOutput = function () {
        output.textContent = '';
    };
})();
