(function () {
    'use strict';
    /* GET ALL BUTTONS */
    var output_actual = document.getElementById('calc-output-box').querySelector('.actual');
    var output_full = document.getElementById('calc-output-box').querySelector('.full');
    var result = document.querySelector('[data-result="true"]');
    var clear = document.querySelector('[data-clear="true"]');
    var del = document.querySelector('[data-del="true"]');
    var numbers = document.querySelectorAll('[data-number]');
    var operators = document.querySelectorAll('[data-operator]');
    clear.addEventListener('click', function () {
        ClearOutput();
        console.log('CLEAR');
    });
    /* SET EVENT LISTENERS */
    del.addEventListener('click', function () {
        DelNumberInOutputActual();
        console.log('DEL');
    });
    result.addEventListener('click', function () {
        console.log('RESULT');
    });
    numbers.forEach(function (item) {
        item.addEventListener("click", function () {
            var value = this.getAttribute("data-number");
            writeNumberInOutputActual(value);
            console.log(value);
        });
    });
    operators.forEach(function (item) {
        item.addEventListener("click", function () {
            var value = this.getAttribute("data-operator");
            console.log(value);
        });
    });
    /* CREATE FUNCTIONS */
    function writeNumberInOutputActual(p1) {
        var content = output_actual.textContent;
        output_actual.textContent = content + p1;
        return;
    }
    ;
    function DelNumberInOutputActual() {
        var content = output_actual.textContent.slice(0, -1);
        output_actual.textContent = content;
        return;
    }
    ;
    function ClearOutput() {
        output_actual.textContent = '';
        output_full.textContent = '';
        return;
    }
    ;
})();
