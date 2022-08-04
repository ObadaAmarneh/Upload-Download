import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SignIn from "./components/Auth/SignIn/SignIn";
import SignUp from "./components/Auth/SignUp/SignUp";
import UpLoad from "./components/UpLoad/UpLoad";
import Download from "./components/Download/Download";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/Login" element={<SignIn />} />
          <Route exact path="/Signup" element={<SignUp />} />
          <Route exact path="/Home" element={<UpLoad />} />
          <Route exact path="/AdminPage" element={<Download />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
