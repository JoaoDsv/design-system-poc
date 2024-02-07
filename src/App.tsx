import { Checkbox } from "./components/Checkbox";
import { css } from "styled-system/css";
import { Flex } from "styled-system/jsx";

function App() {
  return (
    <>
      <div>
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
