// Blockly.Blocks['read_temt6000'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("read TEMT6000");
//     this.appendValueInput("PINTEMT6000")
//         .setCheck("Number")
//         .appendField("PIN");
//     this.setInputsInline(true);
//     this.setOutput(true, null);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };
// Blockly.Blocks["adc_pin_dummy_input_esp32"] = {
//   init: function () {
//     this.appendDummyInput()
//       .appendField("Analog pin for ESP32")
//       .appendField(new Blockly.FieldDropdown([
//         ["ADC1_CH0  (PIN36)", "36"],
//         ["ADC1_CH1  (PIN37)", "37"],
//         ["ADC1_CH2  (PIN38)", "38"],
//         ["ADC1_CH3  (PIN39)", "39"],
//         ["ADC1_CH4  (PIN32)", "32"],
//         ["ADC1_CH5  (PIN33)", "33"],
//         ["ADC1_CH6  (PIN34)", "34"],
//         ["ADC1_CH7  (PIN35)", "35"],
//         ["ADC2_CH0  (PIN04)", "4"],
//         ["ADC2_CH1  (PIN00)", "0"],
//         ["ADC2_CH2  (PIN02)", "2"],
//         ["ADC2_CH3  (PIN15)", "15"],
//         ["ADC2_CH4  (PIN13)", "13"],
//         ["ADC2_CH5  (PIN12)", "12"],
//         ["ADC2_CH6  (PIN14)", "14"],
//         ["ADC2_CH7  (PIN27)", "27"],
//         ["ADC2_CH8  (PIN25)", "25"],
//         ["ADC2_CH9  (IO26)", "26"]
//       ]), "PIN");
//     this.setOutput(true, "Number");
//     this.setColour(230);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };

// Blockly.Blocks["adc_pin_dummy_input_arduino"] = {
//   init: function () {
//     this.appendDummyInput()
//       .appendField("Analog pin for Arduino")
//       .appendField(new Blockly.FieldDropdown([
//         ["A0", "A0"],
//         ["A1", "A1"],
//         ["A2", "A2"],
//         ["A3", "A3"],
//         ["A4", "A4"],
//         ["A5", "A5"],
//         ["A6", "A6"],
//         ["A7", "A7"]
//       ]), "PINAR");
//     this.setOutput(true, "Number");
//     this.setColour(230);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };

Blockly.Blocks['beginx9c'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("pot1", null,["Plugin.X9C"], ["Plugin.X9C"]), "pot1")
        .appendField("begin");
    this.appendValueInput("CSX9C")
        .setCheck("Number")
        .appendField("CS PIN");
    this.appendValueInput("INCX9C")
        .setCheck("Number")
        .appendField("INC PIN");
    this.appendValueInput("UDX9C")
        .setCheck("Number")
        .appendField("UD PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['setpot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("pot1", null,["Plugin.X9C"], ["Plugin.X9C"]), "pot1")
        .appendField("setpot");
    this.appendValueInput("potpe")
        .setCheck("Number")
        .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};