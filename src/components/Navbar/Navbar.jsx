import styles from "./Navbar.module.css";
import logo from '../../img/logo.jpg'

const Navbar = () => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg ${styles.colorFondo}`}>
                <div className="container">
                    <a class="navbar-brand" href="/">
                        <img className={styles.logo} src={logo} alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-around" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item me-5">
                                <a className={`${styles.colorItems} nav-link active fw-bold`} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown me-5">
                                <a className={`${styles.colorItems} fw-bold nav-link dropdown-toggle`} href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Working Holidays
                                </a>
                                <ul className={`dropdown-menu shadow ${styles.colorFondo}`} aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="/">¿Que es una Working Holidays?</a></li>
                                    <li><a className="dropdown-item" href="/">Ver destinos!</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"> 
                            <a className={`${styles.colorItems} nav-link fw-bold`} href="/">¿Quienes Somos?</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar