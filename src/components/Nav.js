import Logo from "../assets/Logo.svg";
import "./Nav.css";

const navLinks = [
  { name: "home", url: "#" },
  { name: "about", url: "#" },
  { name: "menu", url: "#" },
  { name: "reservations", url: "#" },
  { name: "order Online", url: "#" },
  { name: "login", url: "#" },
];

const Nav = () => {
  return (
    <header className="header">
      <nav className="nav">
        <img src={Logo} alt="Little Lemon Logo" className="logo" />
        <ul className="links">
          {navLinks.map(({ name, url }, i) => {
            return (
              <li key={i}>
                <a href={url}>
                  <h4>{name}</h4>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
export default Nav;
