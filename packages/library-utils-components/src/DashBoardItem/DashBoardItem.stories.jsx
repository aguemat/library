import React from "react";
import DashboardItem from ".";
import DashBoardRow from "../DashboardRow";

export default {
  title: "Utils/DashBoard/DashboardItem",
  component: DashboardItem,
};

const Template = (args) => (
  <>
    <DashBoardRow>
      <DashboardItem
        {...args.commons}
        numColsXs={args.dash01.xs}
        numColsMd={args.dash01.md}
        numColsLg={args.dash01.lg}
        title={args.dash01.title}
      >
        {args.dash01.text}
      </DashboardItem>
    </DashBoardRow>
    <DashBoardRow>
      <DashboardItem
        {...args.commons}
        numColsXs={args.dash02.xs}
        numColsMd={args.dash02.md}
        numColsLg={args.dash02.lg}
        title={args.dash02.title}
      >
        {args.dash02.text}
      </DashboardItem>
      <DashboardItem
        {...args.commons}
        numColsXs={args.dash03.xs}
        numColsMd={args.dash03.md}
        numColsLg={args.dash03.lg}
        title={args.dash03.title}
      >
        {args.dash03.text}
      </DashboardItem>
      <DashboardItem
        {...args.commons}
        numColsXs={args.dash04.xs}
        numColsMd={args.dash04.md}
        numColsLg={args.dash04.lg}
        title={args.dash04.title}
      >
        {args.dash04.text}
      </DashboardItem>
    </DashBoardRow>
    <DashBoardRow>
      <DashboardItem
        {...args.commons}
        numColsXs={args.dash05.xs}
        numColsMd={args.dash05.md}
        numColsLg={args.dash05.lg}
        title={args.dash05.title}
      >
        {args.dash05.text}
      </DashboardItem>
      <DashboardItem
        {...args.commons}
        numColsXs={args.dash06.xs}
        numColsMd={args.dash06.md}
        numColsLg={args.dash06.lg}
        title={args.dash06.title}
      >
        {args.dash06.text}
      </DashboardItem>
    </DashBoardRow>
  </>
);

export const Dashboard = Template.bind({});
Dashboard.args = {
  dash01: {
    xs: 12,
    md: 12,
    lg: 12,
    title: "Dasboard Item 01",
    text: "ITEM 01",
  },
  dash02: {
    xs: 12,
    md: 4,
    lg: 4,
    title: "Dasboard Item 02",
    text: "ITEM 02",
  },
  dash03: {
    xs: 12,
    md: 4,
    lg: 4,
    title: "Dasboard Item 03",
    text: "ITEM 03",
  },
  dash04: {
    xs: 12,
    md: 4,
    lg: 4,
    title: "Dasboard Item 04",
    text: "ITEM 04",
  },
  dash05: {
    xs: 12,
    md: 6,
    lg: 6,
    title: "Dasboard Item 05",
    text: "ITEM 05",
  },
  dash06: {
    xs: 12,
    md: 6,
    lg: 6,
    title: "Dasboard Item 06",
    text: "ITEM 06",
  },
  commons: {
    height: 200,
  },
};
