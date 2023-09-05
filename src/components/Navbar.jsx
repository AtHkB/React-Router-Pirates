import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/">All Pirates</NavLink>
      <NavLink to="linlin">Big Mom</NavLink>
      <NavLink to="kaidou">Kaidou</NavLink>
      <NavLink to="shanks">Shanks</NavLink>
      <NavLink to="newgate">White Beard</NavLink>
      <NavLink to="strawhats">Straw Hats</NavLink>
    </div>
  );
}
