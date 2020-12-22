import React from "react";
import InputImage from ".";

export default {
  title: "Forms/InputImage",
  component: InputImage,
};

const Template = (args) => <InputImage {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  id: "test",
  name: "test",
  labelField: "Image test",
};

// export const primary = () => <Link variant="primary">{"Link"}</Link>;
