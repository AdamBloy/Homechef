export const fetchLiveRecipes = async () => {
  try {
    const response = await fetch("/api/all-recipe");
    if (response.ok) {
      const { recipes } = await response.json();
      setRecipeData(recipes);
    } else {
      console.error("Failed to fetch live recipes");
    }
  } catch (error) {
    console.error("Error fetching live recipes:", error);
  }
};
