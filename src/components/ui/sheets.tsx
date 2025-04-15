import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const Sheets: React.FunctionComponent<Props> = ({ width = '24', height = '14', fillColor = '#2D2926', ...rest }) => (
  <svg width={width} height={height} viewBox="0 0 25 21" {...rest}>
    <path
      fill={fillColor}
      fillRule="evenodd"
      d="M17.62 11.66h-14C1.662 11.645.064 10.087 0 8.13v-1C.01 5.992.401 4.89 1.11 4L3 1.58C3.87.584 5.127.008 6.45 0h14c1.325.001 2.54.736 3.156 1.908.617 1.173.533 2.59-.216 3.682L21 9.67c-.73 1.091-1.89 1.819-3.19 2-.063.006-.127.003-.19-.01zM1 8c0 1.432 1.158 2.595 2.59 2.6h13.63c1.167-.002 2.259-.578 2.92-1.54L22.51 5c.546-.777.613-1.794.173-2.636C22.243 1.522 21.37.996 20.42 1h-14c-1.006.026-1.954.476-2.61 1.24L1.93 4.61c-.09.11-.17.23-.25.35.597-.38 1.292-.578 2-.57h13c1.37.085 2.439 1.222 2.439 2.595 0 1.373-1.068 2.51-2.439 2.595H3.63c-.862 0-1.56-.698-1.56-1.56 0-.862.698-1.56 1.56-1.56h13c.285.005.515.235.52.52 0 .287-.233.52-.52.52h-13c-.283.005-.51.237-.51.52-.003.137.05.27.146.367.096.098.227.153.364.153h13c.81-.065 1.435-.742 1.435-1.555s-.625-1.49-1.435-1.555h-13c-.69-.01-1.356.255-1.85.737C1.286 6.65 1.005 7.31 1 8zm21.58 1.12c.412.299.754.684 1 1.13.638 1.171.552 2.603-.22 3.69L21 18c-.727 1.089-1.884 1.816-3.18 2-.063.01-.127.01-.19 0h-14C1.668 19.99.064 18.431 0 16.47v-1c-.012-1.172.38-2.313 1.11-3.23l.25-.32c.107-.114.254-.182.41-.19.287 0 .52.233.52.52-.01.114-.047.224-.11.32l-.25.31c-.09.11-.17.23-.25.35.583-.37 1.26-.568 1.95-.57h13c1.37.085 2.439 1.222 2.439 2.595 0 1.373-1.068 2.51-2.439 2.595h-13c-.862 0-1.56-.698-1.56-1.56 0-.862.698-1.56 1.56-1.56h13c.285.005.515.235.52.52 0 .287-.233.52-.52.52h-13c-.283.005-.51.237-.51.52-.003.137.05.27.146.367.096.098.227.153.364.153h13c.81-.065 1.435-.742 1.435-1.555s-.625-1.49-1.435-1.555h-13c-1.37.085-2.439 1.222-2.439 2.595 0 1.373 1.068 2.51 2.439 2.595H17.2c1.167-.002 2.259-.578 2.92-1.54l2.37-4c.541-.775.6-1.788.15-2.62-.18-.321-.425-.6-.72-.82-.146-.094-.233-.256-.23-.43.015-.28.24-.505.52-.52.137.011.267.068.37.16z"
      clipRule="evenodd"
    />
  </svg>
)

export default Sheets