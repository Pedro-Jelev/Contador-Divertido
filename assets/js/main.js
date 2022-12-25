import { Element } from './element.js'
import { Button } from './button.js'
import { Sound } from './sound.js'
import { Display } from './display.js'
import { Timer } from './timer.js'

const element = Element()
const sound = Sound()
const display = Display(element.getMinuteScreen(), element.getSecondScreen())
const timer = Timer(display, sound)

Button({ element, sound, timer, display })
