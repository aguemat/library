import React from "react";
import Login from ".";
import { action } from "@storybook/addon-actions";

export default {
  title: "Complex/Login/Normal",
  component: Login,
};

const Template = (args) => <Login {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  actionOnSubmit: (e) => {
    e.preventDefault();
    action("form submitted")(e);
  },
};
