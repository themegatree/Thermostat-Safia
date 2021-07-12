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
})

// maybe when refactoring include "beforeEach"