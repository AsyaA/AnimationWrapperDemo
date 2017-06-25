var percent = 0;
var paused = true;
var btn = document.getElementById("playPauseBtn");
var divToAnimate = document.getElementById("box");
var slider = document.getElementById("animationSlider");

var onePointPercent = 1, one, two;



btn.addEventListener('click',function (e) {
    if(paused) {
        if (!divToAnimate.classList.contains('animate')) {
            divToAnimate.classList.add('animate');
        }
        divToAnimate.style.webkitAnimationPlayState = "running";
        paused = false;
    } else {
        divToAnimate.style.webkitAnimationPlayState = "paused";
        paused = true;

        if(slider.value !=0 && slider.value != 100) {
            one =  (100 - percent) /(100 - slider.value);
            two =   percent/slider.value ;
            onePointPercent = one > two ? one : two;
        }
        console.log(slider.value + "            " + percent + "      ------------       " + onePointPercent);
    }
});

var t = window.setInterval(function () {
    if(!paused) {
        if(percent < 100)
            percent++;
        else percent = 0;
        console.log(percent);
    }
}, 30);




var oldValue = 75;
slider.addEventListener('input', function () {
    divToAnimate.style.webkitAnimation = 'none';
    divToAnimate.style.animationFillMode = 'forwards';

    var newValue = this.value;
    var orientation = 0;

    if(newValue > oldValue) {
        orientation = 1;
    } else if(newValue < oldValue) {
        orientation = -1;
    }
    oldValue = newValue;


    orientation *= onePointPercent;

    percent += orientation;


    if(percent < 0) percent = 0;
    if(percent >= 100) percent = 99.9;




    console.log(- 3 * percent / 100)
    setTimeout(function () {
        divToAnimate.style.webkitAnimation = '';
        divToAnimate.style.webkitAnimationPlayState = "paused";
        divToAnimate.style.animationDelay = - 3 * percent / 100  + 's';
    }, 1);


});