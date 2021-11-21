import { useState } from "react";
import { Link } from "react-router-dom"
import styles from "./Nav.module.css";

function Nav() {
    let last_known_scroll_position = 0;
    let ticking = false;
    const [scrolling, setScrolling] = useState(false);

    const doSomething = (scroll_pos) => {
        if (scroll_pos >= 10) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    }

    window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function() {
        doSomething(last_known_scroll_position);
        ticking = false;
        });
        ticking = true;
    }
    });

    const onMouseOver = () => setScrolling(true);
    const onMouseOut = () => setScrolling(false);
    
    return <div>
        <nav onMouseOver={onMouseOver} onMouseOut={onMouseOut} style={scrolling ? 
            {backgroundColor : "#4d8076",
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}
             : {backgroundColor : "transparent"}} className={styles.container} >
        <div className={styles.title}>
            <Link to="/react-movie">
            <i class="fab fa-neos"></i>
            <strong>ETFLEX</strong>
            </Link>
        </div>
        <ul className={styles.option__list}>
            <li>Home</li>
            <li>4K</li>
            <li>Trending</li>
            <li>Browser</li>
        </ul>
        <ul className={styles.icon__list}>
            <li><a href="https://twitter.com/?lang=ko" target="_blank"><i class="fab fa-twitter-square"></i></a></li>
            <li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li>
        </ul>
    </nav>
    <div className={styles.null}></div>
    </div>
    
}

export default Nav;