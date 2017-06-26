class Animation {
    constructor() {
        this.animationProgress = 0;
        this.paused = true;
        this.playPauseBtn = document.getElementById("playPauseBtn");
        this.divToAnimate = document.getElementById("box");
        this.slider = document.getElementById("animationSlider");
        this.onePointPercent = 0;  //shows the speed of slider. Calculates every time when we pausing animation
        this.sliderOldValue = 75;
    }

    setListeners() {
        this.playPauseBtn.onclick = e => {
            if(this.paused) {
                if (!this.divToAnimate.classList.contains('animate')) {
                    this.divToAnimate.classList.add('animate');
                }
                this.divToAnimate.style.webkitAnimationPlayState = "running";
                this.paused = false;
            } else {
                this.divToAnimate.style.webkitAnimationPlayState = "paused";
                this.paused = true;

                if(this.slider.value !== 0 && this.slider.value !== 100) {
                    let one =  (100 - this.animationProgress) /(100 - this.slider.value);
                    let two =   this.animationProgress/this.slider.value ;
                    this.onePointPercent = one > two ? one : two;
                }
            }
        };


        this.slider.addEventListener('input', e => {
            if(this.paused) {
                document.getElementsByTagName('body')[0].removeChild(this.divToAnimate);

                let sliderNewValue = this.slider.value;
                let movingDirection = 0;
                if(sliderNewValue > this.sliderOldValue) {
                    movingDirection = 1;
                } else if(sliderNewValue < this.sliderOldValue) {
                    movingDirection = -1;
                }
                this.sliderOldValue = sliderNewValue;

                movingDirection *= this.onePointPercent;
                this.animationProgress += movingDirection;

                if(this.animationProgress < 0) this.animationProgress = 0;
                if(this.animationProgress >= 100) this.animationProgress = 99.9;



                this.create();
                this.divToAnimate = document.getElementById("box");
                this.divToAnimate.style.webkitAnimationPlayState = "paused";
                this.divToAnimate.style.animationDelay = - 3 * this.animationProgress / 100  + 's';

            }
        });
    }

    create() {
        let div = document.createElement('div');
        div.id = 'box';
        div.innerHTML = "DIV BOX TO ANIMATE";
        div.classList.add('animate');
        div.style.animationDelay = - 3 * this.animationProgress / 100  + 's';
        document.getElementsByTagName('body')[0].appendChild(div);
        this.divToAnimate = div;
    }


    calculateProgress() {
        window.setInterval( () => {
            if(!this.paused) {
                if(this.animationProgress < 100)
                    this.animationProgress++;
                else this.animationProgress = 0;
            }
        }, 30);

    }

}


let animation = new Animation();
animation.setListeners();
animation.calculateProgress();




