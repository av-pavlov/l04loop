const assert = require('assert')
const fs = require('fs')
const execSync = require('child_process').execSync


describe('ЗАДАЧА 2', function(){
	var code;

	it('файл существует ', function(){
		assert(fs.existsSync('L04-02.js'), "Файл не существует")
	})

	it('файл непуст', function(){
		var stats = fs.statSync('L04-02.js')
		var fileSize = stats["size"]
		assert(fileSize > 0, "Файл пуст")
	})

	it('не содержит оператор for', function(){
		var code = fs.readFileSync('L04-02.js')
		assert(!code.includes('for'))
	})
	
	it('содержит оператор do.. while', function(){
		var code = fs.readFileSync('L04-02.js')
	 	assert(code.includes('while'))
	 	assert(code.includes('do'))
	})

	var hello = 'Hello world!\n'
	var correct = ''
	for (var i=0; i<100; i++) {
		correct += hello
	}
	
	it('выдает результат правильной длины', function(){
		var res = execSync('node L04-02.js').toString();
		assert.strictEqual(res.length, correct.length, "Длина вывода не равна "+correct.length)
	})

	it('выдает верный результат', function(){
		var res = execSync('node L04-02.js').toString();
		assert.strictEqual(res, correct, "Не равен в точности требуемому")
	})
})