import React from 'react'
import Layout from './Layout'

import World from './World/World'

function Home() {
  return (
    <Layout>
      {/* Begin page content */}
      <main role='main' className='flex-shrink-0'>
        <div className='container'>
          <World />
        </div>
      </main>
    </Layout>
  )
}

export default Home
