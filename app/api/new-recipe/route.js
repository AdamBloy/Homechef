import { connectToDatabase } from "@/app/database/connectToDatabase";
import { NextResponse } from "next/server";
import newRecipe from "@/app/models/recipeSchema";

export async function POST(request) {
  const { recipeID, title, submittedBy, submittedByImg, shortDescription } =
    await request.json();
  await connectToDatabase();
  await newRecipe.create({
    recipeID,
    title,
    submittedBy,
    submittedByImg,
    shortDescription,
  });
  return NextResponse.json({ message: "Recipe added" }, { status: 201 });
}
// import { connectToDatabase } from "@/app/database/connectToDatabase";
// import { NextResponse } from "next/server";
// import newRecipe from "@/app/models/recipeSchema";

// export async function POST(request) {
//   const {
//     recipeID,
//     title,
//     submittedBy,
//     submittedByImg,
//     shortDescription,
//     // longDescription,
//     // ingredients,
//     // method,
//     // cookingTime,
//     // prepTime,
//     // difficulty,
//     // cuisine,
//     // image,
//     // icons,
//   } = await request.json();
//   await connectToDatabase();
//   await newRecipe.create({
//     recipeID,
//     title,
//     submittedBy,
//     submittedByImg,
//     shortDescription,
//     // longDescription,
//     // ingredients,
//     // method,
//     // cookingTime,
//     // prepTime,
//     // difficulty,
//     // cuisine,
//     // image,
//     // icons,
//   });
//   return NextResponse.json({ message: "Recipe added" }, { status: 201 });
// }
