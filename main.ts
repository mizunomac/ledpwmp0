radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        LightLevel = LightLevel * 1.41421356
        if (LightLevel > 1023) {
            LightLevel = 1023
        }
        pins.analogWritePin(AnalogPin.P1, LightLevel)
    } else {
        if (receivedNumber == 2) {
            LightLevel = LightLevel / 1.41421356
            if (LightLevel < 1) {
                LightLevel = 1
            }
            pins.analogWritePin(AnalogPin.P1, LightLevel)
        }
    }
})
let LightLevel = 0
radio.setGroup(123)
basic.forever(function () {
	
})
