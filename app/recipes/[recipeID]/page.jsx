import { DUMMY_DATA } from "@/app/DUMMY_DATA";
import RecipeCard from "@/app/components/ui-components/cards/recipe-cards/RecipeCard";
import Header from "@/app/components/ui-components/header/Header";
import styles from "./recipe.module.css";
import classes from "../../page.module.css";
import Footer from "@/app/components/ui-components/footer/Footer";

// PAGE FOR RECEIPE CARDS TO BE DISPLAYED ON

export default function RecipeInfo() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.recipeContainer}>
          <RecipeCard />
        </div>
        <Footer />
      </main>
    </>
  );
}
