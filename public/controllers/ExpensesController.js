(function() {
    angular
        .module("BeautyBooks")
        .controller("ExpensesAnnualController", ExpensesAnnualController)
        .controller("ExpensesQuarterlyController", ExpensesQuarterlyController);

    /**
     * Controls the flow of data for the expenses-annual view
     * @constructor
     */
    function ExpensesAnnualController() {
        let vm = this;

        function init() {
            console.log("Expenses Annual Controller loaded");
        }
        init();
    }

    /**
     * Controls the flow of data for the expenses-quarterly view
     * @constructor
     */
    function ExpensesQuarterlyController() {
        let vm = this;

        function init() {
            console.log("Expenses Quarterly Controller loaded");
        }
        init();
    }

})();