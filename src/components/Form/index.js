import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import style from 'Styles.module.css'


function FormValidation() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container>
            <Row>
                <Col>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className={style.formu}>
                    <Row className="mb-6">
                        {/* NAME */}
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label className={style.text1}>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"

                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        {/* LAST NAME */}
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label className={style.text1}>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        {/* EMAIL */}
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label className={style.text1}>E-mail</Form.Label>
                            <Form.Control type="text" placeholder="E-mail" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className={style.text1}>Type your Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                </Form>
                </Col>
            </Row>
        </Container>


    );
}

export default FormValidation;