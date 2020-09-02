import React from 'react'
import Layout from './Layout'

function Home() {
  return (
    <Layout>
      {/* Begin page content */}
      <main role='main' className='flex-shrink-0'>
        <div className='container'>
          <h1 className='mt-5'>react-setup</h1>
          <p>
            Github <a href='https://github.com/alejandrogalaz21/react-setup'>react-setup</a>
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default Home
