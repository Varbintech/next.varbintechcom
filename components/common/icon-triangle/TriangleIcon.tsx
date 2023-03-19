const TriangleIcon = () => {
  return (
    <svg width="138" height="174" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#tri)">
        <path d="M97.909 19.596v65.817l-57-32.909 57-32.908Z" fill="#828282" />
        <path d="M97.906 19.596v65.817l-18.24-34.225 18.24-31.593Z" fill="#4F4F4F" />
        <path d="m79.668 51.188 18.24 34.226-57-32.91 38.76-1.316Z" fill="#333" />
      </g>
      <defs>
        <filter
          id="tri"
          x=".908"
          y="19.596"
          width="137"
          height="153.818"
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
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_466_173" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_466_173" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default TriangleIcon;
