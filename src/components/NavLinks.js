import { Link } from "react-router-dom";

const NavLinks = ({ className, links }) => {
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
    <>
      <ul className={className}>
        {links.map(({ name, url, type }, i) => {
          return (
            <li key={i}>
              {type === "section" ? (
                <a
                  href={"/#" + url}
                  onClick={handleClick(url)}
                  aria-label="On Click"
                >
                  <h4>{name}</h4>
                </a>
              ) : (
                <Link to={"/" + url}>
                  <h4>{name}</h4>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default NavLinks;
