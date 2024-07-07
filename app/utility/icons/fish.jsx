import styles from "./iconStyle.module.css";

const FishIcon = () => (
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
export default FishIcon;
