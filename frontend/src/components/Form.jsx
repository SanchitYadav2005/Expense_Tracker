import { useState } from "react";
import axios from "axios";

function Form() {
  const [title, setTitle] = useState("");
  const [spend, setSpend] = useState("");
  const [borrow, setBorrow] = useState("");
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const expense = {title,spend,borrow};
    const response = await axios.post("http://localhost:4000/api/expenses/", {
        body: JSON.stringify(expense),
        headers:{
            'Content-type': 'application/json'
        }
    })
    const json = await response.json();
    if(json){
        console.log("new entry successfully added!!");
    }else{
        console.log("error")
    }
  }
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Create new entry</h3>
      <label>Title </label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>Spend: </label>
      <input
        type="number"
        onChange={(e) => setSpend(e.target.value)}
        value={spend}
      />
      <label>Borrow: </label>
      <input
        type="number"
        onChange={(e) => setBorrow(e.target.value)}
        value={borrow}
      />
    </form>
  );
}

export default Form;
