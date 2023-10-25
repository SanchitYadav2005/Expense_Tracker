import { useState } from "react";
import axios from "axios";

function Form() {
  const [title, setTitle] = useState("");
  const [spend, setSpend] = useState("");
  const [borrow, setBorrow] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const expense = { title, spend, borrow };
    try {
  const response = await axios.post("http://localhost:4000/api/expenses/", expense);
  // Handle the successful response here
  console.log("POST request was successful");
  console.log("Response data:", response.data);

  // Add your code here for what you want to do after the completion.
} catch (error) {
  // Handle any errors that occurred during the request
  console.error("An error occurred:", error);

  // Add your error handling code here.
}


  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Create new entry</h3>
      <div className="main">
      <div className="container">
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Title"
        />
      </div>
      <div className="container">
        <input
          type="number"
          onChange={(e) => setSpend(e.target.value)}
          value={spend}
          placeholder="Spend"
        />
      </div>

      <div className="container">
        <input
          type="number"
          onChange={(e) => setBorrow(e.target.value)}
          value={borrow}
          placeholder="Borrow"
        />
      </div>
      </div>
      
      <button className="bn29 btn" onClick={()=> window.location.reload()}>Submit</button>
    </form>
  );
}

export default Form;
