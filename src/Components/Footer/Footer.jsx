import { links } from "./Footer.data";
export const Footer = () => {
  const linkListItems = links.map((link) => (
    <li key={link.id} className="navbar__list__element">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="navbar__list__element__link"
        href={link.url}
      >
        {link.name}
        <ion-icon name={link.logo}></ion-icon>
      </a>
    </li>
  ));
  return (
    <footer className="footer">
      <nav className="navbar">
        <ul className="navbar__list">{linkListItems}</ul>
      </nav>
    </footer>
  );
};
