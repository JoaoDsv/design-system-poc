import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";
import { Flex } from "../../styled-system/jsx";

const meta = {
  title: "Example/Checkbox",
  component: Checkbox,
  decorators: [
    (Child) => {
      return (
        <Flex>
          <Child />
        </Flex>
      );
    },
  ],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "Checkbox",
  },
};
