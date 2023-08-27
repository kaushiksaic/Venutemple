import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import urdhva from '../assets/urdhva.png'
import peakpx1 from '../assets/peakpx1.jpg'
import twitter1 from '../assets/twitter1.png'
import facebook1 from '../assets/facebook1.png'
import youtube1 from '../assets/youtube1.png'
import thiruman_final from '../assets/thiruman_final.png'
import instagram from '../assets/instagram.png'
import venut from '../assets/venut.png'

function Header() {
  return (
    <div>
        <Container fluid>
          <Row className='bgtop py-2'>
            <Col sm={4}>Contact:</Col>
            <Col sm={4}>Temple Timings: 8:00 A.M To 12:00 A.M</Col>
           <Col sm={4}>
            <img src={facebook1} className='px-2' />
            <img src={twitter1} className='px-2' />
            <img src={youtube1} className='px-2' />
            <img src={instagram} className='px-2' />
           </Col>
          </Row>
            <Row className='bghead'>
              <Col sm={4}>
              <img src={venut} className='pt-1' />
              </Col>
                  <Col sm={4}>
                  <img 
                  src={thiruman_final}
                  style={{height:113,width:265}}
                  />
                  </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Header