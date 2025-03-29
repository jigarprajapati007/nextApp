import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import React, { Fragment } from 'react'

const Home = () => {
  return (
    <Fragment>
    <Header/>
    <div>
      <h1 className="h1">Home</h1>
    </div>
    <Footer/>
    </Fragment>
  )
}
 export default Home;