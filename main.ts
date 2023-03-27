let LightLevel = 0
let SleepTime = 50
basic.forever(function () {
    LightLevel = 2
    while (LightLevel < 1024) {
        pins.analogWritePin(AnalogPin.P0, LightLevel - 1)
        basic.pause(SleepTime)
        LightLevel = LightLevel * 1.41421356
    }
    LightLevel = 1024
    while (LightLevel > 2) {
        pins.analogWritePin(AnalogPin.P0, LightLevel * 1.41421356)
        basic.pause(SleepTime)
        LightLevel = LightLevel / 1.4142156
    }
})
