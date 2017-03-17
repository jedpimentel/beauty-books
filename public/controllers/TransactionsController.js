(function() {
    angular
        .module("BeautyBooks")
        .controller("TransactionsAddedController", TransactionsAddedController)
        .controller("TransactionsReviewedController", TransactionsReviewedController);

    /*
     * Controls the flow of data for the transactions-added view
     * @constructor
     */
    function TransactionsAddedController() {
        let vm = this;

        function init() {
            console.log("Transactions Added Controller loaded");
        }
        init();
    }

    /*
     * Controls the flow of data for the transactions-reviewed view
     * @constructor
     */
    function TransactionsReviewedController() {
        let vm = this;

        function init() {
            console.log("Transactions Reviewed Controller loaded");
        }
        init();
    }

})();