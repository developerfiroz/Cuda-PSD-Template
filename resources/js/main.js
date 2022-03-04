$(document).ready(function(){


// STICKY MENU (SERVICES SECTION)

    $(".for-sticky-menu-js").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });

// MIXITUP (PORTFOLIO SECTION)

    var mixer = mixitup('.container');
});

// MOBILE MENU

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
