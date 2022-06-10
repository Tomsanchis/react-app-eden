import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./css/App.css";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import logo from "./img/logo90.png";

function App() {
  return (
    <Router>
      <div className="header-container">
        <nav>
          <ul>
            <li>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
      <div className="footer-container">
        <footer>
          <small>Copyright</small>
        </footer>
      </div>
    </Router>
  );
}

export default App;
