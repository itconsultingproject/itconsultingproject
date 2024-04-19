import Banner from 'components/Banner';
import styles from '../../../Styles.module.css';
import Title from 'components/Title';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function Cybersecurity() {
    return (
        <>
            <Banner imagem='home' />
            <Title>
                <h1>
                    Cybersecurity and Risk Managment
                </h1>
            </Title>
            <Container fluid="md">
                <Row className="h-100 p-3 justify-content-center align-items-start">
                    <Col md={8} className={styles.testimonials}>

                        <h1 className="text-black">⁠⁠Cybersecurity and Risk Management</h1>
                        <p className="p-2">
                            In today's digital landscape, the threat of cyber attacks is ever-present. At ALLURE, we take cybersecurity seriously. Our comprehensive cybersecurity and risk management services are designed to safeguard your organization's sensitive data, intellectual property, and reputation. We conduct thorough risk assessments to identify vulnerabilities and develop tailored security strategies to mitigate potential threats. From implementing advanced firewalls and encryption protocols to providing employee training and ongoing monitoring, we ensure that your digital assets are protected against evolving cyber threats.
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

export default Cybersecurity;