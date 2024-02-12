import { Checkbox } from "./components/Checkbox";
import { Button } from "./components/Button";
import { css } from "styled-system/css";
import { button } from "styled-system/recipes";
import { Flex } from "styled-system/jsx";

import { Input } from "./components/Input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/DropdownMenu";

function App() {
  return (
    <>
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
      </div>
      <button className={css({ color: "cyan" })}>Here</button>
    </>
  );
}

export default App;
