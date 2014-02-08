(function () {
    'use strict';
    var controllerId = 'editor';
    angular.module('app').controller(controllerId,
        ['$scope', 'common', 'model', 'datacontext', editor])
    function editor($scope, common, model, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var vm = this;
        vm.book = new model.Book();
        vm.books = [];
        vm.saveNewBook = saveNewBook;
        vm.getBook = getBook;
        vm.getAllBooks = getAllBooks;
        vm.deleteBook = deleteBook;
        active();

        function active(){
            var promises = [getAllBooks()];
            common.activateController(promises, controllerId)
                .then(function() { log('Activated Book Editor')});
        }

        function saveNewBook() {

        }

        function deleteBook() {

        }

        function getBook() {
        }
        
        function getAllBooks() {
        }
    }

})();