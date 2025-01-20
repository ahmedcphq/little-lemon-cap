import "./Footer.css";
import Logo from "../assets/FooterLogo.png";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Home", url: "#" },
      { name: "About", url: "#" },
      { name: "Menu", url: "#" },
      { name: "Reservations", url: "#" },
      { name: "Order Online", url: "#" },
      { name: "login", url: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Adress", url: "#" },
      { name: "Phone number", url: "#" },
      { name: "email", url: "#" },
    ],
  },
  {
    title: "Social Media Links",
    links: [
      { name: "Facebook", url: "#" },
      { name: "Instagram", url: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <img src={Logo} alt="little lemon logo" />
        {footerLinks.map(({ title, links }, i) => {
          return (
            <div key={i}>
              <h5>{title}</h5>
              <ul className="links">
                {links.map(({ name, url }, i) => {
                  return (
                    <li key={i}>
                      <a href={url}>
                        <h3>{name}</h3>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
};
export default Footer;
