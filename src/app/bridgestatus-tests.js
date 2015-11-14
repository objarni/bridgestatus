function mockAjax(succeed, response) {
  $.get = function(url) {
    var promise = {};
    promise.success = function(vmCallback) { if( succeed ) vmCallback(response); return promise; };
    promise.fail = function(vmCallback) { if( !succeed ) vmCallback(response); return promise; };
    return promise;
  };
}

function makeAjaxSucceedWithResponse(response) {
  mockAjax(true, response);
}

function makeAjaxFail() {
  mockAjax(false, {});
}


describe('bridge status view model', function() {

  it('starts in state unknown', function() {
    var vm = BridgeStatusVM();
    expect(vm.status()).toBe('unknown');
  });

  it('goes to checking when user clicks check', function() {
    var vm = BridgeStatusVM();
    vm.check();
    expect(vm.status()).toBe('checking');
  });

  it('goes to down when response is false', function() {

    // Mock out jQuery Ajax GET call
    makeAjaxSucceedWithResponse({Value: false});
    var vm = BridgeStatusVM();
    vm.check();
    expect(vm.status()).toBe('down');
  });

  it('goes to up when response is true', function() {

    // Mock out jQuery Ajax GET call
    makeAjaxSucceedWithResponse({Value: true});
    var vm = BridgeStatusVM();
    vm.check();
    expect(vm.status()).toBe('up');
  });

  it('goes to error when get fails', function() {

    // Mock out jQuery Ajax GET call
    makeAjaxFail();
    var vm = BridgeStatusVM();
    vm.check();
    expect(vm.status()).toBe('error');
  });

});
