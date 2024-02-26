import type { Meta, StoryObj } from "@storybook/react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";

const TableCustom = () => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead w="100px">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead textAlign="right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell fontWeight="medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell textAlign="right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

const meta = {
  title: "Example/Table",
  component: TableCustom,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TableCustom>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "Table",
  },
};
