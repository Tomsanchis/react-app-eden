import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import logo from "./img/logo90.png";
import { Navigation } from "./components/styles/Navigation.styled";
import { Footer } from "./components/styles/Footer.styled";

function App() {
  return (
    <Router>
      <div className="header-container">
        <Navigation>
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
        </Navigation>
        <Routes>
          <Route path="*" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
      <div className="footer-container">
        <Footer>
          <footer>
            <small>Copyright</small>
          </footer>
        </Footer>
      </div>
    </Router>
  );
}

export default App;
