import styles from "./footer.module.css";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MailIcon from "@mui/icons-material/Mail";

export default function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.logoContainer}>homechef 2014</div>
        <div className={styles.siteMap}>
          <Link className={styles.footerLink} href={"/"}>
            home
          </Link>
          <Link className={styles.footerLink} href={"/food"}>
            food
          </Link>
          <Link className={styles.footerLink} href={"/meal-plans"}>
            meal plans
          </Link>
          <Link className={styles.footerLink} href={"/about"}>
            about
          </Link>
          <Link className={styles.footerLink} href={"/contact"}>
            contact
          </Link>
        </div>
        <div className={styles.socialLogosContainer}>
          <Link href="https://www.instagram.com/homechef.uk/">
            <InstagramIcon className={styles.socialLogos} />
          </Link>
          <Link href="https://www.pinterest.co.uk/azimova_elvira/commercial-food-photography-london/">
            {" "}
            <PinterestIcon />
          </Link>
          <Link href="/">
            <MailIcon className={styles.socialLogos} />
          </Link>
        </div>
      </div>
    </>
  );
}
