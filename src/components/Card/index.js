import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import itplanning from "../../images/planning.png"
import cyber from "../../images/cyber.png"
import tech from "../../images/tech.jpg"
import data from "../../images/data.png"
import styles from 'Styles.module.css'

function CardImage() {
    return (
        <>
            <Container className={styles.card}>
                <Row>
                    <Col>
                        <br />
                        <Card className={styles.singlecard}>
                            <Card.Img variant="bottom" src={itplanning} />
                            <Card.Body>
                                <Card.Text>
                                    <h1>
                                        Strategic Planning
                                    </h1>
                                    <p>Crafting tailored IT roadmaps for your business success.
                                    Our Strategic IT Planning service aligns tech investments with your goals, ensuring efficiency and resilience.</p>
                                    <p>Stay ahead with expert guidance</p>
                                </Card.Text>
                                <Link to='./strategic'>
                                    <Button variant="primary">Go somewhere</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col >

                    <Col>
                        <br />
                        <Card  className={styles.singlecard}>
                            <Card.Img variant="bottom" src={cyber} />
                            <Card.Body>
                                <Card.Text>
                                    <h1>
                                        Cybersecurity
                                    </h1>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Link to='./cybersecurity'>
                                    <Button variant="primary">Go somewhere</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col >
                    <Col>
                        <br />
                        <Card  className={styles.singlecard}>
                            <Card.Img variant="bottom" src={tech} /> {/* dimensions 100px180 */}
                            <Card.Body>
                                <Card.Text>
                                    <h1>
                                        Technology Implementation
                                    </h1>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Link to='./technologyimpl'>
                                    <Button variant="primary">Go somewhere</Button>
                                </Link>
                            </Card.Body>
                            
                        </Card>
                    </Col >
                    <Col>
                        <br />
                        <Card className={styles.singlecard}>
                           <Card.Img variant="bottom" src={data} /> 
                            <Card.Body>
                                <Card.Text>
                                    <h1>
                                        Data Analysis and Management
                                    </h1>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Link to='./datamanagment'>
                                    <Button variant="primary">Go somewhere</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col >
                </Row>
            </Container>

        </>
    );
}

export default CardImage;
