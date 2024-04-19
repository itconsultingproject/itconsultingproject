import Banner from 'components/Banner';
import styles from '../../../Styles.module.css';
import Title from 'components/Title';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function TechnologyImpl() {
    return (
        <>
            <Banner imagem='home' />
            <Title>
                <h1>
                    Technology Implementation and Integration
                </h1>
            </Title>
            <Container fluid="md">
                <Row className="h-100 p-3 justify-content-center align-items-start">
                    <Col md={8} className={styles.testimonials}>

                        <h1 className="text-black">Technology Implementation and Integration</h1>
                        <p className="p-2">
                            Implementing new technologies or integrating existing systems can be complex and daunting. That's where our team of experts comes in. From project inception to completion, we handle every aspect of technology implementation and integration with precision and efficiency. Whether you're transitioning to cloud-based solutions, upgrading software platforms, or integrating disparate systems, we ensure a seamless process that minimizes disruption to your business operations. Our goal is to empower you with the tools and infrastructure needed to stay agile, competitive, and ahead of the curve.
                        </p>
                    </Col>
                    <Col md={8} className={styles.testimonials}>
                        <Card.Img variant="bottom" src={"itplanning"} />
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default TechnologyImpl;