(function() {
    angular
        .module("BeautyBooks")
        .controller("SettingsController", SettingsController)

    /*
     * Controls the flow of data for the settings view
     * @constructor
     */
    function SettingsController() {
        let vm = this;

        function init() {
            console.log("Settings Controller loaded");
        }
        init();
    }
})();