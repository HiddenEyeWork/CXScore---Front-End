import React, { ReactElement } from "react";

export const Back = ({
  size = 20,
  ...props
}: CustomSVGIconProps & { size?: number }): ReactElement => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke="#1844E3"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      />
      <path
        stroke="#1844E3"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1.5"
        d="M9 15.38h4.92c1.7 0 3.08-1.38 3.08-3.08 0-1.7-1.38-3.08-3.08-3.08H7.15"
      />
      <path
        stroke="#1844E3"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M8.57 10.77 7 9.19l1.57-1.57"
      />
    </svg>
  );
};
