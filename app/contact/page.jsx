import Header from "../components/ui-components/header/Header";
import Footer from "../components/ui-components/footer/Footer";
import Link from "next/link";

import styles from "./contact.module.css";

const joinText = [
  `Calling all food enthusiasts, amateur chefs, and kitchen creatives – HomeChef invites you to share your culinary masterpieces with our vibrant community! Whether you've perfected grandma's secret recipe or concocted a daring fusion dish that defies tradition, we want to see it all. Show off your culinary prowess, share your cooking adventures, and inspire others with your unique flavors and creative twists. Join us in celebrating the diversity of food and the joy of homemade goodness. Submit your recipes, share your stories, and become a part of the HomeChef family today!`,
];

export default function Contact() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.contactContainer}>
          <div className={styles.formContainer}>
            <h1 className={styles.contactTitle}>Contact</h1>
            <h2 className={styles.contactSubTitle}>Send us a message</h2>
            <form className={styles.contactFormContainer}>
              <label className={styles.formLabel}>Name</label>
              <input className={styles.formInput}></input>
              <label className={styles.formLabel}>Email</label>
              <input className={styles.formInput}></input>
              <label className={styles.formLabel}>Message</label>
              <textarea className={styles.formInputLarge}></textarea>
            </form>
            <Link className={styles.submitButton} href={"/"}>
              Send message
            </Link>
          </div>
          <div className={styles.infoContainer}>
            <h1 className={styles.contactTitle}>Want to contribute?</h1>
            <h2 className={styles.contactSubTitle}>
              Join the homechef community
            </h2>
            <p className={styles.contactText}>{joinText[0]}</p>
            <Link className={styles.submitButton} href={"/"}>
              Submit recipe
            </Link>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
