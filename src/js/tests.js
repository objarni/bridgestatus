QUnit.test( "hello test", function( assert ) {

	assert.ok( 1 == "1", "Passed!" );
});

// QUnit.test( "assert.async() test", function( assert ) {
//   var done = assert.async();
//   var input = $( "#test-input" ).focus();
//   setTimeout(function() {
//     assert.equal( document.activeElement, input[0], "Input was focused" );
//     done();
//   });
// });

QUnit.test( "börjar i okänt tillstånd", function( assert ) {
	var vm = BridgeStatusViewModel();
	assert.equal('unknown', vm.status());
});
