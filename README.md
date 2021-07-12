## Verbs:
- Reset
- Increase
- Decrease

## Nouns:
- Thermostat
- Temperature
    - Minimum
    - Maximum
        - Power saving mode
- Current energy usage



|Object|Properties|Messages|Output|
|---|---|---|---|
|Thermostat|Temperature @number|Increase()||
|||Decrease()||
|||Reset()||
|||Check usage()|Usage @string|
||Minimum @number|||
||Maximum @number|||
||Power Saving Mode @boolean||

Specification:

Thermostat starts at 20 degrees
You can increase the temperature with an up function
You can decrease the temperature with a down function
The minimum temperature is 10 degrees
If power saving mode is on, the maximum temperature is 25 degrees
If power saving mode is off, the maximum temperature is 32 degrees
Power saving mode is on by default but it can also be turned off
You can reset the temperature to 20 with a reset function
You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.
(In the challenges where you add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

To complete this challenge, you will need to:
 Model the domain simply
 Use your domain to translate the first specification into a test
 Pass the test
 Translate the next specification
 Repeat until you've run out of tests