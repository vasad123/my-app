import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Packages/Home";
import { Information } from "./Packages/Information";
import { Introduction } from "./Packages/Introduction";
import { News } from "./Packages/News";
import { ReactRouter } from "./Packages/ReactRouter";

function App() {
  return (
    <>
      <nav>
        <li>
          <div id="mainbar">
            {" "}
            <Link to="/" id="mainLi">
              Home
            </Link>
          </div>
        </li>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} id="tittle" />
        <Route path="/information" element={<Information />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/information/:id" element={<News />} />
        <Route path="/introduction/:id" element={<ReactRouter />} />
      </Routes>
    </>
  );
}

export default App;
