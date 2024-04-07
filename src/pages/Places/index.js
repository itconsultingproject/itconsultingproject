import Banner from 'components/Banner';
import styles from '../../Styles.module.css';
import Title from 'components/Title';
import { useParams } from 'react-router-dom';
import texts from "../../json/db.json";

function Places() {
    const parameters = useParams();
    const text = texts.find((text) => {
        return text.id === Number(parameters.id);
    });
    return (
        <>
            <Banner imagem='home' />
            <Title>
                <h1>
                    {text.title}
                </h1>
            </Title>
            <section className={styles.containerPlaces}>
                <div className={styles.description}>
                    {text.description}
                </div>
                <div className='video'>
                    

                </div>
            </section>

        </>
    )
}

export default Places;
