import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({ text, setText }) {
  const [warningText, setwarningText] = useState("");

  const handleChange = (event) => {
    let newText = event.target.value;

    // basic validation
    if (newText.includes("<script>")) {
      setwarningText("No script tags allowed");

      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setwarningText("No @ symbol allowed");

      newText = newText.replace("@", "");
    } else {
      setwarningText("");
    }
    setText(newText);
  };
  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
      ></textarea>
      <Warning warningText={warningText} />
    </div>
  );
}
