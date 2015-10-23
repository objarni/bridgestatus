function BridgeStatusViewModel() {
	var self = this;
	self.status = ko.observable('unknown');
}

ko.applyBindings(new BridgeStatusViewModel());
