import { Link } from "react-router-dom";

export function Introduction() {
  return (
    <>
      {" "}
      <h1>Introduction</h1>
      <p>
        {" "}
        <Link to="/introduction/reactrouter1"> ReactRouter 1</Link>
      </p>
      <Link to="/introduction/reactrouter2"> ReactRouter 2</Link>
    </>
  );
}
