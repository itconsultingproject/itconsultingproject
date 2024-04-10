import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function CardImage() {
  return (
    <>
            <Container>
                <Row>
                <Col>
                <br />
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                              <Link to='./strategic'>
                                  <Button variant="primary">Go somewhere</Button>
                              </Link>
                        </Card.Body>
                        <Card.Img variant="bottom" src="f" />
                    </Card>
                   </Col >
                   
                <Col>
                <br />
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Link to='./cybersecurity'>
                                  <Button variant="primary">Go somewhere</Button>
                              </Link>
                        </Card.Body>
                        <Card.Img variant="bottom" src="holder.js/100px180" />
                    </Card>
                   </Col >
                   <Col>
                <br />
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Link to='./technologyimpl'>
                                  <Button variant="primary">Go somewhere</Button>
                              </Link>
                        </Card.Body>
                        <Card.Img variant="bottom" src="holder.js/100px180" />
                    </Card>
                   </Col >
                   <Col>
                <br />
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Link to='./datamanagment'>
                                  <Button variant="primary">Go somewhere</Button>
                              </Link>
                        </Card.Body>
                     
                        <Card.Img variant="bottom" src="holder.js/100px180" />
                    </Card>
                   </Col >
                </Row>
            </Container>
      
    </>
  );
}

export default CardImage;