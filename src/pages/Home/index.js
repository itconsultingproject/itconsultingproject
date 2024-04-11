import Banner from "../../components/Banner";
//import Card from "../../components/Cards";
import styles from '../../Styles.module.css';
import Title from "../../components/Title";
import text from "../../json/db.json";
import Card from 'react-bootstrap/Card';
import CardImage from "components/Card";
import Testimonials from "components/Testimonials";




function Home() {
    return (
        <>
            <Banner />
            <Title className={styles.services} >
                <h1>Our services</h1>
            </Title>
            <div>
              <CardImage />  
            </div>
            <Title>
                <h1>
                    Testimonials
                </h1>
            </Title>
            <div>
                <Testimonials />
            </div>
        </>
    )
}

export default Home;