import { useState } from "react";

function FormExample() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button type="submit">Submit</button>

      {submittedName && <h2>Hello {submittedName}</h2>}
    </form>
  );
}

export default FormExample;
 