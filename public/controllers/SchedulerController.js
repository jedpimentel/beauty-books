(function() {
    angular
        .module("BeautyBooks")
        .controller("SchedulerController", SchedulerController)

    /*
     * Controls the flow of data for the scheduler view
     * @constructor
     */
    function SchedulerController() {
        let vm = this;

        function init() {
            console.log("Scheduler Controller loaded");
        }
        init();
    }
})();