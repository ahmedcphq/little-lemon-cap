const footerLinks = [
  {
    title: "Doormat Navigation",
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
    <footer>
      {footerLinks.map(({ title, links }) => {
        return (
          <>
            <h3>{title}</h3>
            <ul>
              {links.map(({ name, url }) => {
                return (
                  <li>
                    <a href={url}>{name}</a>
                  </li>
                );
              })}
            </ul>
          </>
        );
      })}
    </footer>
  );
};
export default Footer;
