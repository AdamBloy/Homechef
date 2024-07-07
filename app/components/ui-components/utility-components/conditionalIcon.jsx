import MeatIcon from "@/app/utility/icons/meat";
import FishIcon from "@/app/utility/icons/fish";
import DairyIcon from "@/app/utility/icons/dairy";
import VegetableIcon from "@/app/utility/icons/vegetable";
import DesertIcon from "@/app/utility/icons/desert";
import DrinkIcon from "@/app/utility/icons/drink";

function TypeOfFood(icon1) {
  if (icon1 === "Meat") {
    return <MeatIcon />;
  }
  if (icon1 === "Fish") {
    return <FishIcon />;
  }
  if (icon1 === "Dairy") {
    return <DairyIcon />;
  }
  if (icon1 === "Vegetable") {
    return <VegetableIcon />;
  }
  if (icon1 === "Desert") {
    return <DesertIcon />;
  }
  if (icon1 === "Drink") {
    return <DrinkIcon />;
  }
}

export default function ConditionalIcon(props) {
  return (
    <>
      <TypeOfFood icon1={props.icon1} />
    </>
  );
}
