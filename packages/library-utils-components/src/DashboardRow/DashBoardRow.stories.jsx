import React from "react";
import DashBoardRow from ".";

export default {
  title: "Utils/DashBoard/DashBoardRow",
  component: DashBoardRow,
};

const Template = (args) => (
  <>
    <DashBoardRow {...args}>
      <div>Test RoW01</div>
    </DashBoardRow>
    <DashBoardRow {...args}>
      <div>Test RoW02</div>
    </DashBoardRow>
    <DashBoardRow {...args}>
      <div>Test RoW03</div>
    </DashBoardRow>
  </>
);
export const Rows = Template.bind({});
Rows.args = {};
