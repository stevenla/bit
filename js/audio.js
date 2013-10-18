function AudioPlayer() {
    this.sounds = {
        yes: new Audio('audio/bityes.wav'),
        no: new Audio('audio/bitno.wav')
    };
}

AudioPlayer.prototype.yes = function () {
    this.sounds.yes.currentTime = 0.0;
    this.sounds.yes.play();
};

AudioPlayer.prototype.no = function () {
    this.sounds.no.currentTime = 0.0;
    this.sounds.no.play();
};