import { connectToDatabase } from "@/app/database/connectToDatabase";
import { NextResponse } from "next/server";
import submitNewRecipe from "@/app/models/submitRecipeSchema";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const recipeID = searchParams.get("recipeID");

  if (!recipeID) {
    return NextResponse.json(
      { error: "Recipe ID is required" },
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();
    const recipe = await submitNewRecipe.findOne({ recipeID });

    if (!recipe) {
      return NextResponse.json({ error: "Recipe not found" }, { status: 404 });
    }

    return NextResponse.json({ recipe }, { status: 200 });
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return NextResponse.json(
      { error: "Failed to fetch recipe" },
      { status: 500 }
    );
  }
}
