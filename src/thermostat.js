class Thermostat {
    constructor() {
        this._temperature = 20
        this._powerSavingMode = true
        this._max = 25
    }

    up() {
        if (this._temperature === this._max) { return 'max temperature reached' }
        else { this._temperature++ }
    }

    down() {
        this._temperature--
    }

    reset() {
        this._temperature = 20
    }

    usage() {
       if (this._temperature < 18) { return 'low usage' }
       else if (this._temperature <= 25) { return 'medium usage' }
       else { return 'high usage' }
    }

    powerSavingMode() {
        if (this._powerSavingMode) { this._powerSavingMode = false, this._max = 32 } //checks if pSM is on (true) and if it is assigns it to false
        else { this._powerSavingMode = true, this._max = 25 } //otherwise if it is false assigns it to true
    }
}