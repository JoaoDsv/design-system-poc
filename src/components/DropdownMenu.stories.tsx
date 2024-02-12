import type { Meta, StoryObj } from "@storybook/react";

import { Flex } from "../../styled-system/jsx";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./DropdownMenu";

const customDropdownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const meta = {
  title: "Example/DropdownMenu",
  component: customDropdownMenu,
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
} satisfies Meta<typeof customDropdownMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
