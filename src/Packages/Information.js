import { Link } from "react-router-dom";

export function Information() {
  return (
    <>
      <h1>Information</h1>
      <Link to="/news/1">News 1</Link>

      <p>
        {" "}
        <Link to="/news/2">News 2</Link>
      </p>
    </>
  );
}
