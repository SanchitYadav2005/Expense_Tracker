import { useState, useEffect } from "react";
import axios from "axios";
import ExpneseDetails from "../components/ExpnseDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import ColorRing from 'react-loader-spinner'

function Home() {
  const [expense, setExpense] = useState();
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getExpense = async () => {
      const response = await axios.get("http://localhost:4000/api/expenses");
      const json = response.data;
      setExpense(json);
    };
    getExpense();
  }, [expense]);

  if (expense) {
    // setLoading(false)
    return (
      <>
        <ExpneseDetails expense={expense} />
        <a href="/form">
          <button className="bn29">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </a>
      </>
    );
  } else {
    // setLoading(true)
    return (
      <>
        {/* <ColorRing
  visible={loading}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={["#f79533",
    "#f37055",
    "#ef4e7b",
    "#a166ab",
    "#5073b8",
    "#1098ad",
    "#07b39b",
    "#6fba82"]}
/> */}
        <h1>Resourse not found</h1>
      </>
    );
  }
}

export default Home;
