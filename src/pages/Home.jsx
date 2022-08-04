import { useState } from "react";
import { Screen, Block } from "components/basic";
import Navi from "components/Navi";

import api from "api";

export default function Home() {
  const [text, setText] = useState("");

  const sendTest = async () => {
    const res = await api.testConnection();
    setText(res.msg);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  return (
    <Screen>
      <Navi />
      <Block>
        <div>This is Home</div>
        <textarea
          className="p-2"
          name="Text1"
          cols="40"
          rows="5"
          value={text}
          onChange={handleChange}
        ></textarea>
        <button onClick={sendTest}>Test</button>
      </Block>
    </Screen>
  );
}
