import mongoose, { Schema, model } from "mongoose";

// SHORT TEST SCHEMA
// const recipeSchema = new Schema(
//   {
//     recipeID: { type: String, required: true },
//     title: { type: String, required: true },
//     submittedBy: { type: String, required: true },
//     submittedByImg: { type: String, required: true },
//     shortDescription: { type: String, required: true },
//     // },
//   },
//   { timestamps: true }
// );

// const newRecipe =
//   mongoose.models.newrecipes || model("newrecipes", recipeSchema);

// export default newRecipe;

const recipeSchema = new Schema(
  {
    recipeID: { type: String, required: true },
    title: { type: String, required: true },
    submittedBy: { type: String, required: true },
    submittedByImg: { type: String, required: false },
    shortDescription: { type: String, required: true },
    longDescription: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    method: [{ type: String, required: true }],
    cookingTime: { type: String, required: true },
    prepTime: { type: String, required: true },
    difficulty: { type: String, required: true },
    cuisine: { type: String, required: true },
    image: { type: String, required: true },
    icons: {
      icon1: { type: String, required: false },
      icon2: { type: String, required: false },
      icon3: { type: String, required: false },
    },
    recipeStatus: { type: String, required: true },
  },
  { timestamps: true }
);

//Adding the newRecipe input, checking the model/collection in mongodb called "newrecipes"
const newRecipe =
  mongoose.models.newrecipes || model("newrecipes", recipeSchema);

export default newRecipe;
