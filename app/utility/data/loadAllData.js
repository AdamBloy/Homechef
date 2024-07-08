"use client";
import { useState, useEffect } from "react";

export default function useRecipeData() {
  const [recipeData, setRecipeData] = useState([]);
  const [filteredRecipeData, setFilteredRecipeData] = useState([]);

  useEffect(() => {
    const fetchLiveRecipes = async () => {
      try {
        const response = await fetch("/api/all-recipe");
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
          setFilteredRecipeData(recipesWithConvertedImages);
          console.log("res", recipesWithConvertedImages);
        } else {
          console.error("Failed to fetch live recipes");
        }
      } catch (error) {
        console.error("Error fetching live recipes:", error);
      }
    };
    fetchLiveRecipes();
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
}
