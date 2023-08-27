import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import twitter1 from '../assets/twitter1.png'
import facebook1 from '../assets/facebook1.png'
import youtube1 from '../assets/youtube1.png'
import instagram from '../assets/instagram.png'

export function Footer() {
  return (
    <Container id="footer" fluid>
        <Row className='bg-dark py-4'>

        <Col sm={4} className='text-white'>
              <h6>Address</h6>
              <p>S.C.B No. 8-8-120,Doveton Bazar,Bollarum,Secunderabad-10</p>
            </Col>
        <Col sm={4} className='text-white'>
        <h6>Stay Connected</h6>
        <img src={facebook1} className='px-2' />
        <img src={twitter1} className='px-2' />
        <img src={youtube1} className='px-2' />
        <img src={instagram} className='px-2' />
        </Col>

        </Row>

<Row className='bg-dark border-top'>
<Col className='text-white text-center' sm={12}>
            <p>Copyright &copy; Sri Venugopala Swamy Temple Trust</p>

            </Col>
</Row>
        
    </Container>
  )
}
