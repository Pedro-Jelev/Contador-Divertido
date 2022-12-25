export function Element() {
    const buttonPlay = document.querySelector('#play')
    const buttonStop = document.querySelector('#stop')
    const buttonIncrease = document.querySelector('#increase ')
    const buttonDecrease = document.querySelector('#decrease ')
    const buttonForest = document.querySelector('#forest')
    const buttonRain = document.querySelector('#rain')
    const buttonCoffee = document.querySelector('#coffee')
    const buttonFireplace = document.querySelector('#fireplace')

    const minuteScreen = document.querySelector('#minute')
    const secondScreen = document.querySelector('#second')

    function getButtonPlay() {
        return buttonPlay
    }

    function getButtonStop() {
        return buttonStop
    }

    function getButtonIncrease() {
        return buttonIncrease
    }

    function getButtonDecrease() {
        return buttonDecrease
    }

    function getButtonForest() {
        return buttonForest
    }

    function getButtonRain() {
        return buttonRain
    }

    function getButtonCoffee() {
        return buttonCoffee
    }

    function getButtonFireplace() {
        return buttonFireplace
    }

    function getMinuteScreen() {
        return minuteScreen
    }

    function getSecondScreen() {
        return secondScreen
    }

    return {
        getButtonPlay,
        getButtonStop,
        getButtonIncrease,
        getButtonDecrease,
        getButtonForest,
        getButtonRain,
        getButtonCoffee,
        getButtonFireplace,
        getMinuteScreen,
        getSecondScreen
    }
}