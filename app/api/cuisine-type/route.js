import { connectToDatabase } from "@/app/database/connectToDatabase";
import { NextResponse } from "next/server";
import submitNewRecipe from "@/app/models/submitRecipeSchema";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const cuisineType = searchParams.get("cuisineType");

  if (!cuisineType) {
    return NextResponse.json(
      { error: "Cuisine type to search for is needed" },
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();
    const recipes = await submitNewRecipe.find({
      cuisine: { $regex: cuisineType, $options: "i" },
    });

    if (recipes.length === 0) {
      return NextResponse.json(
        { error: "No recipes found for this cuisine" },
        { status: 404 }
      );
    }

    return NextResponse.json({ recipes }, { status: 200 });
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return NextResponse.json(
      { error: "Failed to fetch recipes" },
      { status: 500 }
    );
  }
}
