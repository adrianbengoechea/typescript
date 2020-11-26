'use strict';
var field1 = document.getElementById('first');
var field2 = document.getElementById('second');
var submit = document.getElementById('submit');
var add = function (p1, p2) {
    return p1 + p2;
};
submit.addEventListener('click', function () {
    console.log(add(+field1.value, +field2.value));
});
