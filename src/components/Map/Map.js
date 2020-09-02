import React, { Component } from 'react'
import { connect } from 'react-redux'

export const Map = () => {
  return (
    <div
      style={{
        width: '800px',
        height: '400px',
        backgroundColor: 'green',
        border: '4px solid white',
        margin: '10px auto'
      }}
    />
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
