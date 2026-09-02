import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="screen">
      <div className="notfound-code">404 — rejected, no such claim on file</div>
      <h1 className="display">Nothing filed here</h1>
      <p className="lede">
        This path does not match any document in the repository. Try the search,
        or start from the <Link to="/">index</Link>.
      </p>
      <span className="margin-note margin-note--block">
        ↳ the one page I didn't write a case study about
      </span>
    </div>
  );
}
