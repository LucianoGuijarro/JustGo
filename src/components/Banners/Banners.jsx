import banner from '../../img/Banner.jpg'
import styles from './Banners.module.css';

const Banners = () => {
    return (
        <>
            <div className={styles.contenedor}>
                <img className={styles.img} src={banner} alt="Banner" />
                <h2 className={styles.titulo}>Vivi la experiencia de vivir y trabajar en diferentes paises</h2>
                <p className={styles.text}>Miles de personas ya se animaron, y vos... ¿Te animaras?</p>
            </div>
        </>
    )
}

export default Banners