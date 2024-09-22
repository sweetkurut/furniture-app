import { Link, NavLink } from "react-router-dom";
import styles from "./style.module.scss";
import {
  FaCartShopping,
  FaCircleUser,
  FaMagnifyingGlass,
} from "react-icons/fa6";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <Link to={"/"} className={styles.header_title}>
          Avion
        </Link>

        <div className={styles.header_menus}>
          <nav className={styles.nav}>
            <Link to={"/"} className={styles.nav_link}>
              Home
            </Link>
            <Link to={"/products"} className={styles.nav_link}>
              Products
            </Link>
            <Link to={"/about"} className={styles.nav_link}>
              About
            </Link>
          </nav>

          <div className={styles.headerTop_icons}>
            <FaMagnifyingGlass className={styles.icon} />
            <FaCartShopping className={styles.icon} />
            <FaCircleUser className={styles.icon} />
          </div>
        </div>
      </div>
      <div className={styles.menus_i}>
        <div>
          <NavLink to={"#"}>Plant pots</NavLink>
        </div>
        <div>
          <NavLink to={"#"}>Ceramics</NavLink>
        </div>
        <div>
          <NavLink to={"#"}>Tables</NavLink>
        </div>
        <div>
          <NavLink to={"#"}>Chairs</NavLink>
        </div>
        <div>
          <NavLink to={"#"}>Crockery</NavLink>
        </div>
        <div>
          <NavLink to={"#"}>Tableware</NavLink>
        </div>
        <div>
          <NavLink to={"#"}>Cutlery</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
