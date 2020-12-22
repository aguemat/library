import React from "react";
import InputText from ".";

export default {
  title: "Forms/InputText",
  component: InputText,
};

const Template = (args) => <InputText {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  id: "test",
  name: "test",
  fieldType: "text",
  placeholder: "Prueba text",
};
