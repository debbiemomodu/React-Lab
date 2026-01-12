import { useEffect } from "react";

function EffectExample() {
  useEffect(() => {
    console.log("Component rendered");
  }, []);

  return <h1>Check the console</h1>;
}

export default EffectExample;
