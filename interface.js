window.addEventListener('load', function () {
    const thermostat = new Thermostat
    const up = document.getElementById('up')
    const temperature = document.getElementById('temperature')
    up.addEventListener('click', function () {
        temperature.innerText = thermostat.up()
    })
})