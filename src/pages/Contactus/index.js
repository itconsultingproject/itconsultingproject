
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
                            TEST
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

