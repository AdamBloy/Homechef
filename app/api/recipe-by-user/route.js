import { connectToDatabase } from "@/app/database/connectToDatabase";
import { NextResponse } from "next/server";
import submitNewRecipe from "@/app/models/submitRecipeSchema";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const userID = searchParams.get("userID");

  if (!userID) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    await connectToDatabase();
    const recipes = await submitNewRecipe.find({ submittedBy: userID });

    if (recipes.length === 0) {
      return NextResponse.json(
        { error: "No recipes found for the user" },
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
