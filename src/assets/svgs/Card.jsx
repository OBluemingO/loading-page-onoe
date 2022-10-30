import React from "react";

const Card = ({ width = "334", height = "240", fill = "white" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 334 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_1_331)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M196.203 18.0356C200.251 25.7044 202.275 29.5388 203.466 30.6697C204.997 32.1239 205.153 32.2179 207.154 32.8933C208.71 33.4185 211.14 33.4185 216 33.4185H305.011C315.158 33.4185 320.232 33.4185 324.107 35.3932C327.516 37.1303 330.288 39.902 332.025 43.3111C334 47.1868 334 52.2604 334 62.4075V210.429C334 220.577 334 225.65 332.025 229.526C330.288 232.935 327.516 235.707 324.107 237.444C320.232 239.418 315.158 239.418 305.011 239.418H28.9891C18.8419 239.418 13.7684 239.418 9.89269 237.444C6.48354 235.707 3.71181 232.935 1.97476 229.526C0 225.65 0 220.577 0 210.429V62.4075C0 52.2604 0 47.1868 1.97476 43.3111C3.71181 39.902 6.48354 37.1303 9.89269 35.3932C13.7684 33.4185 18.8419 33.4185 28.9891 33.4185H118C122.86 33.4185 125.29 33.4185 126.846 32.8933C128.847 32.2179 129.003 32.1239 130.534 30.6697C131.725 29.5388 133.749 25.7044 137.797 18.0356C143.327 7.55906 154.33 0.418457 167 0.418457C179.67 0.418457 190.673 7.55907 196.203 18.0356Z"
          fill={fill}
        />
      </g>
      <defs>
        <filter
          id="filter0_b_1_331"
          x="-11"
          y="-10.5815"
          width="356"
          height="261"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.5" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1_331"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1_331"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Card;
