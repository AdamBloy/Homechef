const DrinkIcon = () => (
  <svg
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
export default DrinkIcon;