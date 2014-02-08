(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId, ['common', datacontext]);

    function datacontext(common) {
        var $q = common.$q;

        var service = {
            getBooks: getBooks,
            getMessageCount: getMessageCount
        };

        return service;

        function saveNewBook(book){

        }

        function getMessageCount() { return $q.when(72); }

        function getBooks() {
            var books = [
                { title: 'The Hobbit         ', author: 'Tolkien', price: 20 },
                { title: 'War and Peace      ', author: 'Tolstoy', price: 31 },
                { title: 'The Hit            ', author: 'Baldacci', price: 21 },
                { title: 'The Innocent       ', author: 'Baldacci', price: 18 },
                { title: 'C++ Primer         ', author: 'Lippman', price: 18 },
                { title: 'AngularJS in Action', author: 'Ford', price: 41 },
                { title: 'The Descent of Man ', author: 'Darwin', price: 15 }
            ];
            return $q.when(books);
        }
    }
})();