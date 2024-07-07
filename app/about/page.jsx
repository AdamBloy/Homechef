import styles from "./about.module.css";
import Header from "../components/ui-components/header/Header";
import Footer from "../components/ui-components/footer/Footer";
import Image from "next/image";
import PHOTO1 from "../../images/aboutImages/1.jpeg";
import PHOTO2 from "../../images/aboutImages/2.jpg";
import PHOTO3 from "../../images/aboutImages/3.jpg";
import PHOTO4 from "../../images/aboutImages/4.jpg";
import Link from "next/link";

const ABOUT_TEXT = [
  `
In the bustling world of online culinary adventures, HomeChef stands as a cozy corner curated by a husband-wife duo, where cooking meets photography in a delightful fusion. Imagine a kitchen where the husband's culinary experiments unfold alongside the wife's artistic captures, forming a dynamic partnership of flavor and aesthetics. It's not just about fancy dishes or perfect shots – HomeChef is a laid-back hub where food lovers of all levels can mingle, share recipes, and find inspiration for their next kitchen adventure.`,
  `With the husband's passion for cooking and the wife's keen eye behind the lens, HomeChef offers a refreshing take on the world of food. From comforting classics to innovative twists, every recipe shared on HomeChef reflects the joy of homemade goodness and the beauty found in simple, delicious meals. It's like having a friend in the kitchen, guiding you through new flavors and techniques with warmth and enthusiasm.`,
  `No pretentious foodie vibes here – just genuine love for good food and great company. Whether you're a seasoned chef looking for fresh ideas or a kitchen newbie eager to learn, HomeChef welcomes you with open arms. So, why not join the fun? Dive into a world of flavor, creativity, and community at HomeChef, where every dish tells a story and every photo captures a moment of culinary magic.`,
  `Calling all food enthusiasts, amateur chefs, and kitchen creatives – HomeChef invites you to share your culinary masterpieces with our vibrant community! Whether you've perfected grandma's secret recipe or concocted a daring fusion dish that defies tradition, we want to see it all. Show off your culinary prowess, share your cooking adventures, and inspire others with your unique flavors and creative twists. Join us in celebrating the diversity of food and the joy of homemade goodness. Submit your recipes, share your stories, and become a part of the HomeChef family today!`,
];

export default function About() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.aboutContainer}>
          <div className={styles.photoContainer}>
            <Image className={styles.aboutPhoto} src={PHOTO1} alt=""></Image>
            <Image className={styles.aboutPhoto} src={PHOTO2} alt=""></Image>
            <Image className={styles.aboutPhoto} src={PHOTO3} alt=""></Image>
            <Image className={styles.aboutPhoto} src={PHOTO4} alt=""></Image>
          </div>
          <div className={styles.infoContainer}>
            <h1 className={styles.aboutTitle}>About</h1>
            <h2 className={styles.aboutSubTitle}>The story of homechef</h2>
            <p className={styles.aboutText}>{ABOUT_TEXT[0]}</p>
            <p className={styles.aboutText}>{ABOUT_TEXT[1]}</p>
            <p className={styles.aboutText}>{ABOUT_TEXT[2]}</p>
            <h2 className={styles.aboutSubTitle}>
              Join the homechef community
            </h2>
            <p className={styles.aboutText}>{ABOUT_TEXT[3]}</p>
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
