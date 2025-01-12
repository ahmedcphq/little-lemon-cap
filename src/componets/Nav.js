const navLinks = [
  { name: "Home", url: "#" },
  { name: "About", url: "#" },
  { name: "Menu", url: "#" },
  { name: "Reservations", url: "#" },
  { name: "Order Online", url: "#" },
  { name: "login", url: "#" },
];

const Nav = () => {
  return (
    <nav>
      <ul>
        {navLinks.map(({ name, url }) => {
          return (
            <li>
              <a href={url}>{name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Nav;
