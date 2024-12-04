import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-base-200">
      <div className="navbar max-w-5xl mx-auto">
        <div className="navbar-start">
          <Link className="btn btn-primary font-bold text-2xl " to="/">
            TODOS
          </Link>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <Link className="link link-primary " to="./create">
            Create
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
