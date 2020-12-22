import React from "react";
import Link from ".";

export default {
  title: "Basic/Links",
  component: Link,
};

const Template = (args) => <Link {...args}>{args.text}</Link>;

export const Simple = Template.bind({});
Simple.args = { variant: "primary", text: "Click me" };

// export const primary = () => <Link variant="primary">{"Link"}</Link>;
