"use client";
// import { DUMMY_DATA } from "@/app/DUMMY_DATA";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./recipeCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function RecipeCard() {
  const [currentRecipe, setCurrentRecipe] = useState([]);
  const router = useRouter();
  const pathName = usePathname();

  const splitPathName = pathName.split("%7B")[1].split("%7D")[0].split("-");
  const pathNameResult = splitPathName.filter((part) => part !== "").join("-");

  function handlePrint() {
    window.print();
  }

  // function myPath() {
  //   console.log(pathNameResult);
  //   // console.log(decodedSubstring);
  // }

  // const currentRecipe = DUMMY_DATA.find(
  //   (recipe) => recipe.recipeID === pathNameResult
  // );

  useEffect(() => {
    const fetchCurrentRecipe = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/recipe-info?recipeID=${pathNameResult}`
        );
        if (response.ok) {
          // console.log(response.json());
          const { recipe } = await response.json();
          console.log("in Call", recipe);

          // Convert base64 image data to a source URL
          const imageSource = convertBase64ToSource(recipe.image);
          const submittedByImgSource = convertBase64ToSource(
            recipe.submittedByImg
          );

          // Create a new recipe object with converted image sources
          const updatedRecipe = {
            ...recipe,
            image: imageSource,
            submittedByImg: submittedByImgSource,
          };

          setCurrentRecipe(updatedRecipe);
          return updatedRecipe;
          // });
        } else {
          console.error("Failed to fetch live recipes");
        }
      } catch (error) {
        console.error("Error fetching live recipes:", error);
      }
    };
    fetchCurrentRecipe();
    console.log("curres", currentRecipe);
  }, []);

  function convertBase64ToSource(base64Data) {
    const binaryData = atob(base64Data.split(",")[1]);
    const arrayBuffer = new ArrayBuffer(binaryData.length);
    const uint8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < binaryData.length; i++) {
      uint8Array[i] = binaryData.charCodeAt(i);
    }

    const blob = new Blob([uint8Array]);
    return URL.createObjectURL(blob);
  }

  return (
    <>
      {currentRecipe === "loading" ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.recipeCard}>
          <div
            className={styles.recipeImage}
            style={{
              position: "relative",
              height: "25rem",
            }}
          >
            <Image
              // height={1200}
              // width={400}
              // style={{ border: "1px solid pink", objectFit: "contain" }}
              fill={true}
              src={currentRecipe.image}
              alt="image of meatballs placeholder"
              className={styles.recImg}
            ></Image>
          </div>
          <div className={styles.recipeMainInfo}>
            <div className={styles.recipeIconsContainer}>
              <Link className={styles.recipeBackButton} href={"/"}>
                Homepage
              </Link>
              <div className={styles.receipeCardIcons}>
                <button className={styles.printButton} onClick={handlePrint}>
                  Print this recipe!
                </button>
                {/* We hope you enjoy this recipe! */}
                {/* {currentRecipe.icons?.icon1}
                {currentRecipe.icons?.icon2}
                {currentRecipe.icons?.icon3} */}
              </div>
            </div>
            <div className={styles.currentRecipeInfoContainer}>
              <h1>{currentRecipe.title}</h1>
              <h2>{currentRecipe.shortDescription}</h2>
              <p className={styles.recipeLongDescription}>
                {currentRecipe.longDescription}
              </p>
            </div>
          </div>
          <div className={styles.ingredientListContainer}>
            <h1 className={styles.ingredientHeading}>Ingredients</h1>
            {/* {currentRecipe.ingredients.map((ingredient, index) => {
            <li className={styles.ingredientList} key={index}>
              {ingredient}
            </li>;
          })} */}
            {/* LEARN THAT AFTER THE => ITS A () PARENTHESIS NOT A CURCLY BRACE {} */}
            {currentRecipe?.ingredients?.map((ingredient, index) => (
              <li className={styles.ingredientList} key={index}>
                {ingredient}
              </li>
            ))}
          </div>
          <div className={styles.methodContainer}>
            <h1 className={styles.methodHeading}>Method</h1>
            <ol type="1" className={styles.methodOrderedList}>
              {currentRecipe?.method?.map((method, index) => (
                <li className={styles.methodList} key={index}>
                  {method}
                </li>
              ))}
            </ol>
            <Link
              className={styles.recipeSubContainer}
              href={`/user-recipes/${currentRecipe.submittedBy}`}
            >
              <div className={styles.recipeSubInfo}>
                <Image
                  fill={true}
                  className={styles.receipeSubImage}
                  alt={`image of ${currentRecipe.submittedByImg}`}
                  src={currentRecipe.submittedByImg}
                ></Image>
                <div className={styles.submitName}>
                  <h2>Submitted by</h2>
                  <p
                    className={styles.recipeSubmitButton}
                    href={`/user-recipes/${currentRecipe.submittedBy}`}
                  >
                    See other recipes from {currentRecipe.submittedBy}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
