import { ComponentMeta } from "@storybook/react";
import {Accordion} from ".";

export default {
    title: "Example/MyAccordion",
    component: Accordion,
    argTypes: {
        color:["green","yellow"]
    },
    parameters: {
        actions: {
            handles: ["click"],
        },
    }
} as ComponentMeta<typeof Accordion>;

const text = "This is accordion expamle";

export const Primary = function() {
  return <Accordion text={text} />;
};
