/**
 * Created by muigai on 2/23/17.
 */
(function () {
    angular
        .module("BeautyBooks")
        .config(configuration);
    /**
     * Configures the routes for the Single Page Application connecting controllers to views
     * @param $routeProvider
     */
    function configuration($routeProvider) {
        // Define your routes here. Each "view" will have a route path
        // associated with it. Also, you will include a Controller for
        // each view to manipulate binded data
        $routeProvider
            /*
            When the url is root + / the webpage view loaded is the templateUrl set below.
             i.e. when on website.com/ the webpage shows the html in
             */
            .when("/", {
                templateUrl: "views/login/login.html"
            })
            .when("/home", {
                templateUrl: "views/home/home-ytd.html"
            })
            .when("/home/ytd", {
                templateUrl: "views/home/home-ytd.html"
            })
            .when("/home/week", {
                templateUrl: "views/home/home-week.html"
            })
            .when("/home/month", {
                templateUrl: "views/home/home-month.html"
            })
            .when("/home/year", {
                templateUrl: "views/home/home-year.html"
            })
            // Scheduler Routes
            .when("/scheduler", {
                templateUrl: "views/scheduler/scheduler.html"
            })
            // Expenses Routes
            .when("/expenses", {
                templateUrl: "views/expenses/expenses-added.html"
            })
            .when("/expenses/added", {
                templateUrl: "views/expenses/expenses-added.html"
            })
            .when("/expenses/reviewed", {
                templateUrl: "views/expenses/expenses-reviewed.html"
            })
            // Taxes Routes
            .when("/taxes", {
                templateUrl: "views/taxes/taxes.html"
            })
            .when("/view-one", {
                templateUrl: "views/view-one.html"
            })
            .when("/view-two", {
                templateUrl: "views/view-two.html"
            })
            .otherwise({
                redirectTo: "/"
            })
    }

})();
