input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.clearScreen()
    basic.showString("Hello, these are the instructions for the game, if you are playing on the left then you are B and if you are on the right then you are A, click you button as fast as you  can! Whoever's dot reaches them shall win! First to get to 5 wins! lets GO!")
})
input.onButtonPressed(Button.A, function () {
    Laser_chain_that_slices__u += -0.1
})
input.onButtonPressed(Button.B, function () {
    Laser_chain_that_slices__u += 0.1
})
let SUIIII = 0
let Sui_b = 0
basic.showString("Press the logo for instructions and good luck!")
let Laser_chain_that_slices__u = 2
basic.forever(function () {
    basic.clearScreen()
    led.plot(Math.round(Laser_chain_that_slices__u), 2)
    music.playMelody("D E F E F G F E ", 120)
    if (Laser_chain_that_slices__u < 0) {
        music.playMelody("C G C G C5 C5 C5 C ", 200)
        for (let index = 0; index < 1; index++) {
            basic.showString("Shrek Wins + 1 Point")
            break;
Sui_b += 1
        }
        Laser_chain_that_slices__u = 2
    } else if (Laser_chain_that_slices__u > 4) {
        music.playMelody("C G C G C5 C5 C5 C ", 200)
        for (let index = 0; index < 1; index++) {
            basic.showString("Big JIM WINS +1 point")
            break;
SUIIII += 1
        }
        Laser_chain_that_slices__u = 2
    }
})
