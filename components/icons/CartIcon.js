import * as React from "react"

const CartIcon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.927 15.363 14.1 4.458a.5.5 0 0 0-.5-.462H2.389a.5.5 0 0 0-.499.463l-.835 11.004a.5.5 0 0 0 .499.538H14.446a.5.5 0 0 0 .481-.638ZM2.092 15l.76-10.004h10.285L13.897 15H2.091Z"
      fill="#000"
    />
    <path
      d="M7.995 0a4.007 4.007 0 0 0-4.002 4.003v1.993a.5.5 0 0 0 1 0V4.002A3.005 3.005 0 0 1 7.996 1a3.005 3.005 0 0 1 3 3.003v1.993a.5.5 0 0 0 1.001 0V4.002A4.007 4.007 0 0 0 7.995 0Z"
      fill="#000"
    />
  </svg>
)

export default CartIcon