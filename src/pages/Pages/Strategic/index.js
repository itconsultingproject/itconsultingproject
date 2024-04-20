import Banner from 'components/Banner';
import styles from '../../../Styles.module.css';
import Title from 'components/Title';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



function Strategic() {
    return (
        <>
            <Banner imagem='home' />
            <Title>
                <h1>
                    Strategic IT Planning
                </h1>
            </Title>
            <Container fluid="md">
                <Row className="h-100 p-3 justify-content-center align-items-start">
                    <Col md={8} className={styles.testimonials}>
                        <p className="p-2">
                            At ALLURE, we understand that a well-defined IT strategy is crucial for driving business success. Our strategic IT planning services begin with a thorough assessment of your current IT infrastructure, business objectives, and industry trends. We collaborate closely with your team to develop a customized IT roadmap that aligns with your long-term goals and maximizes ROI. Whether it's optimizing existing systems, investing in new technologies, or enhancing cybersecurity measures, we ensure that every aspect of your IT strategy is designed to propel your business forward.

                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Strategic;
