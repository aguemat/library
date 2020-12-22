import React from "react";
import LoginFormik from "./fomik";
import { action } from "@storybook/addon-actions";

export default {
  title: "Complex/Login/Formik",
  component: LoginFormik,
};

const Template = (args) => <LoginFormik {...args} />;

export const Formik = Template.bind({});
Formik.args = {
  actionOnSubmit: action("Submit Formik form"),
};
