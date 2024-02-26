import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { Flex } from '../../../styled-system/jsx';

const meta = {
  title: 'Example/Button',
  component: Button,
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
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => <Button {...args}>Button</Button>,
};
