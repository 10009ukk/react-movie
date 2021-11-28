import styles from "./Footer.module.css";
import {Link} from "react-router-dom";

function Footer({num}) {
    return <li>
          <Link to={`page/${num}`}>{num}</Link>
    </li>
}

export default Footer;