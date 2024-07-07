import styles from "./iconStyle.module.css";

const MeatIcon = () => (
  <svg
    className={styles.iconDefault}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={64}
    height={64}
    fill="none"
  >
    <g clipPath="url(#a)">
      <path fill="url(#b)" d="M64 0H0v64h64V0Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h64v64H0z" />
      </clipPath>
      <pattern
        id="b"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#c" transform="scale(.01563)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="c"
        width={64}
        height={64}
      />
    </defs>
  </svg>
);
export default MeatIcon;
