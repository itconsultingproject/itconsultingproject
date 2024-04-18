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
                        <Card.Img variant="top" src="components/images/about.jpg"/>
                        <Card.Body>
                            <Card.Title>About ALLURE</Card.Title>
                            <Card.Text>
                                At ALLURE, we are passionate about leveraging technology to empower businesses and organizations. With ten years of experience in the IT industry, we have established ourselves as a trusted partner for clients seeking innovative solutions and unparalleled support.

<p> Our mission is to provide comprehensive IT services tailored to meet the unique needs of each client.
From developing custom software solutions to managing complex IT infrastructure, we offer a full spectrum of services designed to drive efficiency, enhance security, and foster growth. </p>

<p> At the core of our business is a team of highly skilled professionals dedicated to delivering exceptional results.
We pride ourselves on staying ahead of the curve and constantly exploring emerging technologies and industry best practices to ensure our clients remain at the forefront of innovation.</p>

<p> Customer satisfaction is our top priority. We work closely with our clients to understand their goals and challenges, offering strategic guidance and personalized solutions to help them achieve success. 
Whether you're a small startup or a large enterprise, we have the expertise and resources to support your IT needs every step of the way.</p>

<p> Partner with ALLURE and experience the difference of a true IT partner. Let us handle the technology so you can focus on what you do best – growing your business.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Contact Us</Card.Title>
                            <Card.Text>
                                Phone: 089-678-5789<br />
                                Email: info@allure.com
                            </Card.Text>
                        </Card.Body>
                        
                    </Card>
                </Col>
            </Row>
            <Row>
                
            </Row>
        </Container>
    );
}

export default AboutUs;

