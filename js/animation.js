var animationProgress = 0;
var paused = true;
var playPauseBtn = document.getElementById("playPauseBtn");
var divToAnimate = document.getElementById("box");
var slider = document.getElementById("animationSlider");

var onePointPercent = 0;  //shows how percent is the one point change in slider


playPauseBtn.onclick = (e) => {
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
            let one =  (100 - animationProgress) /(100 - slider.value);
            let two =   animationProgress/slider.value ;
            onePointPercent = one > two ? one : two;
        }
    }
};

window.setInterval(function () {
    if(!paused) {
        if(animationProgress < 100)
            animationProgress++;
        else animationProgress = 0;
        console.log(animationProgress);
    }
}, 30);




let sliderOldValue = 75;
slider.addEventListener('input', function () {
   if(paused) {
       //divToAnimate.style.webkitAnimation = 'none';
       document.getElementsByTagName('body')[0].removeChild(divToAnimate);

       let sliderNewValue = this.value;
       let movingDirection = 0;
       if(sliderNewValue > sliderOldValue) {
           movingDirection = 1;
       } else if(sliderNewValue < sliderOldValue) {
           movingDirection = -1;
       }
       sliderOldValue = sliderNewValue;

       movingDirection *= onePointPercent;
       animationProgress += movingDirection;

       if(animationProgress < 0) animationProgress = 0;
       if(animationProgress >= 100) animationProgress = 99.9;



           create();
           divToAnimate = document.getElementById("box");
           divToAnimate.style.webkitAnimationPlayState = "paused";
           divToAnimate.style.animationDelay = - 3 * animationProgress / 100  + 's';

   }
});


function create() {
    let div = document.createElement('div');
    div.id = 'box';
    div.innerHTML = "DIV BOX TO ANIMATE";
    div.classList.add('animate');
    div.style.animationDelay = - 3 * animationProgress / 100  + 's';
    document.getElementsByTagName('body')[0].appendChild(div);
}





