import { useState,useEffect } from "react";
import axios from 'axios';

function Home() {
    const [expense, setExpense] = useState();
    useEffect(()=>{
        const getExpense = async ()=>{
            const response = await axios.get('/api/expenses')
            const json = response.json();
            setExpense(json)
        }
        getExpense();
        console.log(expense)
    }, [])
  return (
    <>
      <h1>hello</h1>
    </>
  );
}

export default Home;
