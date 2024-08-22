import Button from "../../components/UI/Button/Button";
import styles from "./HomePage.module.css";
import image from "../../assets/image.png";
import { Link } from "react-router-dom";
import BlackBoxIcon from "../../components/UI/BlackBoxIcon/BlackBoxIcon";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.header_content}>
                    <div className={styles.header_content_text}>
                        <h1>Discover a World of Words with Us</h1>
                        <p>Expand your vocabulary, learn new phrases, and improve your language skills with our interactive dictionary</p>
                        <div style={{marginTop: '40px'}}>
                            <Button style={{marginRight: '15px'}} variant="filled">Try</Button>
                            <Button variant="outlined">Learn More</Button>
                        </div>
                    </div>
                    <div>
                        <img src={image}/>
                    </div>
                </div>
            </header>
            <section className={styles.features}>
                <div>
                    <h3>Add New Words and Phrases</h3>
                </div>
                <div className={styles.features_desc}>
                    <div className={styles.features_desc_block}>
                        <BlackBoxIcon/>
                        <h5>Memorize with Flashcards</h5>
                        <p>Easily learn and remember new vocabulary using our interactive flashcards.</p>
                        <Link to={"/"}>Learn More</Link>
                    </div>
                    <div style={{margin: '0 48px'}} className={styles.features_desc_block}>
                        <BlackBoxIcon/>
                        <h5>Organize Mini-Games</h5>
                        <p>Make learning fun by organizing mini-games to reinforce your new vocabulary.</p>
                        <Link to={"/"}>Sign Up</Link>
                    </div>
                    <div className={styles.features_desc_block}>
                        <BlackBoxIcon/>
                        <h5>Track Your Progress</h5>
                        <p>Monitor your learning journey and track your progress over time.</p>
                        <Link to={"/"}>Get Started</Link>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default HomePage;