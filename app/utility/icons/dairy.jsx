const DairyIcon = () => (
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
export default DairyIcon;