class Thermostat {
    constructor() {
        this.temperature = 20
    }
    up() {
        this.temperature++
    }
    down() {
        this.temperature--
    }
    reset(){
        this.temperature = 20
    }
    usage(){
       if (this.temperature <18) { return 'low usage' }
       else if (this.temperature <=25) { return 'medium usage' }
       else { return 'high usage' }
    }
}
module.exports = Thermostat