import { Link } from "react-router-dom";
import styles from '../../Styles.module.css';
import NavbarLink from "../NavbarLink";

function Navbar () {
    return (
        <header className={styles.navbar}>
            <Link to="./" >
                <img></img>
            </Link>
            <nav>
                <NavbarLink url="./">
                    Home
                </NavbarLink>
                <NavbarLink url="./contactus">
                    Contact Us
                </NavbarLink>
            </nav>
        </header>
    )
}

export default Navbar;