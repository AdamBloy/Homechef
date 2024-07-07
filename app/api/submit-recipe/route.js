import { connectToDatabase } from "@/app/database/connectToDatabase";
import { NextResponse } from "next/server";
import submitNewRecipe from "@/app/models/submitRecipeSchema";

export async function POST(request) {
  const {
    recipeID,
    title,
    submittedBy,
    submittedByImg,
    shortDescription,
    longDescription,
    ingredients,
    method,
    cookingTime,
    prepTime,
    difficulty,
    cuisine,
    image,
    icons,
    recipeStatus,
  } = await request.json();
  await connectToDatabase();
  await submitNewRecipe.create({
    recipeID,
    title,
    submittedBy,
    submittedByImg,
    shortDescription,
    longDescription,
    ingredients,
    method,
    cookingTime,
    prepTime,
    difficulty,
    cuisine,
    image,
    icons,
    recipeStatus,
  });
  return NextResponse.json(
    { message: "Recipe sent for review" },
    { status: 201 }
  );
}
