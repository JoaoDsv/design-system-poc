import { Checkbox } from "./components/Checkbox";
import { Button } from "./components/Button";
import { css } from "../styled-system/css";
import { button } from "../styled-system/recipes";
import { Flex } from "../styled-system/jsx";

import { Input } from "./components/Input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/DropdownMenu";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/Table";
type Props = {
  returnHome: () => void;
};

export const Homepage = ({ returnHome }: Props) => {
  return (
    <>
      <button onClick={() => returnHome()}>GOTO Page 1</button>
      <div>
        <Input />

        <Flex alignItems="center" gap="2">
          <DropdownMenu>
            <DropdownMenuTrigger className={button({ variant: "default" })}>
              Open
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Flex>
        <Flex alignItems="center" gap="2">
          <Button variant="default" size="default">
            Button
          </Button>
        </Flex>
        <Flex alignItems="center" gap="2">
          <Checkbox id="terms" />
          <label htmlFor="terms">Accept terms and conditions</label>
        </Flex>
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
      </div>
      <button className={css({ color: "cyan" })}>Here</button>
    </>
  );
};
