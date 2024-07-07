"use client";
// import { DUMMY_DATA } from "@/app/DUMMY_DATA";
import styles from "./hero.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
// import dynamic from "next/dynamic";
// import { fetchLiveRecipes } from "@/app/utility/callAllRecieps";
// import imageLoading from "../../ui-components/utility-components/imageLoading";
// import MeatIcon from "@/app/utility/icons/meat";
// import FishIcon from "@/app/utility/icons/fish";
// import DairyIcon from "@/app/utility/icons/dairy";
// import DrinkIcon from "@/app/utility/icons/drink";
// import VegetableIcon from "@/app/utility/icons/vegetable";
// import DesertIcon from "@/app/utility/icons/desert";
// import ConditionalIcon from "../../ui-components/utility-components/conditionalIcon";




export default function Hero({ allRecipeData, filteredRecipes, recipeCount }) {
  const router = useRouter();
  const pathName = usePathname();
  const [recipeData, setRecipeData] = useState([]);
  
  
  useEffect(() => {
    setRecipeData(allRecipeData);
  }, [allRecipeData]);
  
  function myPath() {
    console.log(pathName);
  }


  return (
    <>
      {!recipeData ? (
        <p>loading recipes...</p>
      ) : recipeData?.length === 0 ? (
        <p>loading recipes...</p>
      ) : !recipeData[0]?.image ? (
        <p>loading recipes...</p>
      ) : (
        <div className={styles.pageContainer}>
          <div className={styles.cardContainer}>
            {recipeData.map((item, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.cardImg} position="relative">
                  {item.image ? (
                    <Image
                      fill={true}
                      className={styles.cardImg}
                      src={item?.image}
                      alt={`dummy image of ${item?.title}`}
                    ></Image>
                  ) : (
                    <imageLoading />
                  )}
                  {/* ================================ CARD ICONS TO BE ADDED AS AN UPGRADE LATER ================================ */}
                  {/* <div className={styles.cardIcons}>
                    {item.icons.icon1}
                    {item.icons.icon2}
                    {item.icons.icon3}
                    <ConditionalIcon icon1="Fish" />
                    <MeatIcon />
                    <FishIcon />
                  </div> */}
                  {/* ================================ ================================ ================================ */}
                </div>
                <div className={styles.cardInfo}>
                  <h2>{item.title}</h2>
                  <h3>{item.shortDescription}</h3>
                  <div className={styles.cardBtnContainer}>
                    <Link
                      href={`/recipes/{${item.recipeID}}`}
                      className={styles.cardBtn}
                      onClick={myPath}
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
    </>
  );
}
