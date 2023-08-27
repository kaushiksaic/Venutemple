
import React from 'react'
import LightGallery from 'lightgallery/react/Lightgallery.es5'
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-rotate.css';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgVideo from 'lightgallery/plugins/video';
import lgRotate from 'lightgallery/plugins/rotate';


import vimg1 from '../assets/vimg1.jpg'
import vimg2 from '../assets/vimg2.jpg'
import img4 from '../assets/img4.jpeg'

function Gallery() {
  return (
    <>
    <div className='container pt-3'>
      <div className='row'>
        <div className='col-sm-3'>
          <img src={vimg1} className='img-thumbnail' />
        </div>
        <div className='col-sm-3'>
          <img src={vimg2} className='img-thumbnail' />
        </div>
      </div>
    </div>
    </>
  )
}

export default Gallery