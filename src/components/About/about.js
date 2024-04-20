// AboutUs.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import about from '../../images/about.jpg'
import Banner from 'components/Banner';
import Title from 'components/Title';
import 'bootstrap/dist/css/bootstrap.min.css';


function AboutUs() {
    return (
        <Container>
            <Banner />
            <Title>
                <h1>
                    Cybersecurity and Risk Managment
                </h1>
            </Title>
            <br />
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Img variant="top" src={about} />
                        <Card.Body>
                            <Card.Title>About Our ALLURE</Card.Title>
                            <Card.Text>
                                At ALLURE, we are passionate about leveraging technology to empower businesses and organizations. With 10 years of experience in the IT industry, we have established ourselves as a trusted partner for clients seeking innovative solutions and unparalleled support.

                                Our mission is to provide comprehensive IT services tailored to meet the unique needs of each client. From developing custom software solutions to managing complex IT infrastructure, we offer a full spectrum of services designed to drive efficiency, enhance security, and foster growth.

                                At the core of our business is a team of highly skilled professionals dedicated to delivering exceptional results. We pride ourselves on staying ahead of the curve, constantly exploring emerging technologies and industry best practices to ensure our clients remain at the forefront of innovation.

                                Customer satisfaction is our top priority. We work closely with our clients to understand their goals and challenges, offering strategic guidance and personalized solutions to help them achieve success. Whether you're a small startup or a large enterprise, we have the expertise and resources to support your IT needs every step of the way.

                                Partner with ALLURE and experience the difference of a true IT partner.

                                Let us handle the technology so you can focus on what you do best – growing your business.


                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Contact Us</Card.Title>
                            <Card.Text>
                                Phone: 089-456-7890<br />
                                Email: info@allure.com
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>
            </Row>
            <br />
        </Container>
    );
}

export default AboutUs;

