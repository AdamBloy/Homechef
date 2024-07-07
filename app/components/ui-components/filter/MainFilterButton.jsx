"use client";
import FilterButton from "./FilterButton";
import styles from "./filter.module.css";
import { useState } from "react";

const MAIN_FILTER = ["Cuisine", "Ingredient", "Meal", "Difficulty", "Time"];

export default function MainFilterButton() {
  const [selectedFilterSelector, setSelectedFilterSelector] = useState("");

  function handleSelectFilter(filtername) {
    setSelectedFilterSelector(filtername);
    // console.log(filtername);
  }

  return (
    <>
      <div className={styles.filterSelectorContainer}>
        {MAIN_FILTER.map((item, index) => (
          <FilterButton
            key={index}
            id={item}
            isSelected={selectedFilterSelector === `${item}`}
            filtertitle={item}
            onClick={() => handleSelectFilter(`${item}`)}
          />
        ))}
        <FilterButton
          id="Clear"
          isSelected={selectedFilterSelector === "Clear"}
          filtertitle="Clear Filter"
          onClick={() => handleSelectFilter("")}
        />
      </div>
    </>
  );
}
