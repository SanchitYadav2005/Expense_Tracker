import { useState, useEffect } from "react";
import axios from "axios";
import ExpneseDetails from "../components/ExpnseDetails";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [expense, setExpense] = useState();
  // const [show, setShow] = useState(false);
  useEffect(() => {
    const getExpense = async () => {
      const response = await axios.get("http://localhost:4000/api/expenses");
      const json = response.data;
      setExpense(json);
    };
    getExpense();
  }, [expense]);
  // const handleChange = () => {
  //   setShow(true);
  // };
  // if (!show) {
  //   const btn = (
  //     <>
  //       <button className="btn" onChange={handleChange}>
  //         <FontAwesomeIcon icon={faPlus} />
  //       </button>
  //     </>
  //   );
  // }
  if (expense) {
    return (
      <>
        <ExpneseDetails expense={expense} />
        <a href="/"><button className="bn29">Button</button></a>
      </>
    );
  } else {
    return (
      <>
        <h1>Resourse not found</h1>
      </>
    );
  }
}

export default Home;
