const BoxIcon = () => {
  return (
    <svg width="137" height="154" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#box)">
        <path
          d="m88.832 17.657 7.672 27.862-20.187 20.188-7.574-27.558 20.089-20.492Z"
          fill="#4F4F4F"
        />
        <path d="m40.983 30.78 27.761 7.37 7.571 27.558-27.602-7.413-7.73-27.515Z" fill="#333" />
        <path
          d="m40.987 30.777 20.19-20.19 27.656 7.07-20.089 20.492-27.757-7.372Z"
          fill="#828282"
        />
      </g>
      <defs>
        <filter
          id="box"
          x=".984"
          y="10.587"
          width="135.52"
          height="143.12"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="48" />
          <feGaussianBlur stdDeviation="20" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_466_177" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_466_177" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default BoxIcon;
