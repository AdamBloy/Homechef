"use client";
import styles from "./submit.module.css";
import Header from "../components/ui-components/header/Header";
import Footer from "../components/ui-components/footer/Footer";
import { useState, useRef, useEffect } from "react";
import { gatherFormData } from "../utility/gatherFormData";
import { addRandomNumber } from "../utility/addRandomNumber";
import { Base64 } from "js-base64";

export default function SubmitRecipe() {
  const [checkedRecipe, setCheckedRecipe] = useState(false);

  const [newRecipe, setNewRecipe] = useState({
    title: "", // Default to an empty string
    shortDescription: "",
    longDescription: "",
    ingredients: "",
    prepTime: "",
    cookingTime: "",
    cuisine: "",
    difficulty: "",
    foodType: "",
    method: "",
    image: null, // For file inputs, default to null
    submittedBy: "",
    submittedByInfo: "",
    submittedByImg: null, // For file inputs, default to null
    icons: {
      icon1: "<Test1 />",
      icon2: "<Test2 />",
      icon3: "<Test3 />",
    },
    recipeStatus: "Under Review",
  });

  const [debouncedRecipe, setDebouncedRecipe] = useState({});
  function convertRecipeToBase64(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(reader.result); // base64 encoded string
        setNewRecipe((prevState) => ({
          ...prevState,
          image: reader.result,
        }));
      };
      reader.onerror = (error) => {
        console.log("convertRecipeToBase64 Error", error);
      };
    }
  }

  function convertUserToBase64(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(reader.result); // base64 encoded string
        setNewRecipe((prevState) => ({
          ...prevState,
          submittedByImg: reader.result,
        }));
      };
      reader.onerror = (error) => {
        console.log("convertUserToBase64 Error", error);
      };
    }
  }
  // function convertRecipeToBase64(e) {
  //   console.log(e);
  //   console.log(e.target.file);
  //   const reader = new FileReader();
  //   reader.readAsDataURL(e.target.files[0]);
  //   reader.onload = () => {
  //     console.log(reader.result); //base64 encoded string
  //     setNewRecipe((prevState) => ({
  //       ...prevState,
  //       image: reader.result,
  //     }));
  //   };
  //   reader.onerror = (error) => {
  //     console.log("convertRecipeToBase64 Error", error);
  //   };
  // }
  // function convertUserToBase64(e) {
  //   console.log(e);
  //   const reader = new FileReader();
  //   reader.readAsDataURL(e.target.files[0]);
  //   reader.onload = () => {
  //     console.log(reader.result); //base64 encoded string
  //     setNewRecipe((prevState) => ({
  //       ...prevState,
  //       submittedByImg: reader.result,
  //     }));
  //   };
  //   reader.onerror = (error) => {
  //     console.log("convertUserToBase64 Error", error);
  //   };
  // }

  // Utilizing useRef to reference the forms
  const form1Ref = useRef(null);
  const form2Ref = useRef(null);
  const form3Ref = useRef(null);

  const updateRecipe = (formData) => {
    const recipeID = addRandomNumber(formData.title);
    setNewRecipe((prevState) => ({
      ...prevState,
      ...formData,
      recipeID: recipeID,
    }));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedRecipe(newRecipe);
      // console.log("debounced");
    }, 500); // Delay 500ms on change
    return () => clearTimeout(timeout);
  }, [newRecipe]);

  const submitRecipeHandler = (e) => {
    e.preventDefault();

    const formData1 = gatherFormData(form1Ref);
    const formData2 = gatherFormData(form2Ref);
    const formData3 = gatherFormData(form3Ref);
    const allFormData = { ...formData1, ...formData2, ...formData3 };
    // updateRecipe(allFormData);
    setCheckedRecipe(true);
    console.log(newRecipe);
    console.log("ADD TO DB RECIPE IMAGE", typeof newRecipe.image[0]);
    console.log("ADD TO DB USER IMAGE", typeof newRecipe.submittedByImg[0]);

  };

  // const addRecipeToDB = async (e) => {
  //   try {
  //     const response = await fetch("http://localhost:3000/api/submit-recipe", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newRecipe), // Assuming newRecipe contains all the data
  //     });

  //     if (response.ok) {
  //       console.log("Recipe submitted successfully");
  //       // Handle success, such as showing a success message to the user
  //     } else {
  //       console.error("Failed to submit recipe");
  //       // Handle failure, such as showing an error message to the user
  //     }
  //   } catch (error) {
  //     console.error("Error submitting recipe:", error);
  //     // Handle error, such as showing an error message to the user
  //   }
  // };

  // const handleRecipeImage = (files) => {
  //   const file = files[0];
  //   const reader = new FileReader();

  //   reader.onload = (event) => {
  //     const recipeImageData = event.target.result; // base64-encoded image data
  //     setNewRecipe((prevState) => ({
  //       ...prevState,
  //       image: recipeImageData,
  //     }));
  //   };

  //   reader.readAsDataURL(file);
  // };
  // const handleUserImage = (files) => {
  //   const file = files[0];
  //   const reader = new FileReader();

  //   reader.onload = (event) => {
  //     const userImageData = event.target.result; // base64-encoded image data
  //     setNewRecipe((prevState) => ({
  //       ...prevState,
  //       image: userImageData,
  //     }));
  //   };

  //   reader.readAsDataURL(file);
  // };

  const addRecipeToDB = async (e) => {
    try {
      // const image = await convertToBase64(newRecipe.image[0]);
      // const submittedByImg = await convertToBase64(newRecipe.submittedByImg[0]);

      const requestBody = {
        recipeID: addRandomNumber(newRecipe.title),
        title: newRecipe.title,
        submittedBy: newRecipe.submittedBy,
        submittedByImg: newRecipe.submittedByImg || null, // Base64-encoded string or null
        shortDescription: newRecipe.shortDescription,
        longDescription: newRecipe.longDescription,
        ingredients: newRecipe.ingredients
          .split(",")
          .map((ingredient) => ingredient.trim()),
        method: newRecipe.method.split(",").map((step) => step.trim()),
        cookingTime: newRecipe.cookingTime,
        prepTime: newRecipe.prepTime,
        difficulty: newRecipe.difficulty,
        cuisine: newRecipe.cuisine,
        image: newRecipe.image || null, // Base64-encoded string or null
        icons: newRecipe.icons,
        recipeStatus: newRecipe.recipeStatus,
      };

      console.log("Request Body:", requestBody);

      const response = await fetch("http://localhost:3000/api/submit-recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        console.log("Recipe submitted successfully");
        // Handle success, such as showing a success message to the user
      } else {
        console.error("Failed to submit recipe");
        // Handle failure, such as showing an error message to the user
      }
    } catch (error) {
      console.error("Error submitting recipe:", error);
      // Handle error, such as showing an error message to the user
    }
  };

  // const convertToBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);
  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };
  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = () => {
        const arrayBuffer = fileReader.result;
        const base64 = Base64.encode(arrayBuffer);
        resolve(base64);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  // const convertToBase64 = (file) => {
  //   console.log(file);
  //   return new Promise((resolve, reject) => {
  //     // Check if the file argument is a Blob object
  //     if (
  //       file instanceof Blob ||
  //       (file.constructor && file.constructor.name === "Blob")
  //     ) {
  //       const fileReader = new FileReader();
  //       fileReader.readAsDataURL(file);
  //       fileReader.onload = () => {
  //         resolve(fileReader.result);
  //       };
  //       fileReader.onerror = (error) => {
  //         reject(error);
  //       };
  //     } else {
  //       // If the file argument is not a Blob, reject the Promise
  //       reject(new Error("Invalid file object provided"));
  //     }
  //   });
  // };

  const cancelRecipeHandler = () => {
    setCheckedRecipe(false);
  };

  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.submitContainer}>
          <div className={styles.submitText}>
            <h1 className={styles.submitTextTitle}>Submit your recipe</h1>
            <h2 className={styles.submitTextSubTitle}>
              Got something tasty you want to share with the homechef community?
            </h2>
            <p className={styles.importantInfo}>
              Please make sure you fill out this form correctly or your recipe
              will be rejected, all fields are required to be filled out
            </p>
          </div>
          <div className={styles.formContainer}>
            <div className={styles.formArea}>
              <h3>Recipe info</h3>
              <form ref={form1Ref} id="submitForm1">
                <label className={styles.submitFormLabel}>Dish Name</label>
                <input
                  className={styles.submitFormInput}
                  value={newRecipe.title}
                  name="title"
                  onChange={(e) =>
                    setNewRecipe({ ...newRecipe, title: e.target.value })
                  }
                ></input>
                <label className={styles.submitFormLabel}>
                  Short Description - 10-15 words
                </label>
                <input
                  className={styles.submitFormInput}
                  name="shortDescription"
                  value={newRecipe.shortDescription}
                  onChange={(e) =>
                    setNewRecipe({
                      ...newRecipe,
                      shortDescription: e.target.value,
                    })
                  }
                ></input>
                <label className={styles.submitFormLabel}>
                  Long Description - as long as you like
                </label>
                <textarea
                  className={styles.submitFormTextarea}
                  name="longDescription"
                  value={newRecipe.longDescription}
                  onChange={(e) =>
                    setNewRecipe({
                      ...newRecipe,
                      longDescription: e.target.value,
                    })
                  }
                ></textarea>
                <label className={styles.submitFormLabel}>
                  Ingredients - split with a comma (eg salt, pepper, cheese)
                </label>
                <textarea
                  className={styles.submitFormTextarea}
                  name="ingredients"
                  value={newRecipe.ingredients}
                  onChange={(e) =>
                    setNewRecipe({ ...newRecipe, ingredients: e.target.value })
                  }
                ></textarea>
                <label className={styles.submitFormLabel}>
                  Prep Time - in minutes
                </label>
                <input
                  className={styles.submitFormInput}
                  name="prepTime"
                  value={newRecipe.prepTime}
                  onChange={(e) =>
                    setNewRecipe({ ...newRecipe, prepTime: e.target.value })
                  }
                ></input>
                <label className={styles.submitFormLabel}>
                  Total Cook Time - in minutes
                </label>
                <input
                  className={styles.submitFormInput}
                  name="cookingTime"
                  value={newRecipe.cookingTime}
                  onChange={(e) =>
                    setNewRecipe({ ...newRecipe, cookingTime: e.target.value })
                  }
                ></input>
              </form>
            </div>
            <div className={styles.formArea}>
              <h3>Further Recipe info</h3>
              <form ref={form2Ref} id="submitForm2">
                <label className={styles.submitFormLabel}>
                  Cuisine type (eg Greek, Indian etc)
                </label>
                <input
                  className={styles.submitFormInput}
                  name="cuisine"
                  value={newRecipe.cuisine}
                  onChange={(e) =>
                    setNewRecipe({ ...newRecipe, cuisine: e.target.value })
                  }
                ></input>
                <label className={styles.submitFormLabel}>
                  Difficulty rating out of 3 ( 1 = easy, 3 = hard)
                </label>
                <input
                  className={styles.submitFormInput}
                  name="difficulty"
                  value={newRecipe.difficulty}
                  onChange={(e) =>
                    setNewRecipe({ ...newRecipe, difficulty: e.target.value })
                  }
                ></input>
                <label className={styles.submitFormLabel}>
                  Food type (Meat, Fish, Vegetarian etc)
                </label>
                <input
                  className={styles.submitFormInput}
                  name="foodType"
                  value={newRecipe.foodType}
                  onChange={(e) =>
                    setNewRecipe({ ...newRecipe, foodType: e.target.value })
                  }
                ></input>
                <label
                  id={styles.methodInput}
                  className={styles.submitFormLabel}
                >
                  Method - split each stage with a comma
                </label>
                <textarea
                  className={styles.submitFormTextarea}
                  name="method"
                  value={newRecipe.method}
                  onChange={(e) =>
                    setNewRecipe({ ...newRecipe, method: e.target.value })
                  }
                ></textarea>
                <label className={styles.submitFormLabel}>
                  Photo of dish (must be clear and professional)
                </label>
                <input
                  type="file"
                  className={styles.submitFormInput}
                  name="image"
                  accept="image/*"
                  // onChange={(e) => handleRecipeImage(e.target.files)}
                  onChange={convertRecipeToBase64}
                ></input>
                {!newRecipe.image ? (
                  ""
                ) : (
                  <>
                    <p className={styles.submitFormPreviewText}>
                      Image preview
                    </p>
                    <img
                      alt="test"
                      src={newRecipe.image}
                      className={styles.imgPreview}
                    ></img>
                  </>
                )}
              </form>
            </div>
            <div className={styles.formArea}>
              <h3>Your info</h3>
              <form ref={form3Ref} id="submitForm3">
                <label className={styles.submitFormLabel}>Your name</label>
                <input
                  className={styles.submitFormInput}
                  name="submittedBy"
                  value={newRecipe.submittedBy}
                  onChange={(e) =>
                    setNewRecipe({ ...newRecipe, submittedBy: e.target.value })
                  }
                ></input>
                <label className={styles.submitFormLabel}>
                  Your social media or website
                </label>
                <input
                  className={styles.submitFormInput}
                  name="submittedByInfo"
                  value={newRecipe.submittedByInfo}
                  onChange={(e) =>
                    setNewRecipe({
                      ...newRecipe,
                      submittedByInfo: e.target.value,
                    })
                  }
                ></input>
                <label className={styles.submitFormLabel}>
                  Your photo (optional)
                </label>
                <input
                  type="file"
                  className={styles.submitFormInput}
                  name="submittedByImg"
                  accept="image/*"
                  onChange={convertUserToBase64}
                  // onChange={(e) => handleUserImage(e.target.files)}
                ></input>
                {!newRecipe.submittedByImg ? (
                  ""
                ) : (
                  <>
                    <p className={styles.submitFormPreviewText}>
                      Image preview
                    </p>
                    <img
                      alt="test"
                      src={newRecipe.submittedByImg}
                      className={styles.imgPreview}
                    ></img>
                  </>
                )}
              </form>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            {!checkedRecipe && (
              <>
                <p className={styles.submitLabelText}>
                  Please carefully check all of the information you have entered
                  is correct. If it is, confirm this by clicking the button and
                  then submit it for review. Thanks!
                </p>
                <button
                  className={styles.submitButton}
                  onClick={submitRecipeHandler}
                >
                  I have checked my recipe
                </button>
              </>
            )}
            {checkedRecipe && (
              <>
                <button className={styles.submitButton} onClick={addRecipeToDB}>
                  Submit recipe
                </button>
                <button
                  className={styles.cancelSubmitButton}
                  onClick={cancelRecipeHandler}
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
