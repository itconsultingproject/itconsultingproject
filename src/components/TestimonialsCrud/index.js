import React, { useState, useEffect } from 'react';
import styles from 'Styles.module.css'

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState(() => {
        const storedTestimonials = localStorage.getItem('testimonials');
        return storedTestimonials ? JSON.parse(storedTestimonials) : [];
    });

    useEffect(() => {
        localStorage.setItem('testimonials', JSON.stringify(testimonials));
    }, [testimonials]);

    const addTestimonial = (testimonial) => {
        setTestimonials([...testimonials, testimonial]);
    };

    const updateTestimonial = (index, updatedTestimonial) => {
        const updatedTestimonials = [...testimonials];
        updatedTestimonials[index] = updatedTestimonial;
        setTestimonials(updatedTestimonials);
    };

    const deleteTestimonial = (index) => {
        const updatedTestimonials = testimonials.filter((_, i) => i !== index);
        setTestimonials(updatedTestimonials);
    };

    const [editingIndex, setEditingIndex] = useState(null);

    return (
        <div>

            {/* Render the testimonials here */}
            {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.testimonials}>
                    <div className={styles.testimonialsName}>{testimonial.name} </div>
                    {editingIndex === index ? (
                        <>
                            <input type="text" value={testimonial.text} onChange={(e) => updateTestimonial(index, { ...testimonial, text: e.target.value })} />
                            <button className={styles.buttons} onClick={() => setEditingIndex(null)}>Cancel</button>
                            <button className={styles.buttons} onClick={() => setEditingIndex(null)}>Save</button>
                        </>
                    ) : (
                        <>
                            <div>{testimonial.text}</div>
                            <button className={styles.buttons} onClick={() => setEditingIndex(index)}>Edit</button>
                        </>
                    )}
                    <button className={styles.buttons} onClick={() => deleteTestimonial(index)}>Delete</button>
               
                </div>
            ))}
            {/* Add a form to add a new testimonial */}
            <div className={styles.testimonials}>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const { name, text } = e.target.elements;
                    addTestimonial({ name: name.value, text: text.value });
                    name.value = '';
                    text.value = '';
                }}>
                    <input type="text" name="name" className={styles.inputText} placeholder="Name" required />
                    <input type="text" name="text" className={styles.inputText} placeholder="Testimonial" required />
                    <button className={styles.buttons} type="submit">Add Testimonial</button>
                </form>
            </div>

        </div>
    );
};

export default Testimonials;