import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="screen">
      <div className="notfound-code">404 / no such document</div>
      <h1 className="display">Nothing filed here</h1>
      <p className="lede">
        This path does not match any document in the repository. Press{" "}
        <span className="kbd">⌘K</span> to search, or start from the{" "}
        <Link to="/">index</Link>.
      </p>
    </div>
  );
}
