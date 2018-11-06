"use strict"

const assert = require('assert');
const fs = require('fs');

describe('ЗАДАЧА 3', function(){
	var code;

	it('файл существует ', function(){
		assert(fs.existsSync('L04-03.js'), "Файл не существует");
	});

	it('файл непуст', function(){
		var stats = fs.statSync('L04-03.js');
		var fileSize = stats["size"];
		assert(fileSize > 0, "Файл пуст");
	});

	const pyramid = require('../L04-03.js');

	it('верно при n=1', function(){
		assert.strictEqual(
			pyramid(1).trimRight(), "#", "ошибка при n=1");
	});

	it('верно при n=2', function(){
		assert.strictEqual(
			pyramid(2).trimRight(), " #\n###", "ошибка при n=2");
	})

	it('верно при n=2', function(){
		var n = 20;
		assert.strictEqual(
			pyramid(n).trimRight().length, n*(3*n+1)/2 - 1,
			"длина неправильная")
	});
	
});
