export function Display(minuteScreen, secondScreen) {

    function getMinute() {
        return Number(minuteScreen.textContent)
    }

    function getSecond() {
        return Number(secondScreen.textContent)
    }

    function setMinute(m) {
        minuteScreen.textContent = String(m).padStart(2, '0')
    }

    function setSecond(s) {
        secondScreen.textContent = String(s).padStart(2, '0')
    }

    return { getMinute, getSecond, setMinute, setSecond }
}