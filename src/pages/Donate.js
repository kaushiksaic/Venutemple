import React from 'react'
import Vqr from '../assets/Vqr.jpeg'

function Donate() {
  return (
    <>
    <section className='bggrey1'>
    <div className='container py-3'>
      <div className='row'>
        <div className='col-sm-12'>

       <h5>GIVE TO OUR WORTHY CAUSES AND EARN THE GRACE OF ACHARYAN AND PERUMAL</h5>

       <h6>SCAN THE QR CODE BELOW FOR DONATING TO SRI VENUGOPAL SWAMY TEMPLE</h6>
       <img src={Vqr} alt="qr code" className="py-3" style={{height:550,width:550}}/>
       </div>
       </div>
       <div className='row'>
        <div className='col-sm-12'>
          <div className='card'>
            <h5 className='pt-1 bghead py-3'>Donation Form</h5>
            <div className='row form-group p-3'>
            <div className='col-sm-4'>
            <label className=''>Name:</label>
            </div>
            <div className='col-sm-8'>
            <input type='text' placeholder='Enter your Name' className='form-control' />
            </div>
            <div className='col-sm-4 pt-3'>
            <label className=''>Amount:</label>
            </div>
            <div className='col-sm-8 pt-3'>
            <input type='number' placeholder='Enter the Amount' className='form-control' />
            </div>
            <div className='col-sm-4 pt-3'>
            <label className=''>Donation Cause:</label>
            </div>
            <div className='col-sm-8 pt-3'>
            <input type='text' placeholder='Enter your Donation cause' className='form-control' />
            </div>
            <div className='col-sm-4 pt-3'>
            <label className=''>PAN Number:</label>
            </div>
            <div className='col-sm-8 pt-3'>
            <input type='number' placeholder='Enter your PAN Number' className='form-control' />
            </div>
            <div className='col-sm-4 pt-3'>
            <label className=''>Mobile Number:</label>
            </div>
            <div className='col-sm-8 pt-3'>
            <input type='number' placeholder="Enter your Mobile Number" className='form-control' />
            </div>
            <div className='col-sm-4 pt-3'>
            <label className=''>Address:</label>
            </div>
            <div className='col-sm-8 pt-3'>
            <textarea rows={4} placeholder='Enter your Address' className='form-control' />
            </div>
            <div className='col-sm-4 pt-3'>
            </div>
            <div className='col-sm-4 text-start pt-3'>
            <button className='btn btn-primary'>Submit</button>
            </div>

            </div>
          </div>
        </div>
       </div>
       </div>
       </section>
    </>
  )
}

export default Donate