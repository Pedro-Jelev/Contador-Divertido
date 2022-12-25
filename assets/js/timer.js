export function Timer(display, sound) {
    let timeOut

    function countDown() {
        timeOut = setTimeout(() => {
            let minute = Number(display.getMinute())
            let second = Number(display.getSecond())
            let isFinished = minute <= 0 && second <= 0

            if (isFinished) {
                sound.endTime()
                return
            }

            if (second <= 0) {
                second = 60
                --minute
            }

            second -= 1
            display.setMinute(minute)
            display.setSecond(second)
            countDown()
        }, 1000)
    }

    function stopCount() {
        clearTimeout(timeOut)
    }

    return { countDown, stopCount }
}