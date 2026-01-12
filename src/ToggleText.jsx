import { useState } from "react";

export function ToggleText() {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <div>
      {showText && <h1>You clicked me</h1>}
      <button onClick={handleClick}>
        {showText ? "Hide Text" : "Show Text"}
      </button>
    </div>
  );
}
