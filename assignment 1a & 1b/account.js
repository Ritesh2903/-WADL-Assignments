var LoginForm=document.getElementById("LoginForm");
        var RegForm=document.getElementById("RegForm");
        var Indicator=document.getElementById("Indicator");

        function register() {
        RegForm.style.transition = "none";
        LoginForm.style.transition = "none";
        Indicator.style.transition = "none";

        RegForm.style.transform = "translateX(0px)";
        LoginForm.style.transform = "translateX(0px)";
        Indicator.style.transform = "translateX(100px)";
    }

    function login() {
        RegForm.style.transition = "none";
        LoginForm.style.transition = "none";
        Indicator.style.transition = "none";

        RegForm.style.transform = "translateX(300px)";
        LoginForm.style.transform = "translateX(300px)";
        Indicator.style.transform = "translateX(0px)";
    }

    
