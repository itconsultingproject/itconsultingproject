import Banner from 'components/Banner';
import styles from '../../../Styles.module.css';
import Title from 'components/Title';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



function Datamanagment() {
    return (
        <>
            <Banner imagem='home' />
            <Title>
                <h1>
                    Data Management and Analytics
                </h1>
            </Title>
            <Container fluid="md">
                <Row className="h-100 p-3 justify-content-center align-items-start">
                    <Col md={8} className={styles.testimonials}>
                        <p className="p-2">
                            Data is the lifeblood of modern businesses, but harnessing its full potential can be challenging. Our data management and analytics services are designed to help you unlock actionable insights from your data assets. Whether you're dealing with structured or unstructured data, our experts can assist you with data warehousing, cleansing, integration, and visualization. We leverage advanced analytics tools and techniques to derive meaningful insights that drive informed decision-making and business growth. From predictive modeling to real-time reporting, we empower you with the tools and knowledge needed to turn data into a competitive advantage.
                        </p>
                    </Col>
                  
                </Row>
            </Container>



        </>
    )
}



export default Datamanagment;