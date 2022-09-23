import { ComponentMeta } from "@storybook/react";
import {Paragraph} from ".";

export default {
  title: "Example/MyParagraph",
  component: Paragraph
} as ComponentMeta<typeof Paragraph>;

const text="Hello";

export const Primary = function() {
  return <Paragraph text={text} />;
};
