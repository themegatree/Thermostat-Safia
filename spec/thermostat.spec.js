const Thermostat = require("../src/thermostat")

require = Thermostat
describe('thermostat', function () {
    it('thermostat can go up by 1', function () {
        let thermostat = new Thermostat
        thermostat.up()
        expect(thermostat._temperature).toEqual(21)
    })

    it('thermostat can go down by 1', function () {
        let thermostat = new Thermostat
        thermostat.down()
        expect(thermostat._temperature).toEqual(19)

    })

    it('thermostat can be reset', function () {
        let thermostat = new Thermostat
        thermostat.up()
        //thermostat.up()
        thermostat.reset()
        expect(thermostat._temperature).toEqual(20) 
    })

    it('check usage for med temp', function () {
        let thermostat = new Thermostat 
        expect(thermostat.usage()).toEqual('medium usage')
    })

    it('check usage for low temp', function () {
        let thermostat = new Thermostat 
        thermostat._temperature = 17
        expect(thermostat.usage()).toEqual('low usage')
    })

    it('check usage for high temp', function () {
        let thermostat = new Thermostat 
        thermostat._temperature = 28
        expect(thermostat.usage()).toEqual('high usage')
    })

    it('power saving mode turns turns off', function () {
        let thermostat = new Thermostat
        thermostat.powerSavingMode()
        expect(thermostat._powerSavingMode).toEqual(false)
    })

    it('toggling power saving changes max _temperature', function () {
        let thermostat = new Thermostat
        thermostat.powerSavingMode()
        expect(thermostat._max).toEqual(32)
    })

    it('temp can not exceed max _temperature', function () {
        let thermostat = new Thermostat
        thermostat._temperature = 23
        thermostat.up()
        thermostat.up()
        thermostat.up()
        thermostat.up()
        expect(thermostat._temperature).toEqual(25)
    })
})

// maybe when refactoring include "beforeEach"