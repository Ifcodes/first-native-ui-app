import * as React from "react"
import Svg, { Path } from "react-native-svg"

const MenuIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 8h16M4 16h16"
    />
  </Svg>
)

export default MenuIcon