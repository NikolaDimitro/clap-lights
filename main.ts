input.onSound(DetectedSound.Loud, function () {
    lights0n = !(lights0n)
    if (lights0n) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
let lights0n = false
input.setSoundThreshold(SoundThreshold.Loud, 150)
basic.forever(function () {
	
})
