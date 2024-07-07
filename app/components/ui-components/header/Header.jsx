"use client";
import { useEffect, useState } from "react";
import styles from "./header.module.css";
import { headerItems } from "./nav-items";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";

export default function Header() {
  const [hideMenu, setHideMenu] = useState(true);
  const { data: session } = useSession();
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  function dropDownMenu() {
    setHideMenu(!hideMenu);
  }

  function mobileMenuSetting() {
    if (window.innerWidth <= 668) {
      setMobileMenuActive(!mobileMenuActive);
    }
  }

  return (
    <>
      {session ? (
        <div className={styles.userContainer}>
          <>
            <p>Signed in as: {session?.user?.email} </p> <br />
            <button
              className={styles.signInButton}
              onClick={() =>
                signOut("google", { callbackUrl: "/", redirect: true })
              }
            >
              Sign out
            </button>
          </>
        </div>
      ) : null}
      <div
        className={
          mobileMenuActive
            ? `${styles.headerContainerOpen}`
            : `${styles.headerContainer}`
        }
      >
        <div
          className={
            mobileMenuActive
              ? `${styles.logoContainerHide}`
              : `${styles.logoContainer}`
          }
        >
          <Link className={styles.logoText} href="/">
            homechef
          </Link>
          <p>Good food without the faff!</p>
        </div>
        <ul className={styles.headerItemsContainer}>
          {mobileMenuActive ? (
            <div className={styles.mobileMenuClose} onClick={mobileMenuSetting}>
              Close Menu [X]
            </div>
          ) : (
            <></>
          )}
          {headerItems.map((item, index) => (
            <Link
              className={styles.headerItemsContainerLink}
              href={item.to}
              key={index}
              onClick={mobileMenuSetting}
            >
              {item.title}
              {item.subMenu ? (
                <div
                  id={item.id}
                  className={
                    hideMenu
                      ? `${styles.headerItemsSubMenuHidden}`
                      : `${styles.headerItemsSubMenu}`
                  }
                >
                  <ul>
                    {item.subMenu.map((subItem, index) => (
                      <li id="subMenu" key={index}>
                        {subItem}
                      </li>
                    ))}
                    {/* <li>{item.subMenu ? item.subMenu : null}</li> */}
                  </ul>
                </div>
              ) : null}
            </Link>
          ))}
        </ul>
        <div
          className={
            mobileMenuActive
              ? `${styles.burgerMenuHide}`
              : `${styles.burgerMenu}`
          }
          onClick={mobileMenuSetting}
        >
          Menu
        </div>
      </div>
    </>
  );
}

//MAP EXAMPLE
//{MenuItems.map((item, index) => <li key={index}><Link to={item.to}>{item.title}</Link></li>)}
