const navLinks = [
  { name: "home", url: "home", type: "route" },
  { name: "about", url: "about", type: "section" },
  { name: "menu", url: "specials", type: "section" },
  { name: "reservations", url: "reservations", type: "route" },
  { name: "order Online", url: "specials", type: "section" },
  { name: "login", url: "login", type: "route" },
];

const NavLinks = ({ className }) => {
  const handleClick = (anchor) => (e) => {
    const id = anchor;
    const element = document.getElementById(id);

    if (element) {
      e.preventDefault();
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <ul className={className}>
      {navLinks.map(({ name, url, type }, i) => {
        return (
          <li key={i}>
            <a
              onClick={handleClick(url)}
              href={type === "section" ? `/#${url}` : `/${url}`}
            >
              <h4>{name}</h4>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default NavLinks;
