import Banner from "../../components/Banner";
import styles from '../../Styles.module.css';
import Title from "../../components/Title";
import CardImage from "components/Card";
import TestimonialsCrud from "components/TestimonialsCrud";




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
            {/* 
            <div>
                <Testimonials />
            </div>
            
            */}
            
            <div>
                <TestimonialsCrud />
            </div>
            
            
        </>
    )
}

export default Home;