import Header from "../components/ui-components/header/Header";
import Footer from "../components/ui-components/footer/Footer";
import styles from "./food.module.css";
import { foodItems } from "./foodlist";
import Link from "next/link";

export default function foodTypes() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.foodTypesContainer}>
          <div className={styles.foodHeaderContainer}>
            <h1>Types of food</h1>
            <h3>
              Select from a list of the below types of food to show recipes for
              that type of food
            </h3>
          </div>
          <div className={styles.foodCardContainer}>
            {foodItems.map((item, index, arr) => (
              <Link
                href={`/cuisines/{${item}}`}
                className={styles.card}
                key={index}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
