"use client";
import styles from "./userLogin.module.css";
import Header from "../components/ui-components/header/Header";
import Footer from "../components/ui-components/footer/Footer";
import meatballs from "../../images/recipe images/meatballs2.png";
import Image from "next/image";
import LoginButton from "../components/ui-components/login-button/loginBtn";

export default function UserLogin() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.loginContainer}>
          <div className={styles.loginText}>
            <div className={styles.loginHeaderText}>
              <h1>Sign in</h1>
              <h4>Login to your account with Google</h4>
            </div>
            <div className={styles.loginBodyText}>
              <p>
                Use Google to login to your account, this will allow you to
                contribute to the community and post your favourite recipes. We
                currently only support users Google accounts, more may be added
                at a later date!
              </p>
            </div>
            <div className={styles.loginButtonContainer}>
              <LoginButton />
            </div>
          </div>
          <div className={styles.loginImage}>
            <Image
              style={{ objectFit: "cover" }}
              src={meatballs}
              alt="Image of some tasty meatballs"
            ></Image>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
