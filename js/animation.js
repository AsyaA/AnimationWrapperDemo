var percent = 0;
var paused = true;
var btn = document.getElementById("playPauseBtn");
var divToAnimate = document.getElementById("box");
var slider = document.getElementById("animationSlider");

var onePointPercent = 1;


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
            let one =  (100 - percent) /(100 - slider.value);
            let two =   percent/slider.value ;
            onePointPercent = one > two ? one : two;
        }
    }
});

window.setInterval(function () {
    if(!paused) {
        if(percent < 100)
            percent++;
        else percent = 0;
        console.log(percent);
    }
}, 30);




var oldValue = 75;
slider.addEventListener('input', function () {
   if(paused) {
       //divToAnimate.style.webkitAnimation = 'none';
       document.getElementsByTagName('body')[0].removeChild(divToAnimate);

       let newValue = this.value;
       let orientation = 0;
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



           create();
           divToAnimate = document.getElementById("box");
           divToAnimate.style.webkitAnimationPlayState = "paused";
           divToAnimate.style.animationDelay = - 3 * percent / 100  + 's';

   }
});


function create() {
    let div = document.createElement('div');
    div.id = 'box';
    div.innerHTML = "DIV BOX TO ANIMATE";
    div.classList.add('animate');
    div.style.animationDelay = - 3 * percent / 100  + 's';
    document.getElementsByTagName('body')[0].appendChild(div);
}





