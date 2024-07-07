import { Inter } from "next/font/google";
import "./globals.css";
import style from "./page.module.css";
//Creating a session wrapper because root layout is a server component and SessionProvider is for client components, having a sessionwrapper means everything can mostly stay SSR and there isn't too much code change from how next-auth docs guide the implementation
import SessionWrapper from "./utility/session/sessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Homechef",
  description: "Good food without the faff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
