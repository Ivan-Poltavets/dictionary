import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Button from "../UI/Button/Button";
import { DICTIONARY_ROUTE, HOME_ROUTE } from "../../router/paths";

const Navbar = () => {
    return (
      <div className={styles.Navbar}>
        <div className={styles.NavLinks}>
          <div>
            <Link to={HOME_ROUTE}><h2 className={styles.Logo}>Logo</h2></Link>
          </div>
          <div className={styles.Links}>
            <div>
              <Link to={DICTIONARY_ROUTE}>Dictionary</Link>
            </div>
            <div>
                <Link to={"/"}>Flashcards</Link>
            </div>
            <div>
            <Link to={"/"}>Mini-games</Link>
            </div>
            <div>
            <Link to={"/"}>Add words</Link>
            </div>
          </div>
        </div>
        <div className={styles.Auth}>
          <Button variant="outlined">Sign up</Button>
          <Button variant="filled">Sign in</Button>
        </div>
      </div>
    );
}

export default Navbar;