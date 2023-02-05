export function Button({ element, sound, timer, display }) {

    element.getButtonPlay().addEventListener('click', () => {
        timer.countDown()
        element.getButtonPlay().setAttribute('disabled', '')
        sound.clickButton()
    })

    element.getButtonStop().addEventListener('click', () => {
        timer.stopCount()
        element.getButtonPlay().removeAttribute('disabled', '')
        sound.clickButton()
    })

    element.getButtonIncrease().addEventListener('click', () => {
        display.setMinute(display.getMinute() + 5)
        sound.clickButton()
    })

    element.getButtonDecrease().addEventListener('click', () => {
        if (display.getMinute() <= 4) { return }
        display.setMinute(display.getMinute() - 5)
        sound.clickButton()
    })

    element.getButtonForest().addEventListener('click', () => {
        sound.isMuted()
        sound.selectBackAudio(0)
        sound.backAudioPlay()
    })

    element.getButtonRain().addEventListener('click', () => {
        sound.isMuted()
        sound.selectBackAudio(1)
        sound.backAudioPlay()
    })

    element.getButtonCoffee().addEventListener('click', () => {
        sound.isMuted()
        sound.selectBackAudio(2)
        sound.backAudioPlay()
    })

    element.getButtonFireplace().addEventListener('click', () => {
        sound.isMuted()
        sound.selectBackAudio(3)
        sound.backAudioPlay()
    })

    element.getButtonSoundOn().addEventListener('click', () => {
        enableMute()
    })

    element.getButtonSoundOff().addEventListener('click', () => {
        disableMute()
        sound.clickButton()
    })

    element.getInputTimer()

    function disableMute() {
        element.getButtonSoundOn().classList.remove('hidden')
        element.getButtonSoundOff().classList.add('hidden')
        console.log("cheguei até disableMute")
        sound.isMuted(false)
    }

    function enableMute() {
        element.getButtonSoundOn().classList.add('hidden')
        element.getButtonSoundOff().classList.remove('hidden')
        console.log("cheguei até enableMute")
        sound.isMuted(true)
    }
}
