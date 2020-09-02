import React from 'react'
import { useHistory } from 'react-router-dom'
import Layout from './Layout'

const About = () => {
  let history = useHistory()

  function handleClickHome() {
    history.push('/home')
  }
  return (
    <Layout>
      <h2>About</h2>
      <button onClick={handleClickHome}>Home</button>
    </Layout>
  )
}

export default About
