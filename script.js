document.getElementsById("test").addEventlistener("mouseover", mouseOver);
document.getElementsById("test").addEventlistener("mouseout", mouseOut);

function mouseOver()
{
    document.getElementsById("nom").style.color = "red";
}

function mouseOut()
{
    document.getElementsById("nom").style.color = "black";
}