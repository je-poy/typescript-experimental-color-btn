"use strict";
var Color = /** @class */ (function () {
    function Color() {
        this.codes = "0123456789ABCDEF";
    }
    Color.prototype.generate = function () {
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += this.codes.charAt(Math.floor(Math.random() * 16));
        }
        return color;
    };
    Color.prototype.setBgColor = function (cmp) {
        if (cmp === void 0) { cmp = document.getElementsByTagName('body')[0]; }
        cmp.style.backgroundColor = this.generate();
    };
    return Color;
}());
var obj = new Color();
var button = document.getElementById('click-btn');
button.onclick = function () {
    obj.setBgColor();
    obj.setBgColor(button);
};
