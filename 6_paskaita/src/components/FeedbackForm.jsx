import { useState } from "react";

const FeedbackForm = () => {
  const [text, setText] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    alert("You have successfully submited feedback :)");
    resetFeedbackText();
  };

  const resetFeedbackText = () => {
    setText("");
  };

  return (
    <form onSubmit={submitForm}>
      <h2>Feedback from</h2>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <br />
      <button type="submit">Submit</button>
      <button type="button" onClick={resetFeedbackText}>
        Clear my feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
