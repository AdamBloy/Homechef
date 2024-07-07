import styles from "./filter.module.css";

export default function FilterButton({
  filtertitle,
  isSelected,
  onClick,
  ...props
}) {
  return (
    <div
      filtertitle={filtertitle}
      className={
        isSelected
          ? `${styles.filterSelectorSelected}`
          : `${styles.filterSelector}`
      }
      onClick={onClick}
    >
      {filtertitle}
    </div>
  );
}
