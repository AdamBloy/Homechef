import styles from "./filter.module.css";

export default function SelectorOptionsButton({
  optiontitle,
  isSelected,
  onClick,
  ...props
}) {
  return (
    <div
      optiontitle={optiontitle}
      className={
        isSelected
          ? `${styles.filterOptionsSelected}`
          : `${styles.filterOptions}`
      }
      onClick={onClick}
    >
      {optiontitle}
    </div>
  );
}
