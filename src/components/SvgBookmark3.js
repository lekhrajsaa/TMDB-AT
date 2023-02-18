import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgBookmark3(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path opacity={0.01} fill="#D8D8D8" d="M0 0H24V24H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.1 2.12a1.46 1.46 0 01.9 1.362v17.038c0 .3-.081.572-.244.819a1.423 1.423 0 01-1.206.648c-.4 0-.746-.141-1.037-.423L12 15.96l-5.513 5.605c-.3.29-.645.436-1.037.436-.192 0-.375-.04-.55-.119A1.46 1.46 0 014 20.52V3.48c0-.3.081-.572.244-.82.162-.246.381-.427.656-.541.175-.08.358-.119.55-.119h13.1c.192 0 .375.04.55.12zm-5.987 12.623L18.4 20.11V3.692H5.6V20.11l5.288-5.367L12 13.619l1.113 1.124z"
        fill="#BCBCCD"
      />
    </Svg>
  )
}

export default SvgBookmark3
