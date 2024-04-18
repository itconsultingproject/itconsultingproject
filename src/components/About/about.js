// AboutUs.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function AboutUs() {
    return (
        <Container>
            <h1>About Us</h1>
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Img variant="top" src="about.jpg" />
                        <Card.Body>
                            <Card.Title>About ALLURE</Card.Title>
                            <Card.Text>
                                Description about our company.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Contact Us</Card.Title>
                            <Card.Text>
                                Phone: 123-456-7890<br />
                                Email: info@example.com
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom" src="contact.jpg" />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <h2>Clients We've Worked With</h2>
                    {/* Add logos of companies here */}
                </Col>
            </Row>
        </Container>
    );
}

export default AboutUs;

