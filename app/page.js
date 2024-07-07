"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/sections/hero/Hero";
import Header from "./components/ui-components/header/Header";
// import Filter from "./components/ui-components/filter/Filter";
// import RecipeCard from "./components/ui-components/cards/recipe-cards/RecipeCard";
import SearchBar from "./components/ui-components/search-bar/searchBar";

import Footer from "./components/ui-components/footer/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [recipeData, setRecipeData] = useState([]);
  const [filteredRecipeData, setFilteredRecipeData] = useState([]);
  const [numberOfRecipes, setNumberOfRecipes] = useState();
  const [pageNo, setPageNo] = useState(1);
  const [skipValue, setSkipValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  // const [selectedFilterSelector, setSelectedFilterSelector] = useState("");
  // const [selectedOptionsSelector, setSelectedOptionsSelector] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [amIFiltering, setAmIFiltering] = useState(false);

  const resultsPerPage = 8;

  useEffect(() => {
    const fetchLiveRecipes = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/all-recipe?resultsPerPage=${resultsPerPage}&page=${pageNo}&skipvalue=${skipValue}`
        );
        if (response.ok) {
          const { recipes, numberOfRecipes } = await response.json();
          const recipesWithConvertedImages = recipes.map((recipe) => {
            if (recipe.image) {
              const source = convertBase64ToSource(recipe.image);
              return { ...recipe, image: source };
            }
            return recipe;
          });

          if (pageNo == 1) {
            setRecipeData(recipesWithConvertedImages);
            setFilteredRecipeData(recipesWithConvertedImages);
          }
          if (pageNo >= 2) {
            setRecipeData((prevRecipeData) => [
              ...prevRecipeData,
              ...recipesWithConvertedImages,
            ]);
            setFilteredRecipeData((prevFilteredRecipeData) => [
              ...prevFilteredRecipeData,
              ...recipesWithConvertedImages,
            ]);
          }
          setNumberOfRecipes(numberOfRecipes);
          console.log("res", recipesWithConvertedImages);
          console.log("number", numberOfRecipes);
        } else {
          console.error("Failed to fetch live recipes");
        }
      } catch (error) {
        console.error("Error fetching live recipes:", error);
      }
    };
    fetchLiveRecipes(resultsPerPage, skipValue);
    setSkipValue(8);
  }, [pageNo, skipValue]);

  const pageCounter = () => {
    setPageNo(pageNo + 1);
    setSkipValue(resultsPerPage * pageNo);
  };

  const totalPages = Math.ceil(numberOfRecipes / resultsPerPage);

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

  // function handleSelectFilter(filtername) {
  //   setSelectedFilterSelector(filtername);
  //   console.log(filtername);
  // }
  // function handleSelectOptionsFilter(optionname) {
  //   setSelectedOptionsSelector(optionname);
  //   console.log(optionname);
  // }

  function handleSearchFilter(filterText) {
    setSearchTerm(filterText);
    if (filterText) {
      const filtered = recipeData.filter((recipe) =>
        recipe.title.toLowerCase().includes(filterText.toLowerCase())
      );
      setFilteredRecipeData(filtered);
      setNumberOfRecipes(filtered.length);
      setAmIFiltering(true);
    } else {
      setFilteredRecipeData(recipeData);
      setAmIFiltering(false);
    }
  }

  return (
    <main className={styles.main}>
      <Header />

      <SearchBar filterItems={handleSearchFilter} />
      {/* <p>Currently searching for: {searchTerm}</p> */}
      {amIFiltering ? (
        <Hero
          recipeCount={numberOfRecipes}
          allRecipeData={filteredRecipeData}
        />
      ) : (
        <Hero recipeCount={numberOfRecipes} allRecipeData={recipeData} />
      )}

      {pageNo >= totalPages ? (
        <div className={styles.noMoreLoad}>No more recipes to display</div>
      ) : (
        <button className={styles.loadingButton} onClick={pageCounter}>
          Load more recipes
        </button>
      )}
      <Footer />
    </main>
  );
}
