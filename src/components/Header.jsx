import { Link } from "react-router-dom";
import Img from "../assets/image.js"; 

function Header() {
  const scrollToForm = () => {
    document.querySelector("#apply").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={Img.logo} alt="TechSpira Logo" />
        </Link>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#domain">Domains</a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button onClick={scrollToForm}>Apply</button>
      </nav>
    </header>
  );
}

export default Header;
