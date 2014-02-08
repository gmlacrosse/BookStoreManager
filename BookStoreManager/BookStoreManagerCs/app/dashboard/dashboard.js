(function () {
    'use strict';
    var controllerId = 'dashboard';
    angular.module('app').controller(controllerId, ['common', 'datacontext', dashboard]);

    function dashboard(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.news = {
            title: 'Book Store Manager',
            description: 'Book Store Manager is a Angular SPA Application.'
        };
        vm.messageCount = 0;
        vm.books = [];
        vm.title = 'Dashboard';

        activate();

        function activate() {
            var promises = [getMessageCount(), getBooks()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Dashboard View'); });
        }

        function getMessageCount() {
            return datacontext.getMessageCount().then(function (data) {
                return vm.messageCount = data;
            });
        }

        function getBooks() {
            return datacontext.getBooks().then(function (data) {
                return vm.books = data;
            });
        }
    }
})();