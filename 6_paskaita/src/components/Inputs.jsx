import { useState } from "react";
import FeedbackForm from "./FeedbackForm";

const Inputs = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(0);

  const handleChangeSurname = (event) => {
    setSurname(event.target.value);
  };

  return (
    <div>
      <h2>
        {name} {surname}
      </h2>
      <p>Mano azmius: {age}</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={surname} onChange={handleChangeSurname} />
      <input
        type="number"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
      <br />
      <br />
      <FeedbackForm />
    </div>
  );
};

export default Inputs;
