import React from "react";
import InputRadioButton from ".";

export default {
  title: "Forms/InputRadioButtonGroip",
  component: InputRadioButton,
};

const options = [
  { label: "Option 01", value: "1" },
  { label: "Option 02", value: "2" },
  { label: "Option 03", value: "3" },
];

const Template = (args) => <InputRadioButton {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  id: "test",
  name: "test",
  labelField: "Select option",
  optionLabel: "label",
  optionValue: "value",
  options: options,
};
