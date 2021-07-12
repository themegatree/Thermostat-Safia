const Thermostat = require("../src/thermostat")

require = Thermostat
describe('thermostat', function () {
    it('thermostat can go up by 1', function () {
        let thermostat = new Thermostat
        thermostat.up()
        expect(thermostat.temperature).toEqual(21)
    })
    it('thermostat can go down by 1', function () {
        let thermostat = new Thermostat
        thermostat.down()
        expect(thermostat.temperature).toEqual(19)

    })
    it('thermostat can be reset', function () {
        let thermostat = new Thermostat
        thermostat.up()
        //thermostat.up()
        thermostat.reset()
        expect(thermostat.temperature).toEqual(20) 
    })
    it('check usage', function () {
        let thermostat = new Thermostat 
        expect(thermostat.usage()).toEqual('medium usage')
    })
    it('check usage', function () {
        let thermostat = new Thermostat 
        thermostat.temperature = 17
        expect(thermostat.usage()).toEqual('low usage')
    })
    it('check usage', function () {
        let thermostat = new Thermostat 
        thermostat.temperature = 28
        expect(thermostat.usage()).toEqual('high usage')
    })
})

// maybe when refactoring include "beforeEach"