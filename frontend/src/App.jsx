import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Routes,Route} from 'react-router-dom';
import Form from "./components/Form";

function App() {
  return (
    <>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
          <Route
            path="/form"
            element={<Form/>}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
