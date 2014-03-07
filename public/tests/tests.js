var assert = chai.assert;

suite('Tests', function() {
    
   test('Método bexec', function(){
    var str = 'hola mundo';
	var regexp = /(\d)/;
	regexp.lastIndex = 0;

	assert.equal(regexp.bexec(str), null);
  });

});