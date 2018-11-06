"use strict"

const assert = require('assert');
const fs = require('fs');

describe('Задача 3', function(){
	var code;

	it('файл существует ', function(){
		assert(fs.existsSync('L04-04.js'), "Файл не существует");
	});

	it('файл непуст', function(){
		var stats = fs.statSync('L04-04.js');
		var fileSize = stats["size"];
		assert(fileSize > 0, "Файл пуст");
	});

	const checkCardNumber = require('../L04-04.js');

	it('верно считает сумму четных с конца при 16 (0000000000200030)', function(){
		assert.strictEqual(
			checkCardNumber('0000000000200030'), "true", "неверно считает сумму четных с конца при 16 (0000000000200030)");
	});

	it('верно считает сумму нечетных с конца при 16 (0000000000000505)', function(){
		assert.strictEqual(
			checkCardNumber('0000000000000505'), "true", "неверно считает сумму нечетных с конца при 16 (0000000000000505)");
	});	
	
	it('верно считает сумму и четных, и нечетных с конца при 16 (0000050525352535)', function(){
		assert.strictEqual(
			checkCardNumber('0000050525352535'), "true", "неверно считает сумму и четных, и нечетных с конца при 16 (0000050525352535)");
	});
	
	it('переживает завал-16 (0000000000000001)', function(){
		assert.strictEqual(
			checkCardNumber('0000000000000001'), "false", "ошибка при завале-16 (0000000000000001)");
	});
	
	it('переживает дефолт-16 (4372282244310005)', function(){
		assert.strictEqual(
			checkCardNumber('4372282244310005'), "true", "ошибка при дефолте-16 (4372282244310005)");
	});
	
	it('верно считает сумму четных с конца при 13 (0000000002030)', function(){
		assert.strictEqual(
			checkCardNumber('0000020302030'), "true", "неверно считает сумму четных с конца при 13 (0000000002030)");
	});
	
	it('верно считает сумму нечетных с конца при 13 (0050505050505)', function(){
		assert.strictEqual(
			checkCardNumber('0050505050505'), "true", "неверно считает сумму нечетных с конца при 13 (0050505050505)");
	});	
	
	it('верно считает сумму и четных, и нечетных с конца при 13 (0050525352535)', function(){
		assert.strictEqual(
			checkCardNumber('0050525352535'), "true", "неверно считает сумму и четных, и нечетных с конца при 13 (0050525352535)");
	});
	
	it('переживает завал-13 (0000000000001)', function(){
		assert.strictEqual(
			checkCardNumber('0000000000001'), "false", "ошибка при завале-13 (0000000000001)");
	});
	
	it('переживает дефолт-13 (4372282244310)', function(){
		assert.strictEqual(
			checkCardNumber('4372282244310'), "false", "ошибка при дефолте-13 (4372282244310)");
	});
	
});
