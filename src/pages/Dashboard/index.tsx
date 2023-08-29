import { Button, TextView } from "../../core-components";

export default function Dashboard() {
  return (
    <div>
      <TextView fontSize={30}>Hello, This is my first component</TextView>
      <TextView>1, This is my first component</TextView>
      <TextView>2, This is my first component</TextView>
      <TextView>3, This is my first component</TextView>
      <Button>Click Me</Button>
    </div>
  );
}
