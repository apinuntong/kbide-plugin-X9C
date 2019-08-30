// Blockly.JavaScript['read_temt6000'] = function(block) {
//   var value_pintemt6000 = Blockly.JavaScript.valueToCode(block, 'PINTEMT6000', Blockly.JavaScript.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code = `analogRead(${value_pintemt6000})`;
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.JavaScript.ORDER_NONE];
// };
// Blockly.JavaScript["adc_pin_dummy_input_esp32"] = function (block) {
//   let dropdown_name = block.getFieldValue("PIN");
//   let code = `${dropdown_name}`;
//   return [code, Blockly.JavaScript.ORDER_ATOMIC];
// };
// Blockly.JavaScript["adc_pin_dummy_input_arduino"] = function (block) {
//   let dropdown_name = block.getFieldValue("PINAR");
//   let code = `${dropdown_name}`;
//   return [code, Blockly.JavaScript.ORDER_ATOMIC];
// };

Blockly.JavaScript['beginx9c'] = function(block) {
  var variable_pot1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('pot1'), Blockly.Variables.NAME_TYPE);
  var value_csx9c = Blockly.JavaScript.valueToCode(block, 'CSX9C', Blockly.JavaScript.ORDER_ATOMIC);
  var value_incx9c = Blockly.JavaScript.valueToCode(block, 'INCX9C', Blockly.JavaScript.ORDER_ATOMIC);
  var value_udx9c = Blockly.JavaScript.valueToCode(block, 'UDX9C', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code =
      `
#EXTINC
#include "X9C.h" 
#END

#VARIABLE
X9C ${variable_pot1};
#END
${variable_pot1}.begin(${value_csx9c},${value_incx9c},${value_udx9c});
\n
`;
  return code;
};

Blockly.JavaScript['setpot'] = function(block) {
  var variable_pot1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('pot1'), Blockly.Variables.NAME_TYPE);
  var value_potpe = Blockly.JavaScript.valueToCode(block, 'potpe', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code =
      `
${variable_pot1}.setPot(${value_potpe},true);
\n
`;
  return code;
};