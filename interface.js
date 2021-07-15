window.addEventListener('load', function () {
    const thermostat = new Thermostat
    const up = document.getElementById('up')
    const down = document.getElementById('down')
    const temperature = document.getElementById('temperature')
    const powerSavingModeDisplay = document.getElementById('PowerSavingModeDisplay')
    const reset = document.getElementById('reset')
    const powerSavingMode = document.getElementById('PowerSavingMode')
    const usage = document.getElementById('usage')

    up.addEventListener('click', function () {
        temperature.innerText = thermostat.up()
        usage.innerText = thermostat.usage()
    })

    down.addEventListener('click', function () {
        temperature.innerText = thermostat.down()
        usage.innerText = thermostat.usage()
    })

    reset.addEventListener('click', function () {
        temperature.innerText = thermostat.reset()
        usage.innerText = thermostat.usage()
    })

    powerSavingMode.addEventListener('click', function () {
        thermostat.powerSavingMode()
        powerSavingModeDisplay.innerText = thermostat.getPowerSavingMode()

    })

    $(document).ready(function () {
        $("#up").click(function () {
            // click on this up button and reset will go missing. 
            $("#reset").hide();
        });
    });

    // find the element we're using (get element with id) set the = to a variable
    // we need to edit our up and down functions so that they run our usage function from thermostat class after temperature changed 
})

