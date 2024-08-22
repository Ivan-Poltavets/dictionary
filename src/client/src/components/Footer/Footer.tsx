import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.newsletter}>
                <div>
                    <p style={{fontSize: '18px', fontWeight: 600}}>Get Exclusive Updates</p>
                    <span>Subscribe to our newsletter for the lates news and updates.</span>
                </div>
                <div>
                    <div className={styles.subscription}>
                        <Input/>
                        <Button variant="outlined">Join</Button>
                    </div>
                    <span>By subscribing, you agree to our Privacy Policy.</span>
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.links_block}>
                    <p style={{fontSize: '16px', fontWeight: 600}}>About us</p>
                    <ul>
                        <li>Contacts</li>
                        <li>FAQs</li>
                        <li>Support</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className={styles.links_block}>
                    <p style={{fontSize: '16px', fontWeight: 600}}>About us</p>
                    <ul>
                        <li>Contacts</li>
                        <li>FAQs</li>
                        <li>Support</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className={styles.links_block}>
                    <p style={{fontSize: '16px', fontWeight: 600}}>About us</p>
                    <ul>
                        <li>Contacts</li>
                        <li>FAQs</li>
                        <li>Support</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className={styles.links_block}>
                    <p style={{fontSize: '16px', fontWeight: 600}}>About us</p>
                    <ul>
                        <li>Contacts</li>
                        <li>FAQs</li>
                        <li>Support</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className={styles.links_block}>
                    <p style={{fontSize: '16px', fontWeight: 600}}>About us</p>
                    <ul>
                        <li>Contacts</li>
                        <li>FAQs</li>
                        <li>Support</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </div>
            </div>
            <div className={styles.credits}>
                <h2>Logo</h2>
                <p>© 2024 Dictionary. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;