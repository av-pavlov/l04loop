"use strict"

const assert = require('assert');
const fs = require('fs');

describe('ЗАДАЧА 3', function() {
	var code;

	it('файл существует ', function() {
		assert(fs.existsSync('L04-03.js'), "Файл не существует");
	});

	it('файл непуст', function() {
		var stats = fs.statSync('L04-03.js');
		var fileSize = stats["size"];
		assert(fileSize > 0, "Файл пуст");
	});

	const pyramid = require('../L04-03.js');

	it('верно при n=1', function() {
		assert.strictEqual(
			pyramid(1).trimRight(), "#\n", "ошибка при n=1");
	});

	it('верно при n=2', function() {
		assert.strictEqual(
			pyramid(2).trimRight(), " #\n###\n", "ошибка при n=2");
	});

	it('верно при n=4', function() {
		assert.strictEqual(
			pyramid(2).trimRight(), "   #\n  ###\n #####\n#######\n", 
			"ошибка при n=4"
		);
	});

	it('дает строку нужной длины при всех n до 20 включительно', function() {
		for (var n = 1; n<21; n++) {
			assert.strictEqual(
				pyramid(n).trimRight().length, n*(3*n+1)/2 - 1,
				"неправильная длина строки при n="+n)
		}
	});
	
	it('дает строку, которая состоит только из решеток, переводов строки и пробелов', function() {
		for (var n = 1; n<21; n++) {
			assert(pyramid(n).match('^[#\n ]*$'), "в строке присутствуют недопустимые символы")
		}
	});
});
