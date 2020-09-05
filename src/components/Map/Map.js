import React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'

import MapRow from './MapRow'

const MapArea = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  width: 800px;
  height: 400px;
  border: 4px solid white;
`

export const Map = ({ matrix, ...props }) => {
  return (
    <MapArea>
      {matrix.map(row => (
        <MapRow cells={row} />
      ))}
    </MapArea>
  )
}

const mapStateToProps = ({ map }) => ({ ...map })

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
