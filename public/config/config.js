/**
 * Created by muigai on 2/23/17.
 */
(function () {
    angular
        .module("BeautyBooks")
        .config(Configuration);

    // function setTab() {
    //     switch ($location.path()) {
    //         case '/home':
    //
    //     }
    // }
    /**
     * Configures the routes for the Single Page Application connecting controllers to views
     * @param $routeProvider
     */
    function Configuration($routeProvider) {
        // Define your routes here. Each "view" will have a route path
        // associated with it. Also, you will include a Controller for
        // each view to manipulate binded data
        $routeProvider
            /*
            When the url is root + / the webpage view loaded is the templateUrl set below.
             i.e. when on website.com/ the webpage shows the html in
             */
            .when("/", {
                templateUrl: "views/login/login.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            // Home Routes
            .when("/home", {
                templateUrl: "views/home/home-ytd.html",
                controller: "HomeYTDController",
                controllerAs: "model"
            })
            .when("/home/year", {
                templateUrl: "views/home/home-ytd.html",
                controller: "HomeYTDController",
                controllerAs: "model"
            })
            .when("/home/week", {
                templateUrl: "views/home/home-week.html",
                controller: "HomeWeekController",
                controllerAs: "model"
            })
            .when("/home/month", {
                templateUrl: "views/home/home-month.html",
                controller: "HomeMonthController",
                controllerAs: "model"
            })
            // Scheduler Routes
            .when("/scheduler", {
                templateUrl: "views/scheduler/scheduler.html",
                controller: "SchedulerController",
                controllerAs: "model"
            })
            // Transactions Routes
            .when("/transactions", {
                templateUrl: "views/transactions/transactions-added.html",
                controller: "TransactionsAddedController",
                controllerAs: "model"
            })
            .when("/transactions/added", {
                templateUrl: "views/transactions/transactions-added.html",
                controller: "TransactionsAddedController",
                controllerAs: "model"
            })
            .when("/transactions/reviewed", {
                templateUrl: "views/transactions/transactions-reviewed.html",
                controller: "TransactionsReviewedController",
                controllerAs: "model"
            })
            // Expenses Routes
            .when("/expenses", {
                templateUrl: "views/expenses/expenses-quarterly-spending.html",
                controller: "ExpensesQuarterlyController",
                controllerAs: "model"
            })
            .when("/expenses/quarterly", {
                templateUrl: "views/expenses/expenses-quarterly-spending.html",
                controller: "ExpensesQuarterlyController",
                controllerAs: "model"
            })
            .when("/expenses/annual", {
                templateUrl: "views/expenses/expenses-annual-spending.html",
                controller: "ExpensesAnnualController",
                controllerAs: "model"
            })
            // Settings Routes
            .when("/settings", {
                templateUrl: "views/settings/settings.html",
                controller: "SettingsController",
                controllerAs: "model"
            })
            .otherwise({
                redirectTo: "/"
            })
    }
})();
