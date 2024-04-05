
import Title from 'components/Title';
import styles from '../../Styles.module.css';
import Banner from 'components/Banner';
import Card from 'components/Cards';



function Contactus() {
    return (
        <>
            <Banner imagem='home' />
            <Title>
                <h1>Contact us</h1>
            </Title>

            <div className="contact-us-container">
                <div className="left-column">
                    <h2>Contact Us</h2>
                    <p>Fill out the form below to get in touch with us.</p>
                </div>
                <div className="right-column">
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder="Your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" placeholder="Your message"></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>


        </>
    )
}

export default Contactus;

