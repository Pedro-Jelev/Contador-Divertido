export function Sound() {
    const btnClikcsAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    const forestAudio = new Audio('https://github.com/Pedro-Jelev/Arquivos/blob/main/Project-TimerFocus2.0/audio/forest.mp3?raw=true')
    const rainAudio = new Audio('https://github.com/Pedro-Jelev/Arquivos/blob/main/Project-TimerFocus2.0/audio/rain.mp3?raw=true')
    const coffeeAudio = new Audio('https://github.com/Pedro-Jelev/Arquivos/blob/main/Project-TimerFocus2.0/audio/coffee.mp3?raw=true')
    const fireplaceAudio = new Audio('https://github.com/Pedro-Jelev/Arquivos/blob/main/Project-TimerFocus2.0/audio/fireplace.mp3?raw=true')

    forestAudio.loop = true
    rainAudio.loop = true
    coffeeAudio.loop = true
    fireplaceAudio.loop = true

    const playlist = [forestAudio, rainAudio, coffeeAudio, fireplaceAudio]

    let audio = 0

    function clickButton() {
        btnClikcsAudio.play()
    }

    function endTime() {
        kitchenTimer.play()
    }

    function backAudioPlay() {
        playlist[audio].play()
    }

    function backAudioPause() {
        playlist[audio].pause()
    }

    function selectBackAudio(n) {
        playlist[audio].pause()
        audio = n
        playlist[audio].play()
    }

    return {
        clickButton,
        endTime,
        backAudioPlay,
        backAudioPause,
        selectBackAudio
    }
}
