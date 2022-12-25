export function Button({ element, sound, timer, display }) {

    element.getButtonPlay().addEventListener('click', () => {
        timer.countDown()
        element.getButtonPlay().setAttribute('disabled', '')
        sound.backAudioPlay
        sound.clickButton()
    })

    element.getButtonStop().addEventListener('click', () => {
        timer.stopCount()
        element.getButtonPlay().removeAttribute('disabled', '')
        sound.backAudioPause()
        sound.clickButton()
    })

    element.getButtonIncrease().addEventListener('click', () => {
        display.setMinute(display.getMinute() + 5)
        sound.clickButton()
    })

    element.getButtonDecrease().addEventListener('click', () => {
        if (display.getMinute() <= 0) { return }
        display.setMinute(display.getMinute() - 5)
        sound.clickButton()
    })

    element.getButtonForest().addEventListener('click', () => {
        sound.selectBackAudio(0)
    })

    element.getButtonRain().addEventListener('click', () => {
        sound.selectBackAudio(1)
    })

    element.getButtonCoffee().addEventListener('click', () => {
        sound.selectBackAudio(2)
    })

    element.getButtonFireplace().addEventListener('click', () => {
        sound.selectBackAudio(3)
    })

}