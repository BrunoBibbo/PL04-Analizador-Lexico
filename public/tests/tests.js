var assert = chai.assert;

suite('Tests', function() {
    
   test('Método bexec', function(){
    var str = 'hola mundo';
	var regexp = /(\d)/;
	regexp.lastIndex = 0;

	assert.equal(regexp.bexec(str), null);
  });

  test('Parser comentario', function() {
      var parse = make_parse();
      var input = "/* holaaa */";
      var str, tree;
      try {
	  tree = parse(input);
	  str = JSON.stringify(tree, ['key', 'name', 'message',
	      'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
      } catch (e) {
	  str = JSON.stringify(e, ['name', 'message', 'from', 'to', 'key',
                'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
      }
      assert.deepEqual(str, "null");
    });

  test('Parser valor', function(){
    var parse = make_parse();
	var input = "var x = 15;";

	var str, tree;
    try {
      tree = parse(input);
      str = JSON.stringify(tree, ['key', 'name', 'message',
           'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
    } catch (e) {
      str = JSON.stringify(e, ['name', 'message', 'from', 'to', 'key',
              'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
    }

	assert.equal("{\n    \"value\": \"=\",\n    \"arity\": \"binary\",\n    \"first\": {\n        \"value\": \"x\",\n        \"arity\": \"name\"\n    },\n    \"second\": {\n        \"value\": 15,\n        \"arity\": \"literal\"\n    }\n}", str);
  });

  test('Error de entrada', function() 
  {
	window.onload=function() 
	{
		$("#INPUT").val("esto no es código");
		main();
		assert.match($("#OUTPUT").innerHTML, /(?:Type)?Error/i);
	}
  });

});