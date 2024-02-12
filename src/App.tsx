import { Checkbox } from "./components/Checkbox";
import { Button } from "./components/Button";
import { css } from "styled-system/css";
import { Flex } from "styled-system/jsx";

import { Input } from "./components/Input";

function App() {
  return (
    <>
      <div>
        <Input />

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
