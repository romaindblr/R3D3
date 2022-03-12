window.onscroll = function (){

    if (document.documentElement.scrollTop > 15){
        document.getElementById("navbar").style.background = "red";
        document.getElementById("navbar").style.padding = "0px 0px";
    }
    else{
        document.getElementById("navbar").style.background = "";
        document.getElementById("navbar").style.padding = "10px 0px";
    }
}
