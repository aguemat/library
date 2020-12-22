import React from "react";
import InputCheck from ".";

export default {
  title: "Forms/InputCheck",
  component: InputCheck,
};

const Template = (args) => <InputCheck {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  id: "test",
  name: "test",
  labelField: "CheckBox test",
};

// export const primary = () => <Link variant="primary">{"Link"}</Link>;
