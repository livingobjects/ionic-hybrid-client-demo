angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {})

.controller('ProductsCtrl', function($scope, productsService) {
    productsService.getList().then(function(products) {
        $scope.products = products;
    });
})

.controller('ProductCtrl', function($scope, productsService, $state) {
    productsService.getItem($state.params.productId).then(function(product) {
        $scope.product = product;
    });
});