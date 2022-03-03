window.onscroll = function () {

    if (document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.background = "black";
    }
    else {
        document.getElementById("navbar").style.background = "white";
    }
