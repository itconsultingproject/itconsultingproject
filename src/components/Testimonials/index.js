import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardDeck, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import styles from 'Styles.module.css';
import imgTheo from '../../images/theo.png'
import imgDaniel from '../../images/daniel.png'
import imgSandra from '../../images/sandra.png'
/*
import animal1 from '../assets/animal1.jpg';
import animal2 from '../assets/animal2.jpg';
import animal3 from '../assets/animal3.jpg';
*/

// 

function Testimonials() {

    return (
        <Fragment>

            <Container fluid>
                {/* 
              <Row className=''>
                <Col md={8} className={styles.testimonials}>
                    <h1 className="text-black">Main Title</h1>
                    <p className="text-black pt-3">
                        fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                        tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                        eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a 
                        scelerisque purus semper eget duis
                    </p>
                </Col>
            </Row>
            
            */}

                <Row className="h-100 p-3 justify-content-center align-items-start">
                    <Col md={6} className={styles.testimonials}>
                    <Image src={imgTheo} className={styles.img}roundedCircle />
                        <h1 className="text-black">Theo</h1>
                        <p className="p-2">
                            Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies
                            tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam
                            eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a
                            scelerisque purus semper eget duis
                        </p>
                    </Col>
                    <Col md={6} className={styles.testimonials}>
                    <Image src={imgSandra} className={styles.img} roundedCircle />

                        <h1 className="text-black">Sandra</h1>
                        <p className="p-2">
                            Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies
                            tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam
                            eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a
                            scelerisque purus semper eget duis
                        </p>
                    </Col>
                    <Col md={6} className={styles.testimonials}>
                    <Image src={imgDaniel} className={styles.img} roundedCircle />
                        <h1 className="text-black">Daniel</h1>
                        <p className="p-2">
                            Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies
                            tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam
                            eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a
                            scelerisque purus semper eget duis
                        </p>
                    </Col>
                    <Col md={6} className={styles.testimonials}>
                        <h1 className="text-black">Testimonials 4</h1>
                        <p className="p-2">
                            Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies
                            tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam
                            eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a
                            scelerisque purus semper eget duis
                        </p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}


export default Testimonials;