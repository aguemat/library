import React from "react";
import Title from ".";

export default {
  title: "Basic/Title",
  component: Title,
};

const Template = (args) => <Title {...args}>{args.text}</Title>;

export const Simple = Template.bind({});
Simple.args = { text: "Hello wolrd!" };
