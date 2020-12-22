import React from "react";
import InputTexarea from ".";

export default {
  title: "Forms/InputTexarea",
  component: InputTexarea,
};

const Template = (args) => <InputTexarea {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  id: "Text",
  name: "test",
  placeholder: "Prueba text",
};
