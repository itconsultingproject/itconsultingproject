
import Title from 'components/Title';
import styles from '../../Styles.module.css';
import Banner from 'components/Banner';
import FormValidation from 'components/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Contactus() {
    return (
        <>
            <Banner imagem='home' />
            <Title>
                <h1>Contact us</h1>
            </Title>
            <Container>
                <Row>
                    <Col>
                        <h1 className={styles.formu}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.6828975201875!2d-6.245567723770962!3d53.348932374530605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e8cd86e97e7%3A0x6d51b774ee7fa935!2sFaculdade%20Nacional%20da%20Irlanda!5e0!3m2!1spt-BR!2suk!4v1713256178666!5m2!1spt-BR!2suk" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </h1>
                    </Col>
                    <Col>
                        <FormValidation />
                    </Col>
                    
                </Row>
            </Container>
        </>
    )
}

export default Contactus;

