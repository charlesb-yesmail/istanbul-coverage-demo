'use strict';

var Rectangle = function(width, height) {
	if (width == undefined) {
		width = 5;
	}
	this.setWidth(width);
	if (height == undefined) {
		height = 7;
	}
	this.setHeight(height);
};

Rectangle.prototype.getHeight = function() {
	return this.height;
};

Rectangle.prototype.setHeight = function(height) {
	if (typeof height !== 'number') {
		throw new Error('"height" must be a number.');
    }
	this.height = height;
};

Rectangle.prototype.getWidth = function() {
	return this.width;
};

Rectangle.prototype.setWidth = function(width) {
	if (typeof width !== 'number') {
		throw new Error('"width" must be a number.');
    }
	this.width = width;
};

Rectangle.prototype.calculateArea = function() {
	return this.height * this.width;
};

Rectangle.prototype.calculatePerimeter = function() {
	return (2 * this.height) + (2 * this.width);
};

module.exports = Rectangle;
