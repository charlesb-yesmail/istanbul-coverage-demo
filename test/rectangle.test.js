/*global describe:false, it:false, beforeEach:false, afterEach:false*/

'use strict';


var kraken = require('kraken-js'),
    express = require('express'),
    path = require('path'),
    request = require('supertest'),
	chai = require('chai');

var Rectangle = require('../models/rectangle.js');

chai.should();

describe('Rectangle', function () {
	describe('#constructor()', function() {
		it('creates a default rectangle with no arguments', function() {
			var rectangle = new Rectangle();
			rectangle.getWidth().should.equal(5);
			rectangle.getHeight().should.equal(7);
		});
		it('creates a rectangle with default width', function() {
			var rectangle = new Rectangle(9);
			rectangle.getWidth().should.equal(9);
			rectangle.getHeight().should.equal(7);
		});
		it('creates a rectangle with default height', function() {
			var rectangle = new Rectangle(null,9);
			rectangle.getWidth().should.equal(5);
			rectangle.getHeight().should.equal(9);
		});
		it('creates a rectangle as requested', function() {
			var rectangle = new Rectangle(10, 30);
			rectangle.getWidth().should.equal(10);
			rectangle.getHeight().should.equal(30);
		})
		it('only accepts numeric width', function() {
			() => {
				var rectangle = new Rectangle('foo');
			}.should.throw(Error);
		});
		it('only accepts numeric height', function() {
			() => {
				var rectangle = new Rectangle(10, 'bar');
			}.should.throw(Error);
		});
		it('rejects alphabetic height and width', function() {
			() => {
				var rectangle = new Rectangle('foo', 'bar');
			}.should.throw(Error);
		})
	});
	describe('#width', function() {
		var rectangle;
		beforeEach(() => {
			rectangle = new Rectangle(10, 20);
		});
		it('returns the width', function() {
			rectangle.getWidth().should.equal(10);
		});
		it('can be changed', function() {
			rectangle.setWidth(30);
			rectangle.getWidth().should.equal(30);
		});
		it('should only accept numeric input', function() {
			() => {
				rectangle.setWidth('foo');
			}.should.throw(Error);
		});
	});
	describe('#height', function() {
		var rectangle;
		beforeEach(() => {
			rectangle = new Rectangle(10, 20);
		});
		it('returns the height', function() {
			rectangle.getHeight().should.equal(20);
		});
		it('can be changed', function() {
			rectangle.setHeight(30);
			rectangle.getHeight().should.equal(30);
		});
		it('should only accept numeric input', function() {
			() => {
				rectangle.setHeight('foo');
			}.should.throw(Error);
		});
	});
	describe('#calculateArea', function() {
		var rectangle;
		beforeEach(() => {
			rectangle = new Rectangle(10, 20);
		});
		it('returns the area', function() {
			rectangle.calculateArea().should.equal(200);
		});
	});
	describe('#calculatePerimeter', function() {
		var rectangle;
		beforeEach(() => {
			rectangle = new Rectangle(10, 20);
		});
		it('returns the perimeter', function() {
			rectangle.calculatePerimeter().should.equal(60);
		});
	});
});
