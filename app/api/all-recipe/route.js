import { connectToDatabase } from "@/app/database/connectToDatabase";
import { NextResponse } from "next/server";
import newRecipe from "@/app/models/recipeSchema";
import submitNewRecipe from "@/app/models/submitRecipeSchema";

export async function GET(req) {
  await connectToDatabase();
  const { searchParams } = new URL(req.url);

  const resultsPerPage = searchParams.get("resultsPerPage");
  const skipVal = searchParams.get("skipvalue");
  const recipes = await submitNewRecipe
    .find({ recipeStatus: "Live" })
    .skip(Number(skipVal))
    .limit(Number(resultsPerPage));
  const numberOfRecipes = await submitNewRecipe.countDocuments({
    recipeStatus: "Live",
  });

  // console.log("RPP", resultsPerPage);
  return NextResponse.json({ recipes, numberOfRecipes }, { status: 201 });
  // return NextResponse.json({ recipes }, { status: 201 });
}
