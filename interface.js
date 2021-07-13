window.addEventListener('load', function () {
    const thermostat = new Thermostat
    const up = document.getElementById('up')
    const down = document.getElementById('down')
    const temperature = document.getElementById('temperature')
    const reset = document.getElementById('reset')

    up.addEventListener('click', function () {
        temperature.innerText = thermostat.up()
    })

    down.addEventListener('click', function () {
        temperature.innerText = thermostat.down()
    })
    
    reset.addEventListener('click', function () {
        temperature.innerText = thermostat.reset()
    })
})