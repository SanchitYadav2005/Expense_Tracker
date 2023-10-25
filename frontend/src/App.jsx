import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Routes,Route} from 'react-router-dom';

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
        </Routes>
      </div>
    </>
  );
}

export default App;
