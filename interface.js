window.addEventListener('load', function () {
    const thermostat = new Thermostat;

    $(document).ready(function () {

        $("#up").click(function () {
            $("#temperature").text(thermostat.up());
            $("#usage").text(thermostat.usage());
        });

        $("#down").click(function(){
            $("#temperature").text(thermostat.down());
            $("#usage").text(thermostat.usage());
          });


        $("#reset").click(function() {
            $("#temperature").text(thermostat.reset())
            $("#usage").text(thermostat.usage());
        });


        $("#PowerSavingMode").click(function() {
            thermostat.powerSavingMode()
            $("#PowerSavingModeDisplay").text(thermostat.getPowerSavingMode())
        });

    });

    $(document).ready(function () {

    });
});
