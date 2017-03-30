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
        vm.toggleModal=toggleModal;
        vm.showModal = false;

        function init() {
            console.log("scheduler Controller loaded");
        }
        init();

        function toggleModal(){
          console.log("works");
          vm.showModal=!vm.showModal
        }
    }
})();
