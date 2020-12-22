import React from "react";
import InputSelect from ".";

export default {
  title: "Forms/InputSelect",
  component: InputSelect,
};

const options = [
  { label: "Option 01", value: "1" },
  { label: "Option 02", value: "2" },
  { label: "Option 03", value: "3" },
];

const Template = (args) => <InputSelect {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  id: "test",
  name: "test",
  labelField: "Select test",
  optionLabel: "label",
  optionValue: "value",
  options: options,
};

// export const primary = () => <Link variant="primary">{"Link"}</Link>;
