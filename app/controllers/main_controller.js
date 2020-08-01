var app = angular.module("school_app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/views/home.html"
    })
    .when("/page1", {
        templateUrl : "app/views/page1.html"
    })
    .when("/page2", {
        templateUrl : "app/views/page2.html"
    })
    .when("/page3", {
        templateUrl : "app/views/page3.html"
    })
    .when("/page4", {
        templateUrl : "app/views/page4.html"
    })
    .when("/page5", {
        templateUrl : "app/views/page5.html"
    });
});