import styles from "./Navbar.module.css";
const Navbar = () =>{
    return(
        <nav className={`${styles.navbar} container`}>
            
            <div className="logo">
               <img src="/images/imgs/logo.png" alt="" />
            </div>

        
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </nav>
    )
}

export default Navbar;