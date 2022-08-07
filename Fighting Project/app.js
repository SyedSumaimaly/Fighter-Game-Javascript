function player1() {
    swal("Forward : right-key\n Backward : left-key\n Kick: Up-key\n Power: Downward-key\n");
}
function player2() {
    swal("Forward : D\n Backward : A\n Kick: W\n Power: S\n");
}

var image1 = document.getElementById("img1")

var image2 = document.getElementById("img2")

var counter = 0

window.onkeydown = function () {
    console.log(event.keyCode)
    if (event.keyCode == 39) {
        image1.src = "assets/punch.gif"
        counter = counter + 50;
        image1.style.left = counter + "px"
        setTimeout(function () {
            image1.src = "assets/stand.gif"
        }, 1200)
    }
    if (event.keyCode == 37) {
        image1.src = "assets/stand.gif"
        counter = counter - 50;
        image1.style.left = counter + "px"
        setTimeout(function () {
            image1.src = "assets/stand.gif"
        }, 1200)
    }

    if (event.keyCode == 38) {
        image1.src = "assets/kick.gif"
        image1.style.width = "280px"
        setTimeout(function () {
            image1.src = "assets/stand.gif"
            image1.style.width = "260px"
        }, 1000)
    }
    if (event.keyCode == 40) {
        image1.src = "assets/power.gif"
        counter = counter + 50;
        image1.style.left = counter + "px";
        setTimeout(function () {
            image1.src = "assets/stand.gif"
        }, 600)
    }
    if (event.keyCode == 65) {
        image2.src = "assets/walk.gif";
        counter = counter + 50;
        image2.style.right = counter + "px"
        image2.style.width = "160px"
        setTimeout(function () {
            image2.src = "assets/stand2.gif"
            image2.style.width = "120px"
        }, 1200)
    }
    if (event.keyCode == 87) {
        image2.src = "assets/kick2.gif"
        image2.style.width = "280px";
        setTimeout(function () {
            image2.src = "assets/stand2.gif"
            image2.style.width = "120px";
        }, 800)
    }
    if (event.keyCode == 68) {
        image2.src = "assets/stand2.gif";
        counter = counter - 30;
        image2.style.right = counter + "px"
        image2.style.width = "115px"
        setTimeout(function () {
            image2.src = "assets/stand2.gif"
            image2.style.width = "120px"
        }, 500)
    }
    if (event.keyCode == 83) {
        image2.src = "assets/power2.gif";
        image2.style.width = "360px"
        setTimeout(function () {
            image2.src = "assets/stand2.gif"
            image2.style.width = "120px"
        }, 1900)
    }
}

