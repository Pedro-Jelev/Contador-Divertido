export function Button({ element, sound, timer, display }) {

    element.getButtonPlay().addEventListener('click', () => {
        timer.countDown()
        element.getButtonPlay().setAttribute('disabled', '')
        sound.backAudioPlay()
        disableMute()
        sound.clickButton()
    })

    element.getButtonStop().addEventListener('click', () => {
        timer.stopCount()
        element.getButtonPlay().removeAttribute('disabled', '')
        sound.backAudioPause()
        enableMute()
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
        sound.selectBackAudio(0)
        disableMute()
    })

    element.getButtonRain().addEventListener('click', () => {
        sound.selectBackAudio(1)
        disableMute()
    })

    element.getButtonCoffee().addEventListener('click', () => {
        sound.selectBackAudio(2)
        disableMute()
    })

    element.getButtonFireplace().addEventListener('click', () => {
        sound.selectBackAudio(3)
        disableMute()
    })

    element.getButtonSoundOn().addEventListener('click', () => {
        sound.Off()
        toggleButtonMute()
        sound.clickButton()
    })

    element.getButtonSoundOff().addEventListener('click', () => {
        sound.On()
        toggleButtonMute()
        sound.clickButton()
    })

    function toggleButtonMute() {
        element.getButtonSoundOn().classList.toggle('hidden')
        element.getButtonSoundOff().classList.toggle('hidden')
    }

    function disableMute() {
        element.getButtonSoundOn().classList.remove('hidden')
        element.getButtonSoundOff().classList.add('hidden')
        sound.On()
    }

    function enableMute() {
        element.getButtonSoundOn().classList.add('hidden')
        element.getButtonSoundOff().classList.remove('hidden')
        sound.Off()
    }
}
