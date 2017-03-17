(function() {
    angular
        .module("BeautyBooks")
        .controller("HomeWeekController", HomeWeekController)
        .controller("HomeMonthController", HomeMonthController)
        .controller("HomeYTDController", HomeYTDController);

    /*
     * Controls the flow of data for the home-week view
     * @constructor
     */
    function HomeWeekController() {
        let vm = this;

        function init() {
            console.log("Home Week Controller loaded");
        }
        init();
    }

    /*
     * Controls the flow of data for the home-month view
     * @constructor
     */
    function HomeMonthController() {
        let vm = this;

        function init() {
            console.log("Home Month Controller loaded");
        }
        init();
    }

    /*
     * Controls the flow of data for the home-ytd view
     * @constructor
     */
    function HomeYTDController() {
        let vm = this;

        function init() {
            console.log("Home YTD Controller loaded");
        }
        init();
    }

})();