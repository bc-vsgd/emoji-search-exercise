// Img
import logo_react from "../img/logo_react.png";
import logo_reacteur from "../img/Logo_Reacteur.avif";
import logo_github from "../img/logo_github.png";
import logo_linkedin from "../img/logo_linkedin.png";
// Icons
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// <i class="fa-brands fa-linkedin"></i>

const Footer = () => {
  return (
    <footer>
      <div>
        <span>Made with</span>
        <a
          href="https://react.dev/blog/2023/03/16/introducing-react-dev"
          target="_blank"
        >
          <img src={logo_react} alt="Logo React" />
          React
        </a>
        <span>at</span>
        <a href="https://www.lereacteur.io/" target="_blank">
          <img src={logo_reacteur} className="circle-img" alt="Logo Reacteur" />
          Le Reacteur
        </a>
        <span>by</span>
        <a href="https://github.com/bc-vsgd" target="_blank">
          Benoît Charles
          <img src={logo_github} alt="Logo Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/beno%C3%AEt-charles-b641672a6/"
          target="_blank"
        >
          <img src={logo_linkedin} alt="Logo Linkedin" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
