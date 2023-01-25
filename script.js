
var n = 1;
function moveUp(){
    if (n == 1){
    document.getElementById("name").style.bottom = "17rem";
    document.getElementById("name").style.left = "3.75rem";
    document.getElementById("about-container").style.height = "14.25rem"
    document.getElementById("about").style.height = "4ch"
    n = 0;
    console.log(n)
    }else{
    document.getElementById("name").style.bottom = "2.25rem";
    document.getElementById("about-container").style.height = "0"
    document.getElementById("about").style.height = "0ch"
    setTimeout(() => {
        document.getElementById("name").style.left = "2.75rem";
    }, 500);
    n = 1;
    console.log(n)
    }
}