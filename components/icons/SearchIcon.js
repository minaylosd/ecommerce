import * as React from "react"

const SearchIcon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="m15.902 14.96-4.647-4.648a6.301 6.301 0 0 0 1.412-3.979A6.34 6.34 0 0 0 6.333 0 6.34 6.34 0 0 0 0 6.333a6.34 6.34 0 0 0 6.333 6.334c1.507 0 2.89-.531 3.979-1.412l4.648 4.647c.13.13.34.13.471 0l.471-.47a.333.333 0 0 0 0-.472Zm-9.569-3.627c-2.757 0-5-2.242-5-5 0-2.757 2.243-5 5-5 2.758 0 5 2.243 5 5 0 2.758-2.242 5-5 5Z"
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

export default SearchIcon