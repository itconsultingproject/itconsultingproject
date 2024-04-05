import Banner from "../../components/Banner";
import Card from "../../components/Cards";
import styles from '../../Styles.module.css';
import Title from "../../components/Title";
import text from "../../json/db.json";


function Home () {
    return (
        <>
            
            <Banner imagem="home" />
               <Title className={styles.services} >
                    <h1>Our services</h1>
                </Title>
            <section className={styles.containerHome}>
                {text.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Home;