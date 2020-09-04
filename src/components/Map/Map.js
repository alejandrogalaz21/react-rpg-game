import React from 'react'
import styled from '@emotion/styled'
import { tiles } from './tiles'

import MapRow from './MapRow'

const MapArea = styled.div`
  width: 800px;
  height: 400px;
  background-color: #28c76f;
  border: 4px solid white;
  margin: 10px auto;
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
