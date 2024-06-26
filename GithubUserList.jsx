import { Route, Routes, Link } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";

const GithubUserList = () => {
  return (
    <div>
      <h1>Github User List</h1>
      <nav>
        <ul>
          <li>
            <Link to="octocat">Octocat</Link>
          </li>
          <li>
            <Link to="anotheruser">Another User</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<div>Add a user and select it</div>} />
        <Route path=":username" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
};

export default GithubUserList;
