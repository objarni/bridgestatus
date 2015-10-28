requirejs(["./require-config"], function(config) {

	requirejs(["ko", "jquery"], function(ko, $) {

		function BridgeStatusViewModel() {
			var self = this;

			self.status = ko.observable('Nere eller uppe, vet inte!');

			self.check = function() {
				console.log('check');
				var protocol = 'http://';
				var key = '0c6d5b58-7482-4889-8d9e-2b4cf89a77d4';
				var host = 'data.goteborg.se';
				var api = '/BridgeService/v1.0/GetGABOpenedStatus/';
				var format = '?format=JSON';
				$.get(protocol + host + api + key + format)
 				.success(function(response) {
 					if ( response.value )
 						self.status('Uppe');
 					else
 						self.status('Nere');
					console.log(response);
				})
				.fail(function(response) {
					self.status("Fail!")
					console.log(reponse);
				});
			};

		}

		ko.applyBindings(new BridgeStatusViewModel());

	});

});


