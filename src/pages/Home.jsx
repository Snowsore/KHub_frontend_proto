import { Screen, Block } from "components/basic";
import Navi from "components/Navi";

export default function Home() {
  return (
    <Screen>
      <Navi />
      <Block>
        <div>This is Home</div>
        <textarea className="p-2" name="Text1" cols="40" rows="5"></textarea>
      </Block>
    </Screen>
  );
}
