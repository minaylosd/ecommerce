import * as React from "react"

const UserIcon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M13.657 10.343a7.97 7.97 0 0 0-3.04-1.907 4.623 4.623 0 0 0 2.008-3.811A4.63 4.63 0 0 0 8 0a4.63 4.63 0 0 0-4.625 4.625c0 1.58.796 2.977 2.008 3.811a7.97 7.97 0 0 0-3.04 1.907A7.948 7.948 0 0 0 0 16h1.25A6.758 6.758 0 0 1 8 9.25 6.758 6.758 0 0 1 14.75 16H16a7.948 7.948 0 0 0-2.343-5.657ZM8 8a3.379 3.379 0 0 1-3.375-3.375A3.379 3.379 0 0 1 8 1.25a3.379 3.379 0 0 1 3.375 3.375A3.379 3.379 0 0 1 8 8Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default UserIcon