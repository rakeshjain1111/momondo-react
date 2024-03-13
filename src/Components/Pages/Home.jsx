import React from 'react'
import Header from '../Component/Header'
import  banner from '../../assests/banner1.jpg'
import Enqform from '../Component/Enqform'

function Home() {
  return (
    <div className='position-relative'> 
      <img src={banner} alt='banner' ></img>
        <div className='position-absolute' style={{top:100, left:130}}> 
          <span className='fs-1 text-light '>"The best place to find <br/>the cheapest airfares"</span>
          <p className='fw-bold fs-5'>&#x268A; every single time</p>
        </div>
        <Enqform/>
    </div>
  )
}

export default Home