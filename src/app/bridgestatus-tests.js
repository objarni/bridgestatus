console.log('hej');

requirejs(["./require-config"],	function(config) {
	console.log('hej2');
	requirejs(['qunit'], function(QUnit) {

		console.log('hej3');
		
		QUnit.test( "True is true i.e. I have a working unit test framework", function( assert ) {
			assert.ok( 1 == "1", "Passed!" );
		});

		// QUnit.test( "börjar i okänt tillstånd", function( assert ) {
		// 	var vm = BridgeStatusViewModel();
		// 	assert.equal('unknown', vm.status());
		// });

		// QUnit.test( "assert.async() test", function( assert ) {
		//   var done = assert.async();
		//   var input = $( "#test-input" ).focus();
		//   setTimeout(function() {
		//     assert.equal( document.activeElement, input[0], "Input was focused" );
		//     done();
		//   });
		// });
	})
});
