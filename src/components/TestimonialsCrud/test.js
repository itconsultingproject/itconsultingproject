import React, { useState, useEffect } from 'react';
import styles from 'Styles.module.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const TestimonialsCrud = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [newTestimonial, setNewTestimonial] = useState('');
    const [newName, setNewName] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {
        const storedTestimonials = localStorage.getItem('testimonials');
        if (storedTestimonials) {
          setTestimonials(JSON.parse(storedTestimonials));
        }
      }, []);

    useEffect(() => {
        localStorage.setItem('testimonials', JSON.stringify(testimonials));
    }, [testimonials]);
    
    

    const handleAddTestimonial = () => {
        if (newTestimonial.trim() !== '' && newName.trim() !== '') {
            setTestimonials([...testimonials, { name: newName, testimonial: newTestimonial }]);
            setNewTestimonial('');
            setNewName('');
        }
    };

    const handleDeleteTestimonial = (index) => {
        const updatedTestimonials = [...testimonials];
        updatedTestimonials.splice(index, 1);
        setTestimonials(updatedTestimonials);
    };

    const handleEditTestimonial = (index) => {
        setEditingIndex(index);
        setNewTestimonial(testimonials[index].testimonial);
        setNewName(testimonials[index].name);
    };

    const handleSaveEdit = () => {
        if (newTestimonial.trim() !== '' && newName.trim() !== '') {
            const updatedTestimonials = [...testimonials];
            updatedTestimonials[editingIndex] = { name: newName, testimonial: newTestimonial };
            setTestimonials(updatedTestimonials);
            setEditingIndex(null);
            setNewTestimonial('');
            setNewName('');
        }
    };

    return (
        <Container>
            <Row>
                
                    <div >
                        <ul>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className={styles.testimonialsText} >
                                    <div className={styles.testimonialsName}>{testimonial.name}</div>
                                    <div style={{ padding: "20px" }}>{testimonial.testimonial}</div>
                                    <div>
                                        <button onClick={() => handleEditTestimonial(index)}>Edit</button>
                                        <button onClick={() => handleDeleteTestimonial(index)}>Delete</button>
                                    </div>
                                    <br />   
                                
                                </div>

                            ))}
                        </ul>
                        
                    </div>
  

            </Row>
            
            <Row>
                <div className={styles.testimonialsCrud}>
                    <h2>Testimonials</h2>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        placeholder="Enter name"
                    />
                    <input
                        type="text"
                        value={newTestimonial}
                        onChange={(e) => setNewTestimonial(e.target.value)}
                        placeholder="Enter new testimonial"
                    />
                    {editingIndex !== null ? (
                        <button onClick={handleSaveEdit}>Save Edit</button>
                    ) : (
                        <button onClick={handleAddTestimonial}>Add Testimonial</button>
                    )}

                </div>
            </Row>
        </Container>


    );
};

export default TestimonialsCrud;