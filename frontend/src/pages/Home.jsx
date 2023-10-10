import { useState, useEffect } from "react";
import axios from "axios";
import ExpneseDetails from "../components/ExpnseDetails";

function Home() {
  const [expense, setExpense] = useState();
  useEffect(() => {
    const getExpense = async () => {
      const response = await axios.get("http://localhost:4000/api/expenses");
      const json = response.json();
      setExpense(json);
    };
    getExpense();
  }, [expense]);
  if(expense){
    return (
      <>
        <ExpneseDetails expense={expense} />
      </>
    );
  }else{
    return(
      <>
        <h1>Resourse not found</h1>
      </>
    )
  }
}

export default Home;
