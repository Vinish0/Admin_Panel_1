import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
// import "./assets/css/sb-admin-2.css"
// import "./assets/vendor/fontawesome-free/css/all.min.css"
import Dashboard from "./MainComponent/Dashboard";
import Buttons from "./MainComponent/Buttons";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import Blank from "./components/Blank";
import Error404 from "./components/Error404";
import MainCard from "./MainComponent/MainCard";
import MainColors from "./MainComponent/MainColors";
import MainBorder from "./MainComponent/MainBorder";
import MainAnimations from "./MainComponent/MainAnimations";
import MainCharts from "./MainComponent/MainCharts";
import MainTable from "./MainComponent/MainTable";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div class="container-fluid">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/buttons" element={<Buttons />} />
                  <Route path="/cards" element={<MainCard />} />
                  <Route path="/colors" element={<MainColors />} />
                  <Route path="/borders" element={<MainBorder />} />
                  <Route path="/animations" element={<MainAnimations />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/forgot" element={<ForgotPassword />} />
                  <Route path="/error" element={<Error404 />} />
                  <Route path="/blank" element={<Blank />} />
                  <Route path="/charts" element={<MainCharts />} />
                  <Route path="/tables" element={<MainTable />} />
                </Routes>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
