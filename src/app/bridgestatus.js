function BridgeStatusVM() {
	var vm = {};

	vm.status = ko.observable('unknown');

	vm.check = function() {
		vm.status('checking');
		var protocol = 'http://';
		var key = '0c6d5b58-7482-4889-8d9e-2b4cf89a77d4';
		var host = 'data.goteborg.se';
		var api = '/BridgeService/v1.0/GetGABOpenedStatus/';
		var format = '?format=JSON';
		var url = protocol + host + api + key + format;
		console.log(url);
		$.get(url)
			.success(function(response) {
				if ( response.Value )
					vm.status('up');
				else
					vm.status('down');
				console.log(response);
			})
			.fail(function(response) {
				vm.status("error")
				console.log(response);
			});
	};

	return vm;
}

ko.applyBindings(new BridgeStatusVM());
