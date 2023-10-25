import { useState, useEffect } from "react";
import axios from "axios";
import ExpnseDetails from "../components/ExpenseDetails";
import Form from "../components/Form"; // Import the Form component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [expense, setExpense] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false); // State for form visibility

  useEffect(() => {
    const getExpense = async () => {
      const response = await axios.get("http://localhost:4000/api/expenses");
      const json = response.data;
      setExpense(json);
    };
    getExpense();
  }, []);

  // Function to show the form
  const showForm = () => {
    setFormVisible(true);
  };

  if (expense) {
    return (
      <>
        {expense.map((expense, index) => (
          <ExpnseDetails key={index} expense={expense} />
        ))}

        {/* Button to show the form */}
        <button className="bn29" onClick={showForm}>
          <FontAwesomeIcon icon={faPlus} />
        </button>

        {/* Render the Form component if isFormVisible is true */}
        {isFormVisible && <Form onClose={() => setFormVisible(false)} />}
      </>
    );
  }
}

export default Home;
