"use client";
// import { DUMMY_DATA } from "@/app/DUMMY_DATA";
import styles from "./cuisines.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Header from "@/app/components/ui-components/header/Header";
import Footer from "@/app/components/ui-components/footer/Footer";

export default function Hero() {
  const [recipeData, setRecipeData] = useState([]);
  const [emptyDataResponse, setEmptyDataResponse] =
    useState("loading recipes...");
  const router = useRouter();
  const pathName = usePathname();
  const { cuisineType } = useParams();

  const splitPathName = pathName.split("%7B")[1].split("%7D")[0].split("-");
  const pathNameResult = splitPathName.filter((part) => part !== "").join("-");

  // function myPath() {
  //   console.log(pathNameResult);
  //   // console.log(decodedSubstring);
  // }

  // const currentRecipe = DUMMY_DATA.find(
  //   (recipe) => recipe.recipeID === pathNameResult
  // );

  useEffect(() => {
    const fetchUserRecipes = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/cuisine-type?cuisineType=${pathNameResult}`
        );
        if (response.ok) {
          const { recipes } = await response.json();
          const recipesWithConvertedImages = recipes.map((recipe) => {
            if (recipe.image) {
              const source = convertBase64ToSource(recipe.image);
              return { ...recipe, image: source };
            }
            return recipe;
          });
          setRecipeData(recipesWithConvertedImages);
          console.log("res", recipesWithConvertedImages);
        } else {
          console.error("Failed to fetch live recipes");
          setEmptyDataResponse("There are no recipes of this kind to display");
        }
      } catch (error) {
        console.error("Error fetching live recipes:", error);
      }
    };
    fetchUserRecipes();
  }, [pathNameResult, setEmptyDataResponse]);

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
      <main className={styles.main}>
        <Header />
        {/* <button onClick={showData}>Click me</button> */}
        {/* {!recipeData[0]?.image ? (
        <p>loading</p>
      ) : (
        <img
          alt="test"
          src={recipeData[2]?.image}
          width="100"
          height="100"
        ></img>
      )} */}
        {!recipeData[0]?.image ? (
          <p>{emptyDataResponse}</p>
        ) : (
          <div className={styles.pageContainer}>
            <h1 className={styles.submittedByHeading}>
              All of our {pathNameResult} recipes
            </h1>
            <div className={styles.cardContainer}>
              {recipeData.map((item, index) => (
                <div className={styles.card} key={index}>
                  <div className={styles.cardImg} position="relative">
                    {item.image ? (
                      <Image
                        fill={true}
                        className={styles.cardImg}
                        src={item?.image}
                        alt={`Image of {${item?.title}}`}
                      ></Image>
                    ) : (
                      <imageLoading />
                    )}
                    <div className={styles.cardIcons}>
                      {item.icons.icon1}
                      {item.icons.icon2}
                      {item.icons.icon3}
                      {/* <ConditionalIcon icon1="Fish" />
                    <MeatIcon />
                    <FishIcon /> */}
                    </div>
                  </div>
                  <div className={styles.cardInfo}>
                    <h2>{item.title}</h2>
                    <h3>{item.shortDescription}</h3>
                    <div className={styles.cardBtnContainer}>
                      <Link
                        href={`/recipes/{${item.recipeID}}`}
                        className={styles.cardBtn}
                      >
                        Get Recipe
                      </Link>
                    </div>
                    <div>{/* <OutdoorGrillIcon /> */}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <Footer />
      </main>
    </>
  );
}
