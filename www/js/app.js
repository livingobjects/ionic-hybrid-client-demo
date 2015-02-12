// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
    }).state('app.products', {
        url: "/products",
        views: {
            'menuContent': {
                templateUrl: "templates/products.html",
                controller: 'ProductsCtrl'
            }
        }
    }).state('app.product', {
        url: "/products/:productId",
        views: {
            'menuContent': {
                templateUrl: "templates/product.html",
                controller: 'ProductCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/products');
})

.factory('productsService', function($q) {
    return {
        getList: getList,
        getItem: getItem
    }

    function getList() {
        var deferred = $q.defer();
        deferred.resolve(getProducts());
        return deferred.promise;
    }

    function getItem(name) {
        return getList().then(function(products) {
            return products[name] || null;
        });
    }

    function getProducts() {
        return {
            "b.lo": {
                name: 'b.lo',
                img: 'http://livingobjects.com/api/images/253/x100',
                title: 'Analytics Software Suite for Network Management',
                excerpt: '<p>b.lo™ is a modular analytics software platform loaded with extensive Network Operation expertise. It uniquely combines <b>Network Performance Management</b> excellence, with business-oriented capabilities to bring unrivalled value to operators and their end-customers.</p>',
                description: '<p>All kinds of analysis can be done simultaneously by all categories of users, using the palette of advanced network tools or interpretive visualization features. In a few clicks, b.lo™ provides comprehensive information that helps both engineering teams troubleshoot complex problems and customer care communicate with simple words.</p><p>Browse the different domains. Explore real-time and historical data side-by-side. Drill-down into the details of your Network. Mix the 4G and VOD traffic on a single graph. Visualize the TOP 10 applications on an IP Network. Aggregate Network Element from a geographical cluster in a single graph. Selected views can then be saved as a template for later health-checks or for reports.</p>'
            },
            "eye.lo": {
                name: 'eye.lo',
                img: 'http://livingobjects.com/api/images/286/x100',
                title: 'Application Visibility and Performance Platform',
                excerpt: '<p>eye.lo™ is a multi-tenant platform that deliver <b>Service Providers</b> with a powerful application-aware management platform, helping them to assure the delivery of WAN connectivity services to their business customers.</p>',
                description: '<p>LivingObjects is pioneering a new way of managing Wide Area Networks (WANs) and the broadband access services provided to enterprise customers. eye.lo™ is a software-only (probe-less) solution takes full advantage of the latest features embedded in routers and leverages the expertise of LivingObjects in Network Performance Management, big-data processing, analytics and interactive user-interface.</p><p>From the thousands of recognized applications or visited web sites, eye.lo™ reports, with an interactive dashboard, the top applications and urls making the bulk of the traffic: Business/leisure applications, web-sites categories, criteria for Top Users, Top conversations, CoS policies between sites, and much more.</p>'
            },
            "app.lo": {
                name: 'app.lo',
                img: 'http://livingobjects.com/api/images/287/x100',
                title: 'Monitor the pulse of your Networks with app.lo',
                excerpt: '<p>app.lo is a decision-support tablet application targeted at Telecom Executives and decision makers. This <b>Business Intelligence</b> embedded application creates an abstract from the global data set of a Network Management System (such as b.lo or others). It enables the user on the move to remain informed with essential network data and communicate with the teams in the field to make quick and efficient decisions.</p>',
                description: '<p>app.lo lets you configure data access according to your organization : Devices, profile, data. You specify via a web-service, the data you want to keep track of in the tablet, coming from .lo solutions or other applications. Through a secure, link data will be automatically download, as soon as the device is connected. The information is available even if the connection is off.</p><p>Choose your KPI, zoom on selected areas, scroll through the history, identify TOPs. Visualize information on a map and assess the outage impact. Get detailed characteristics of pointed site locations. Spot the issue you want to focus on and send it by e-mail. app.lo provides near real-time analysis capability and signals important changes in business conditions (Networks availability, Incidents,..).</p>'
            }
        }
    }
});