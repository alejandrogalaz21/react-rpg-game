import React from 'react'
import Layout from './Layout'

import Player from './Player/Player'

function Home() {
  return (
    <Layout>
      {/* Begin page content */}
      <main role='main' className='flex-shrink-0'>
        <div className='container'>
          <Player />
        </div>
      </main>
    </Layout>
  )
}

export default Home
