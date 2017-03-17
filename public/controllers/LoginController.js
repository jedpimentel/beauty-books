(function() {
    angular
        .module("BeautyBooks")
        .controller("LoginController", LoginController);

    /*
     * Controls the flow of data for the login view
     * @constructor
     */
    function LoginController($location) {
        let vm = this;
        let open;
        vm.login = login;
        vm.learnMore = learnMore;

        function init() {
            console.log("loaded");
            open = false;
        }
        init();

        function login(e) {
            let loginType = e.currentTarget.id;
            if (loginType == "login-facebook") {
                // Login code for facebook then route to this location on success
                console.log("Login with Facebook");
                $location.url("/home/");
            } else if (loginType == "login-google") {
                // Login code for Google then route to this location on success
                console.log("Login with Google");
                $location.url("/home/");
            }
        }

        function learnMore() {
            const drawer = document.getElementsByClassName("drawer");
            // Work In Progress
            open = !open;
            if (open) {
                Velocity(drawer, {translateY: '50%'}, {duration: 500, easing: "easeInOutQuart"});
            } else {
                Velocity(drawer, {translateY: '150%'}, {duration: 500, easing: "easeInOutQuart"});
            }
        }

    }

    
})();
