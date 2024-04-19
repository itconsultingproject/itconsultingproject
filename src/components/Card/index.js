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
import { CardTitle } from 'react-bootstrap';

function CardImage() {
    return (
        <>
            <Container className={styles.card}>
                <Row>
                    <Col>
                        <br />
                        <Card className={styles.singlecard}>
                            <Card.Img variant="bottom" src={itplanning} className={styles.images} alt='it'/>
                            <Card.Body>
                                <Card.Title>
                                    IT Planning
                                </Card.Title>

                                <Card.Text>

                                    Crafting tailored IT roadmaps for your business success.
                                    Our Strategic IT Planning service aligns tech investments with your goals, ensuring efficiency and resilience.
                                    Stay ahead with expert guidance
                                </Card.Text>
                                <Link to='./strategic'>
                                    <Button variant="primary">Find out more...</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col >

                    <Col>
                        <br />
                        <Card className={styles.singlecard}>
                            <Card.Img variant="bottom" src={cyber} className={styles.images} alt='cyber' />
                            <Card.Body>
                                <Card.Title>
                                    Cybersecurity
                                </Card.Title>

                                <Card.Text>
                                    Protecting your digital assets with robust cybersecurity solutions.
                                    Our expertise safeguards your business from evolving threats,
                                    ensuring peace of mind and continuity.
                                </Card.Text>
                                <Link to='./cybersecurity'>
                                    <Button variant="primary">Find out more...</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col >
                    <Col>
                        <br />
                        <Card className={styles.singlecard}>
                            <Card.Img variant="bottom" src={tech} className={styles.images} alt='tech'/> {/* dimensions 100px180 */}
                            <Card.Body>
                                <CardTitle>
                                    Technology Implementation
                                </CardTitle>
                                <Card.Text>
                                    Driving seamless tech integration for your business growth.
                                    Our implementation services streamline processes, enhance efficiency, and maximize ROI,
                                    empowering your digital transformation.
                                </Card.Text>
                                <Link to='./technologyimpl'>
                                    <Button variant="primary">Find out more...</Button>
                                </Link>
                            </Card.Body>

                        </Card>
                    </Col >
                    <Col>
                        <br />
                        <Card className={styles.singlecard}>
                            <Card.Img variant="bottom" src={data} className={styles.images} alt='database' />
                            <Card.Body>
                                <CardTitle>
                                    Database
                                </CardTitle>
                                <Card.Text>
                                    Unlocking the power of data with our database solutions.
                                    From design to optimization, we tailor databases to your needs, ensuring reliability, scalability,
                                    and performance for informed decision-making
                                </Card.Text>
                                <Link to='./datamanagment'>
                                    <Button variant="primary">Find out more...</Button>
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
