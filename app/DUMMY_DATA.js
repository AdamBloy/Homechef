import MEATBALLS from "../images/recipe images/meatballs.png";
import SALAD1 from "../images/recipe images/salad.jpg";
import SALAD2 from "../images/recipe images/salad2.jpg";
import EGGS from "../images/recipe images/eggs.jpg";
import BUCK from "../images/recipe images/buck.jpg";
import RICEFISH from "../images/recipe images/ricefish.jpg";
import ADAMIMAGE from "../images/peopleImages/adamb.jpg";

import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import KebabDiningIcon from "@mui/icons-material/KebabDining";
import SetMealIcon from "@mui/icons-material/SetMeal";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

export const DUMMY_DATA = [
  {
    recipeID: "greek-salad-0356",
    title: "Greek Salad",
    submittedBy: "Adam B",
    submittedByImg: ADAMIMAGE,
    shortDescription:
      "A refreshing salad with feta cheese, olives, and tomatoes",
    longDescription:
      "Greek salad, also known as horiatiki salad, is a popular dish in Greece consisting of fresh vegetables such as tomatoes, cucumbers, onions, and bell peppers, topped with feta cheese and olives. It's typically dressed with olive oil and seasoned with salt and oregano.",
    ingredients: [
      "Feta Cheese",
      "Onions",
      "Garlic",
      "Cucumber",
      "Tomato",
      "Greek Yoghurt",
      "Olive Oil",
      "Salt",
      "Pepper",
      "Red Pepper Flakes",
      "Coriander",
    ],
    method: [
      "Chop vegetables into bite-sized pieces.",
      "Combine vegetables in a bowl.",
      "Crumble feta cheese on top.",
      "Add olives.",
      "Drizzle with olive oil.",
      "Season with salt and oregano, ensuring the flavors meld together.",
      "Toss gently to combine, ensuring each piece is coated evenly with the dressing.",
    ],
    cookingTime: "0 minutes",
    prepTime: "15 minutes",
    difficulty: "Easy",
    cuisine: "Greek",
    image: MEATBALLS,
    icons: {
      icon1: <OutdoorGrillIcon />,
      icon2: <RestaurantIcon />,
      icon3: <SetMealIcon />,
      icon4: <LocalFloristIcon />,
    },
  },
  {
    recipeID: "moussaka-0588",
    title: "Moussaka",
    submittedBy: "Adam B",
    submittedByImg: ADAMIMAGE,
    shortDescription:
      "A classic Greek dish with layers of eggplant, meat, and béchamel sauce.",
    longDescription:
      "Moussaka is a traditional Greek dish made with layers of eggplant, spiced meat sauce, and creamy béchamel sauce. It's a hearty and comforting dish that's perfect for sharing with family and friends.",
    ingredients: [
      "Feta Cheese",
      "Onions",
      "Garlic",
      "Cucumber",
      "Tomato",
      "Greek Yoghurt",
      "Olive Oil",
      "Salt",
      "Pepper",
      "Red Pepper Flakes",
      "Coriander",
    ],
    method: [
      "Slice eggplant and fry until golden, bringing out their rich flavor.",
      "Brown ground meat with onions and garlic, allowing the aromas to meld together.",
      "Layer eggplant and meat sauce in a baking dish, creating a hearty base for the moussaka.",
      "Prepare béchamel sauce and pour over the layers, ensuring each layer is generously coated.",
      "Bake until golden and bubbly, creating a tantalizing aroma throughout the kitchen.",
      "Let it cool before serving, allowing the flavors to settle and the dish to set.",
    ],
    cookingTime: "1 hour",
    prepTime: "30 minutes",
    difficulty: "Medium",
    cuisine: "Greek",
    image: RICEFISH,
    icons: {
      icon1: <SetMealIcon />,
      icon2: <RestaurantIcon />,
      icon3: <OutdoorGrillIcon />,
      icon4: <LocalFloristIcon />,
    },
  },
  {
    recipeID: "tzatziki-0147",
    title: "Tzatziki",
    submittedBy: "Adam B",
    submittedByImg: ADAMIMAGE,
    shortDescription:
      "A creamy Greek dip made with yogurt, cucumbers, and garlic.",
    longDescription:
      "Tzatziki is a popular Greek dip or sauce made with strained yogurt, cucumbers, garlic, olive oil, and fresh herbs like dill or mint. It's served as a condiment with grilled meats, gyros, or as a dip with pita bread and vegetables.",
    ingredients: [
      "Feta Cheese",
      "Onions",
      "Garlic",
      "Cucumber",
      "Tomato",
      "Greek Yoghurt",
      "Olive Oil",
      "Salt",
      "Pepper",
      "Red Pepper Flakes",
      "Coriander",
    ],
    method: [
      "Grate cucumbers and squeeze out excess moisture, ensuring the tzatziki remains thick and creamy.",
      "Mix grated cucumbers with strained yogurt, creating a luscious base for the dip.",
      "Add minced garlic, olive oil, and chopped herbs, infusing the tzatziki with vibrant flavors.",
      "Season with salt and pepper to taste, balancing the flavors perfectly.",
      "Refrigerate for at least an hour before serving, allowing the flavors to meld together and intensify.",
    ],
    cookingTime: "0 minutes",
    prepTime: "10 minutes",
    difficulty: "Easy",
    image: BUCK,
    icons: {
      icon1: <OutdoorGrillIcon />,
      icon2: <LocalFloristIcon />,
      icon3: <RestaurantIcon />,
      icon4: <SetMealIcon />,
    },
  },
  {
    recipeID: "dolma-0998",
    title: "Dolma",
    submittedBy: "Adam B",
    submittedByImg: ADAMIMAGE,
    shortDescription:
      "Stuffed grape leaves filled with rice, pine nuts, and herbs.",
    longDescription:
      "Dolma, also known as stuffed grape leaves, is a popular dish in Turkey and Greece. Grape leaves are stuffed with a mixture of rice, pine nuts, onions, and herbs, then rolled and cooked until tender. They are typically served cold as an appetizer or part of a mezze platter.",
    ingredients: [
      "Feta Cheese",
      "Onions",
      "Garlic",
      "Cucumber",
      "Tomato",
      "Greek Yoghurt",
      "Olive Oil",
      "Salt",
      "Pepper",
      "Red Pepper Flakes",
      "Coriander",
    ],
    method: [
      "Prepare grape leaves by blanching in hot water, making them pliable for rolling.",
      "Make the filling by mixing rice, pine nuts, onions, and herbs, creating a flavorful stuffing.",
      "Place a spoonful of filling onto each grape leaf and roll tightly, ensuring they hold their shape during cooking.",
      "Arrange dolmas in a pot and cover with water, allowing them to cook evenly.",
      "Simmer over low heat until rice is cooked and grape leaves are tender, infusing the dolmas with rich flavors.",
      "Serve cold with lemon wedges, adding a refreshing citrusy finish to the dish.",
    ],
    cookingTime: "1 hour",
    prepTime: "45 minutes",
    difficulty: "Medium",
    cuisine: "Turkish",
    image: SALAD2,
    icons: {
      icon1: <SetMealIcon />,
      icon2: <RestaurantIcon />,
      icon3: <OutdoorGrillIcon />,
      icon4: <LocalFloristIcon />,
    },
  },
  {
    recipeID: "hummus-0127",
    title: "Hummus",
    submittedBy: "Adam B",
    submittedByImg: ADAMIMAGE,
    shortDescription:
      "A creamy dip made with chickpeas, tahini, and lemon juice.",
    longDescription:
      "Hummus is a popular Middle Eastern dip made from cooked, mashed chickpeas blended with tahini, olive oil, lemon juice, garlic, and spices. It's creamy, savory, and often served as a dip with pita bread or vegetables.",
    ingredients: [
      "Feta Cheese",
      "Onions",
      "Garlic",
      "Cucumber",
      "Tomato",
      "Greek Yoghurt",
      "Olive Oil",
      "Salt",
      "Pepper",
      "Red Pepper Flakes",
      "Coriander",
    ],
    method: [
      "Drain and rinse chickpeas, ensuring they're clean and ready for blending.",
      "Blend chickpeas, tahini, lemon juice, garlic, and olive oil until smooth, creating a creamy base for the hummus.",
      "Season with salt, cumin, and paprika to taste, enhancing the flavors of the dip.",
      "Garnish with a drizzle of olive oil and a sprinkle of paprika before serving, adding visual appeal and extra flavor.",
    ],
    cookingTime: "0 minutes",
    prepTime: "10 minutes",
    difficulty: "Easy",
    cuisine: "Russian",
    image: EGGS,
    icons: {
      icon1: <RestaurantIcon />,
      icon2: <SetMealIcon />,
      icon3: <LocalFloristIcon />,
      icon4: <OutdoorGrillIcon />,
    },
  },
  {
    recipeID: "baklava-0567",
    title: "Baklava",
    submittedBy: "Adam B",
    submittedByImg: ADAMIMAGE,
    shortDescription:
      "A sweet pastry made with layers of filo dough, nuts, and honey syrup.",
    longDescription:
      "Baklava is a rich and sweet pastry made of layers of filo dough filled with chopped nuts, such as walnuts, almonds, or pistachios, and sweetened with honey or syrup. It's a popular dessert in Greece and other Mediterranean countries.",
    ingredients: [
      "Feta Cheese",
      "Onions",
      "Garlic",
      "Cucumber",
      "Tomato",
      "Greek Yoghurt",
      "Olive Oil",
      "Salt",
      "Pepper",
      "Red Pepper Flakes",
      "Coriander",
    ],
    method: [
      "Layer filo dough sheets in a baking dish, brushing each layer with melted butter to create a flaky texture.",
      "Spread a mixture of chopped nuts evenly over the filo dough, ensuring every bite is filled with nutty goodness.",
      "Continue layering filo dough and nuts until the dish is filled, creating a tower of deliciousness.",
      "Cut into diamond or square shapes, adding visual appeal to the baklava.",
      "Bake in a preheated oven until golden brown, filling the kitchen with a sweet aroma.",
      "Pour honey syrup over the hot baklava, allowing it to seep into every layer for a luscious finish.",
      "Allow to cool before serving, allowing the flavors to meld together and the pastry to firm up.",
    ],
    cookingTime: "45 minutes",
    prepTime: "30 minutes",
    difficulty: "Medium",
    cuisine: "Greek",
    image: MEATBALLS,
    icons: {
      icon1: <RestaurantIcon />,
      icon2: <OutdoorGrillIcon />,
      icon3: <SetMealIcon />,
      icon4: <LocalFloristIcon />,
    },
  },
  {
    recipeID: "kebab-0279",
    title: "Kebab",
    submittedBy: "Adam B",
    submittedByImg: ADAMIMAGE,
    shortDescription: "Grilled skewers of marinated meat and vegetables.",
    longDescription:
      "Kebab is a traditional Turkish dish consisting of pieces of meat, fish, or vegetables threaded onto skewers and grilled or roasted. The meat is often marinated in a mixture of spices, yogurt, and olive oil for added flavor and tenderness.",
    method: [
      "Cut meat into cubes and marinate in a mixture of yogurt, olive oil, lemon juice, garlic, and spices, allowing the flavors to penetrate the meat.",
      "Thread marinated meat onto skewers, alternating with vegetables if desired, creating a colorful and flavorful presentation.",
      "Preheat grill to medium-high heat, ensuring it's hot enough to sear the meat and lock in juices.",
      "Grill kebabs, turning occasionally, until meat is cooked through and vegetables are tender, infusing the skewers with smoky flavors.",
      "Serve hot with rice or flatbread, creating a complete and satisfying meal.",
    ],
    ingredients: [
      "Feta Cheese",
      "Onions",
      "Garlic",
      "Cucumber",
      "Tomato",
      "Greek Yoghurt",
      "Olive Oil",
      "Salt",
      "Pepper",
      "Red Pepper Flakes",
      "Coriander",
    ],
    cookingTime: "20 minutes",
    prepTime: "1 hour",
    difficulty: "Medium",
    cuisine: "Turkish",
    image: SALAD1,
    icons: {
      icon1: <SetMealIcon />,
      icon2: <OutdoorGrillIcon />,
      icon3: <LocalFloristIcon />,
      icon4: <RestaurantIcon />,
    },
  },
  {
    recipeID: "spanakopita-0129",
    title: "Spanakopita",
    submittedBy: "Adam B",
    submittedByImg: ADAMIMAGE,
    shortDescription: "A savory Greek pie filled with spinach and feta cheese.",
    longDescription:
      "Spanakopita is a classic Greek pie made with layers of flaky phyllo pastry filled with a mixture of spinach, feta cheese, onions, eggs, and herbs. It's a delicious and satisfying dish that can be served as an appetizer, side dish, or light meal.",
    method: [
      "Prepare the filling by sautéing onions and garlic until soft, creating a flavorful base for the spanakopita.",
      "Add chopped spinach and cook until wilted, infusing the filling with vibrant color and nutrients.",
      "Remove from heat and stir in crumbled feta cheese, beaten eggs, and chopped herbs, ensuring a creamy and flavorful filling.",
      "Layer phyllo pastry sheets in a baking dish, brushing each sheet with melted butter to create a crispy crust.",
      "Spread the spinach and feta mixture evenly over the pastry, ensuring every bite is filled with savory goodness.",
      "Fold the edges of the pastry over the filling to form a pie, sealing in the flavors and creating a beautiful presentation.",
      "Bake in a preheated oven until golden and crispy, creating a tantalizing aroma throughout the kitchen.",
      "Allow to cool slightly before slicing and serving, ensuring the spanakopita holds its shape.",
    ],
    ingredients: [
      "Feta Cheese",
      "Onions",
      "Garlic",
      "Cucumber",
      "Tomato",
      "Greek Yoghurt",
      "Olive Oil",
      "Salt",
      "Pepper",
      "Red Pepper Flakes",
      "Coriander",
    ],
    cookingTime: "45 minutes",
    prepTime: "30 minutes",
    difficulty: "Medium",
    cuisine: "English",
    image: BUCK,
    icons: {
      icon1: <LocalFloristIcon />,
      icon2: <OutdoorGrillIcon />,
      icon3: <SetMealIcon />,
      icon4: <RestaurantIcon />,
    },
  },
  {
    recipeID: "baklava-ice-cream-0228",
    title: "Baklava Ice Cream",
    submittedBy: "Adam B",
    submittedByImg: ADAMIMAGE,
    shortDescription: "A frozen dessert combining baklava and ice cream.",
    longDescription:
      "Baklava ice cream is a delicious frozen treat that combines the flavors of traditional baklava with creamy ice cream. It's made by layering pieces of baklava between layers of vanilla ice cream and freezing until firm.",
    method: [
      "Crumble baklava into small pieces, ensuring they're evenly distributed throughout the ice cream.",
      "Soften vanilla ice cream and spread a layer in a loaf pan, creating a creamy base for the dessert.",
      "Sprinkle a layer of baklava pieces over the ice cream, adding a crunchy texture and sweet flavor.",
      "Repeat layers of ice cream and baklava until the pan is full, creating a beautiful layered dessert.",
      "Cover with plastic wrap and freeze until firm, allowing the flavors to meld together and the dessert to set.",
      "Slice and serve topped with honey or syrup if desired, adding extra sweetness and flavor to the dessert.",
    ],
    ingredients: [
      "Feta Cheese",
      "Onions",
      "Garlic",
      "Cucumber",
      "Tomato",
      "Greek Yoghurt",
      "Olive Oil",
      "Salt",
      "Pepper",
      "Red Pepper Flakes",
      "Coriander",
    ],
    cookingTime: "0 minutes",
    prepTime: "10 minutes",
    difficulty: "Easy",
    cuisine: "Greek",
    image: RICEFISH,
    icons: {
      icon1: <RestaurantIcon />,
      icon2: <SetMealIcon />,
      icon3: <LocalFloristIcon />,
      icon4: <OutdoorGrillIcon />,
    },
  },
  {
    recipeID: "turkish-delight-0972",
    title: "Turkish Delight",
    submittedBy: "Adam B",
    submittedByImg: ADAMIMAGE,
    shortDescription:
      "A sweet confection made with gelatin, sugar, and flavorings.",
    longDescription:
      "Turkish delight, also known as lokum, is a sweet confection made from starch and sugar gelatin, flavored with various fruit or nut essences. It's often dusted with powdered sugar and served as a treat or dessert in Turkey and other Middle Eastern countries.",
    method: [
      "Dissolve gelatin in water and let it bloom, ensuring it's fully hydrated for a smooth texture.",
      "Cook sugar and water until it reaches the soft-ball stage, creating a syrupy base for the Turkish delight.",
      "Slowly add the gelatin mixture to the sugar syrup, stirring constantly to prevent lumps.",
      "Cook until the mixture thickens, creating a firm and chewy texture for the Turkish delight.",
      "Remove from heat and stir in flavorings and food coloring if desired, adding vibrant colors and delicious flavors to the confection.",
      "Pour into a greased pan and let it set, allowing the Turkish delight to firm up and hold its shape.",
      "Cut into squares and dust with powdered sugar, adding a sweet finishing touch to the dessert.",
    ],
    ingredients: [
      "Feta Cheese",
      "Onions",
      "Garlic",
      "Cucumber",
      "Tomato",
      "Greek Yoghurt",
      "Olive Oil",
      "Salt",
      "Pepper",
      "Red Pepper Flakes",
      "Coriander",
    ],
    cookingTime: "30 minutes",
    prepTime: "1 hour",
    difficulty: "Medium",
    cuisine: "Turkish",
    image: SALAD1,
    icons: {
      icon1: <OutdoorGrillIcon />,
      icon2: <LocalFloristIcon />,
      icon3: <RestaurantIcon />,
      icon4: <SetMealIcon />,
    },
  },
];