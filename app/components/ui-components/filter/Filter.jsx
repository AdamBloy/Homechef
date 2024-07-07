"use client";
import FilterButton from "./FilterButton";
import SelectorOptionsButton from "./SelectorOptionsButton";
import styles from "./filter.module.css";
import { useState } from "react";
import MainFilterButton from "./MainFilterButton";

const MAIN_FILTER = ["Cuisine", "Ingredient", "Meal", "Difficulty", "Time"];

const CUISINE_LIST = [
  "Fusion",
  "Italian",
  "French",
  "Japanese",
  "Chinese",
  "Indian",
  "Mexican",
  "Spanish",
  "Thai",
  "Greek",
  "Lebanese",
  "Mediterranean",
  "Russian",
  "English",
  "Turkish",
  "European",
  "South American",
  "North American",
];

const INGREDIENTS_LIST = [
  "Chicken",
  "Lamb",
  "Beef",
  "Fish",
  "Vegetable",
  "Cheese",
];
const MEAL_LIST = ["Breakfast", "Lunch", "Dinner", "Snack", "Desert"];
const DIFFICULTY_LIST = ["Basic", "Easy", "Medium", "Hard", "Pro"];
const TIME_LIST = ["< 10min", "< 30min", "< 1hr", "< 2hr", "3hr+"];

export default function Filter({
  allRecipeData,
  filteredRecipes,
  filterItems,
}) {
  const [selectedFilterSelector, setSelectedFilterSelector] = useState("");
  const [selectedOptionsSelector, setSelectedOptionsSelector] = useState([]);

  function handleSelectFilter(filtername) {
    setSelectedFilterSelector(filtername);
    console.log(filtername);
  }
  function handleSelectOptionsFilter(optionname) {
    setSelectedOptionsSelector(optionname);
    console.log(optionname);
  }

  return (
    <>
      <div className={styles.filterContainer}>
        <div className={styles.filterSelectorContainer}>
          {/* <MainFilterButton /> */}
          {MAIN_FILTER.map((item, index) => (
            <FilterButton
              key={index}
              id={item}
              isSelected={selectedFilterSelector === `${item}`}
              filtertitle={item}
              // onClick={() => handleSelectFilter(`${item}`)}
              onClick={filterItems(`${item}`)}
            />
          ))}
          <FilterButton
            id="Clear"
            isSelected={selectedFilterSelector === "Clear"}
            filtertitle="Clear Filter"
            onClick={() => handleSelectFilter("")}
          />
        </div>
        {selectedFilterSelector === "Cuisine" ? (
          <div className={styles.optionsContainer}>
            <div className={styles.filterOptionsContainer}>
              <div className={styles.filterSelectorBtnGrid}>
                {CUISINE_LIST.map((item, index) => (
                  <SelectorOptionsButton
                    key={index}
                    id={item}
                    isSelected={selectedOptionsSelector === `${item}`}
                    optiontitle={item}
                    onClick={() => handleSelectOptionsFilter(`${item}`)}
                  />
                ))}
                <SelectorOptionsButton
                  className={styles.filterOptionsClear}
                  id="Clear"
                  isSelected={selectedOptionsSelector === "Clear"}
                  optiontitle="Clear Filter"
                  onClick={() => handleSelectOptionsFilter("")}
                />
              </div>
            </div>
            <div className={styles.selectorOptions}></div>
          </div>
        ) : null}
        {selectedFilterSelector === "Ingredient" ? (
          <div className={styles.optionsContainer}>
            <div className={styles.filterOptionsContainer}>
              {INGREDIENTS_LIST.map((item, index) => (
                <SelectorOptionsButton
                  key={index}
                  id={item}
                  isSelected={selectedOptionsSelector === `${item}`}
                  optiontitle={item}
                  onClick={() => handleSelectOptionsFilter(`${item}`)}
                />
              ))}
              <SelectorOptionsButton
                id="Clear"
                isSelected={selectedOptionsSelector === "Clear"}
                optiontitle="Clear Filter"
                onClick={() => handleSelectOptionsFilter("")}
              />
            </div>
          </div>
        ) : null}
        {selectedFilterSelector === "Meal" ? (
          <div className={styles.optionsContainer}>
            <div className={styles.filterOptionsContainer}>
              {MEAL_LIST.map((item, index) => (
                <SelectorOptionsButton
                  key={index}
                  id={item}
                  isSelected={selectedOptionsSelector === `${item}`}
                  optiontitle={item}
                  onClick={() => handleSelectOptionsFilter(`${item}`)}
                />
              ))}
              <SelectorOptionsButton
                id="Clear"
                isSelected={selectedOptionsSelector === "Clear"}
                optiontitle="Clear Filter"
                onClick={() => handleSelectOptionsFilter("")}
              />
            </div>
          </div>
        ) : null}
        {selectedFilterSelector === "Difficulty" ? (
          <div className={styles.optionsContainer}>
            <div className={styles.filterOptionsContainer}>
              {DIFFICULTY_LIST.map((item, index) => (
                <SelectorOptionsButton
                  key={index}
                  id={item}
                  isSelected={selectedOptionsSelector === `${item}`}
                  optiontitle={item}
                  onClick={() => handleSelectOptionsFilter(`${item}`)}
                />
              ))}
              <SelectorOptionsButton
                id="Clear"
                isSelected={selectedOptionsSelector === "Clear"}
                optiontitle="Clear Filter"
                onClick={() => handleSelectOptionsFilter("")}
              />
            </div>
          </div>
        ) : null}
        {selectedFilterSelector === "Time" ? (
          <div className={styles.optionsContainer}>
            <div className={styles.filterOptionsContainer}>
              {TIME_LIST.map((item, index) => (
                <SelectorOptionsButton
                  key={index}
                  id={item}
                  isSelected={selectedOptionsSelector === `${item}`}
                  optiontitle={item}
                  onClick={() => handleSelectOptionsFilter(`${item}`)}
                />
              ))}
              <SelectorOptionsButton
                id="Clear"
                isSelected={selectedOptionsSelector === "Clear"}
                optiontitle="Clear Filter"
                onClick={() => handleSelectOptionsFilter("")}
              />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
