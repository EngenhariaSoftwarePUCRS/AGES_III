import { Link, useParams, useSearchParams } from "react-router";

function About() {
    const { count } = useParams();
    const [searchParams] = useSearchParams();
    const c2 = searchParams.get("c2");

  return (
    <div>
      <h1>About</h1>
      <p>Path param count: {count}</p>
      <p>Search param 'c2': {c2}</p>
      <Link to={"/"}>App</Link>
    </div>
  )
}

export default About
