/**
 * Created by asya on 6/25/17.
 */




var percent = 0;
var paused = true;
btn = document.getElementById("playPauseBtn");
divToAnimate = document.getElementById("box");
var slider = document.getElementById("animationSlider");


btn.addEventListener('click',function (e) {
    if(paused) {
        //if (!divToAnimate.classList.contains('animate')) {
            divToAnimate.classList.add('animate');
        //}
        divToAnimate.style.webkitAnimationPlayState = "running";
        paused = false;
    } else {
        divToAnimate.style.webkitAnimationPlayState = "paused";
        paused = true;

        // var w = divToAnimate.offsetWidth;
        // var h = divToAnimate.offsetHeight;
        // var m_t = divToAnimate.getAttribute('margin-top');
        // var m_l = divToAnimate.getAttribute('margin-left');
        // var t = divToAnimate.getAttribute('transform');
        // var c = divToAnimate.getAttribute('background-color');

       // divToAnimate.classList.remove('animate');

        // console.log(w+"  "+h+"  ");
        //
        // divToAnimate.offsetWidth = w;
        // divToAnimate.offsetHeight = h;
        // divToAnimate.setAttribute('margin-top', m_t);
        // divToAnimate.setAttribute('margin-left', m_l);
        // divToAnimate.setAttribute('transform', t);
        // divToAnimate.setAttribute('background-color', c);

       // divToAnimate.style.animationDelay = - 3 * percent / 100 - 0.1 + 's';
    }
});

var t = window.setInterval(function () {
    if(!paused) {
        if(percent < 100)
            percent++;
        else percent = 0;
        // slider.value = percent;
        //console.log(percent);
    }
}, 30);

slider.addEventListener('input', function () {
    divToAnimate.style.webkitAnimation = 'none';
    //divToAnimate.classList.remove('animate');

    divToAnimate.style.webkitAnimation = '';
    divToAnimate.style.animationDelay = - 3 * slider.value / 100  + 's';
    //percent = this.value;
    divToAnimate.style.webkitAnimationPlayState = "paused";
   // console.log(- 3 * slider.value / 100 + 's');
 //  divToAnimate.classList.add('animate');
  //  divToAnimate.classList.add('animate')
 //   divToAnimate.classList.add('animate');

});

divToAnimate.addEventListener("animationiteration", function (e) {
    console.log(e.elapsedTime)
});


