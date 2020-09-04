import React from 'react'
import styled from '@emotion/styled'
import { tiles } from './tiles'

import MapRow from './MapRow'

const MapArea = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  width: 800px;
  height: 400px;
  border: 4px solid white;
`

export const Map = ({ tiles }) => {
  return (
    <MapArea>
      {tiles.map(tile => (
        <MapRow cells={tile} />
      ))}
    </MapArea>
  )
}

Map.defaultProps = {
  tiles
}

export default Map
