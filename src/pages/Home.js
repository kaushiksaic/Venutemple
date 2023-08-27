import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpeg'
import img5 from '../assets/img5.jpeg'
import vbanner from '../assets/vbanner.png'
import vbanner1 from '../assets/vbanner1.png'
import vbanner2 from '../assets/vbanner2.png'
import vbanner3 from '../assets/vbanner3.png'

function Home() {
  return (
    <>
    <Container fluid className='px-0'>
      <Row className='mx-0'>
        <Col sm={12} className='w-100 px-0'>
          <div className='tickerwrap d-flex'>
            <div className='tickername bghead pt-3 mb-0' style={{height:50,width:150}}>
              <p className='text-white fw-bold'>Upcoming</p>
            </div>
            <div className='tickercontent bggrey1 w-100'>
            <marquee direction="left" scrolldelay="50" scrollamount="5" truespeed="" onmouseover="this.stop()" onmouseout="this.start()" behavior="scroll" height="25px">
              <ul className='tickernewsbar text-center'>
                <li className='mx-4 pt-3'><b>Sept 6th - Janmashtami</b></li>
                <li className='mx-4 pt-3'><b>Sept 7th - Laksharchana</b></li>
              </ul>
              </marquee>
            </div>
          </div>
        </Col>
      </Row>
    </Container>

    <Container fluid className='px-0'>
    <Carousel>
      <Carousel.Item interval={1000}>
      <img
          className="d-block  w-100"
          src={vbanner}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img
          className="d-block  w-100"
          src={vbanner1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block  w-100"
          src={vbanner2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block  w-100"
          src={vbanner3}
          alt="fourth slide"
        />
      </Carousel.Item>
    </Carousel>
    </Container>
    <Container>
      <Row className='py-4'>
        <Col sm={12}>
          <h5 className='titlesec'>About</h5>
          <p className='abt'>Sri Venugopala Swamy temple is around 120 years old and is probably the oldest temple in Bolaram. The presiding deity here is Sri Rukmini Satyabhama Godhadevi sametha Sri Venugopala Swamy. Also, the presiding deity is Chaturbhuja Venugopala Swamy (Lord Krishna with 4 hands, flute and a cow) which is very unique and exclusive to the Sri Vaishnava Pancharatra tradition. The daily, fortnightly, monthly and annual rituals are being performed in maximum accordance to the Shastras and with the active participation of devotees for several decades now.</p>
        </Col>
      </Row>
    </Container>
    <section className='bggrey1 py-4'>
    <div className='container'>
      <div className='row pb-3'>
        <h5 className='titlesec pb-3'>Sri Venugopala Swamy Temple Trust</h5>
        <div>
        <div class="card-group">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">President</h5>
      <p class="card-text">C.K.Arjun Rao</p>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Vice President</h5>
      <p class="card-text">V.Prabhakar Rao</p>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">General Secretary</h5>
      <p class="card-text">V.S Varmesh</p>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Treasurer</h5>
      <p class="card-text">A.D Sridhar</p>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Joint Secretary</h5>
      <p class="card-text">J.B Jagadeep</p>
      <p class="card-text">V.K. Raghunath</p>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Members</h5>
      <p class="card-text">V.K Mohan Rajan</p>
      <p class="card-text">R.C Rajamani</p>
      <p class="card-text">S.V. Vidya Sagar</p>
    </div>
  </div>
</div>
        </div>
      </div>
      </div>
      </section>
      <Container>
        <Row>
          <Col sm={12}>
            <h5 className='titlesec py-2'>Live Darshan</h5>
          <div className="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/WZ-qUw8tjOU?si=STKoIBZkcS66Jb-e" title="YouTube video" allowFullScreen></iframe>
          </div>

          </Col>
        </Row>
      </Container>




<section className='bggrey1'>
      <Container className='py-3'>
        <Row>
          <Col sm={12}>
            <div className='card'>
              <div className='card-body'>
                <h5 className='border-bottom pb-2 titlesec'>Upcoming Events</h5>
                <table class="table">
  <tbody>
    <tr>
      <th scope="row" >06-09-23
      <br/>
      (Wednesday)
      </th>
      <td colspan="3">MORNING Tirumanjanam(Special Abhishekam)
      <br/>
      <strong>
      JANMASHTAMI
      </strong>
      <br/>
      <strong>
      SPECIAL ALANKARAM 
      </strong>
      <br/>
      Followed by Sarvadarshanam
      <br/>
      EVENING Oonjala Seva (Cradle Kainkaryam) 
      </td>
    </tr>
    <tr>
      <th scope="row">07-09-23
      <br/>
      (Thursday)
      </th>
      <td colspan="3">MORNING Laksharchana From 10:00 a.m.
      <br/>
      EVENING Sri Vishnu Sahasranama Parayanam
      </td>
    </tr>
    <tr>
      <th scope="row">08-09-23
      <br/>
      (Friday)
      </th>
      <td colspan="3">MORNING "Sri Maha Sudarshana Homam" from 10.00 a.m.</td>
    </tr>
    <tr>
      <th scope="row">09-09-23
      <br/>
      (Saturday)
      </th>
      <td colspan="3">MORNING "Varshika Snapanostavam"
      <br/>
       from 10.00 a.m. (For All 4days Pooja Rs. 501/- Only)</td>
    </tr>
  </tbody>
</table>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
</section>
    </>
  )
}

export default Home