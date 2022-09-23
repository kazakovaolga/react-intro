import { ComponentMeta } from "@storybook/react";
import {Header} from ".";

export default {
  title: "Example/MyHeader",
  component: Header
} as ComponentMeta<typeof Header>;

// type HeaderLevel = 1 | 2 | 3 | 4 | 5 | 6;
const text="React-Intro";
const level=2;

export const Primary = function() {
  return <Header level={level} text={text} />;
};
