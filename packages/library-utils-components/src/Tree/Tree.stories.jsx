import React from "react";
import Tree from ".";

export default {
  title: "Utils/Tree",
  component: Tree,
};
const data = [
  { id: "2", parent: "1", text: "Text 02", title: "Title 02" },
  { id: "3", parent: "1", text: "Text 03", title: "Title 03" },
  { id: "4", parent: "2", text: "Text 04", title: "Title 04" },
];

const parent = {
  id: "1",
  text: "Test Tree",
  title: "Test Title",
};

const Template = (args) => <Tree {...args} />;
export const Simple = Template.bind({});
Simple.args = {
  nameParentId: "parent",
  idNode: "id",
  data: data,
  parentNode: parent,
  idNodeTitle: "title",
  idNodeText: "text",
  idImageNode: "image",
};
