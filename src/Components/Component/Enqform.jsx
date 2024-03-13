import React from 'react'
import {Button } from 'react-bootstrap'
import { FaPlaneDeparture,FaHotel } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
function Enqform() {
  return (
    <div className=' '>
        <div className='position-absolute' style={{top:'75%', left:138,width:'80%', height:135, background:'#7b487c'}}>
            <div className='mt-1 ms-1'>
                <Button style={{background:'#421f57'}} className='me-1'>
                        <FaPlaneDeparture /> Flight</Button>
                <Button style={{background:'#421f57'}} className='me-1'>
                        <FaHotel /> Hotels</Button>
                <Button style={{background:'#421f57'}} className=' px-3'>
                        <IoCarSport /> Cars</Button>
            </div>
        </div>
    </div>
  )
}

export default Enqform