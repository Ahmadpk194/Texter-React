import "./Navbar.css";
// import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div
      className={`nav nav-${props.mode} text-${
        props.mode === "dark" ? "light" : "dark"
      }`}
    >
      <div className="logo">{props.logo}</div>
      <ul className={`nav__list nav-${props.mode} `}>
        <li>Home</li>
        <li>About</li>
        <li>CONTACT</li>
      </ul>

      {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>CONTACT</li>
      </ul> */}

      <div className="form-check form-switch centerr">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={props.toggleMode}
        />
        <label
          className="form-check-label label"
          htmlFor="flexSwitchCheckDefault"
        >
          {props.label}
        </label>
      </div>
    </div>
  );
}

export default Navbar;
