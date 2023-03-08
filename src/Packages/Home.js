
import { Link } from "react-router-dom";
export function Home() {
  return (
    <>
      {" "}
      <h1>Homepage!!</h1>
      <ul>
        {" "}
        <li>
          <Link to="/information">Information</Link>
        </li>
        <li>
          <Link to="/introduction">Introduction</Link>
        </li>
      </ul>{" "}
    </>
  );
}
