

let videoPlayer = {
    togglePlay: function(selector){
        if(selector.paused || selector.ended){
            this.play(selector);
        }else{
            this.pause(selector);
        }
    },
    play: function(selector){
        selector.play();
    },
    pause: function(selector){
        selector.pause();
    },

    mute: function(selector){
        selector.muted = true;
    },
    unMute: function(selector){
        selector.muted = false;
    },
    updateVolumeValue: function(selector, value){
        selector.volume = value;
    }

}
// document.body.addEventListener("mousemove", function () {
//     document.getElementById("video").click();
//     console.log("vao");
//     selector.play();
// })
// export default videoPlayer;