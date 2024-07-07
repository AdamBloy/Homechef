import LoginButton from "../login-button/loginBtn";
import styles from "./utility.module.css";

export default function NotLoggedIn() {
  return (
    <>
      <div className={styles.logContainer}>
        <h1> You need to be logged in to access this page</h1>
        <h2>Login with Google now</h2>
        <LoginButton />
      </div>
    </>
  );
}
