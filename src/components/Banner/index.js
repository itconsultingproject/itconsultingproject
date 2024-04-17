import styles from '../../Styles.module.css';
import banner1 from '../../images/banner-home.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg'


import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
    return (
        <>

            {/*
            <Image src={image} alt='banner' fluid />
            <div className={styles.coverBanner}
                style={{ backgroundImage: `url('/images/banner-${imagem}.jpg')` }}>

            </div>*/}

            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Your IT Partner for Seamless Success</h5>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Empowering Your Digital Success</h5>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Unlocking Your Potential with Cutting-Edge IT Solutions</h5>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>

    )
}

export default Banner;
