
// Services.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Services() {
    return (
        <Container>
            <h1>Our Services</h1>
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Img variant="top" src="service1.jpg" />
                        <Card.Body>
                            <Card.Title>Service 1</Card.Title>
                            <Card.Text>
                                Description for Service 1.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Service 2</Card.Title>
                            <Card.Text>
                                Description for Service 2.
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom" src="service2.jpg" />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Img variant="top" src="service3.jpg" />
                        <Card.Body>
                            <Card.Title>Service 3</Card.Title>
                            <Card.Text>
                                Description for Service 3.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Service 4</Card.Title>
                            <Card.Text>
                                Description for Service 4.
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom" src="service4.jpg" />
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Services;


