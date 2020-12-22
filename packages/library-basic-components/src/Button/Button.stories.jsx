import React from "react";
import Button from ".";

export default {
  title: "Basic/Button",
  component: Button,
};

const Template = (args) => <Button {...args}>{args.text}</Button>;

export const Primary = Template.bind({});
Primary.args = { variant: "primary", text: "Button" };

// export const primary = () => <Button variant="primary">{"Button"}</Button>;
