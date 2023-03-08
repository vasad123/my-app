import { useParams } from "react-router-dom";
export function News() {
  const { id } = useParams();
  return <> <h1>News{id}</h1></>;
}
