import styles from './GridDestinos.module.css'
import imagenBerlin from '../../img/Berlin.jpg'

const GridDestinos = () => {
  return (
    <>
    <h2 className='fs-1 fw-bold m-5 text-center'>Destinos Working Holidays</h2>
    <div className="container my-5">
        <div className={`${styles.grid} py-4 row justify-content-beetween`}>
            <div className={`${styles.cardDestinos} col-5 col-sm-5 col-md-5 col-lg-2 col-xl-2 shadow border p-0`}>
                <img className={`${styles.imagen} img-fluid`} src={imagenBerlin} alt="Berlin" />
                <p className='text-center pt-3 fs-4 fw-bold'>Alemania</p>
            </div>
            <div className={`${styles.cardDestinos} col-5 col-sm-5 col-md-5 col-lg-2 col-xl-2 shadow border p-0`}>
                <img className={`${styles.imagen} img-fluid`} src={imagenBerlin} alt="Berlin" />
                <p className='text-center pt-3 fs-4 fw-bold'>Alemania</p>
            </div>
            <div className={`${styles.cardDestinos} col-5 col-sm-5 col-md-5 col-lg-2 col-xl-2 shadow border p-0`}>
                <img className={`${styles.imagen} img-fluid`} src={imagenBerlin} alt="Berlin" />
                <p className='text-center pt-3 fs-4 fw-bold'>Alemania</p>
            </div>
            <div className={`${styles.cardDestinos} col-5 col-sm-5 col-md-5 col-lg-2 col-xl-2 shadow border p-0`}>
                <img className={`${styles.imagen} img-fluid`} src={imagenBerlin} alt="Berlin" />
                <p className='text-center pt-3 fs-4 fw-bold'>Alemania</p>
            </div>
            <div className={`${styles.cardDestinos} col-5 col-sm-5 col-md-5 col-lg-2 col-xl-2 shadow border p-0`}>
                <img className={`${styles.imagen} img-fluid`} src={imagenBerlin} alt="Berlin" />
                <p className='text-center pt-3 fs-4 fw-bold'>Alemania</p>
            </div>
            <div className={`${styles.cardDestinos} col-5 col-sm-5 col-md-5 col-lg-2 col-xl-2 shadow border p-0`}>
                <img className={`${styles.imagen} img-fluid`} src={imagenBerlin} alt="Berlin" />
                <p className='text-center pt-3 fs-4 fw-bold'>Alemania</p>
            </div>
            <div className={`${styles.cardDestinos} col-5 col-sm-5 col-md-5 col-lg-2 col-xl-2 shadow border p-0`}>
                <img className={`${styles.imagen} img-fluid`} src={imagenBerlin} alt="Berlin" />
                <p className='text-center pt-3 fs-4 fw-bold'>Alemania</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default GridDestinos