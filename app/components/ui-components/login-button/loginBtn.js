import { useSession, signIn, signOut } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import styles from "./loginbtn.module.css";
import GoogleButton from "react-google-button";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        You are already signed in as {session.user.email}, you can logout below.{" "}
        <br />
        <button
          className={styles.signInButton}
          onClick={() =>
            signOut("google", { callbackUrl: "/", redirect: true })
          }
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <GoogleButton
        className={styles.signInButton}
        onClick={() => signIn("google", { callbackUrl: "/", redirect: true })}
      ></GoogleButton>
    </>
  );
}
