import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";
import Home from "./Home";
import About from "./About";
import GithubUserList from "./GithubUserList";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/*" element={<GithubUserList />} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
