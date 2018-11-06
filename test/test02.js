const assert = require('assert')
const fs = require('fs')
const execSync = require('child_process').execSync


describe('Задача 2', function(){
	var code;

	it('файл существует ', function(){
		assert(fs.existsSync('L04-02.js'), "Файл не существует")
	})

	it('файл непуст', function(){
		var stats = fs.statSync('L04-02.js')
		var fileSize = stats["size"]
		assert(fileSize > 0, "Файл пуст")
	})

	it('содержит оператор while', function(){
		var code = fs.readFileSync('L04-02.js')
		assert(code['includes']('while'),"Где while? А если найду?")
	})

	it('содержит оператор do', function(){
		var code = fs.readFileSync('L04-02.js')
		assert(code['includes']('do'),"Где do? А если найду?")
	})
	
	it('не содержит операторов for', function(){
		var code = fs.readFileSync('L04-02.js')
	 	assert(!code.includes('for'),"Так не понял, а ты че for вставил?")
	})

	hello = 'Hello world!\n'
	correct = ''
	for (var i=0; i<100; i++) {
		correct += hello
	}
	
	it('выдает результат правильной длины', function(){
		res = execSync('node L04-02.js').toString();
		assert.strictEqual(res.length, correct.length, "Длина вывода не равна "+correct.length)
	})

	it('выдает верный результат', function(){
		res = execSync('node L04-02.js').toString();
		assert.strictEqual(res, correct, "Не равен в точности требуемому")
	})
})
