import Carousel from 'react-bootstrap/Carousel';
import emyu from './../assets/emyu.jpg'
import dubai from './../assets/dubai.jpg'
import lulus from './../assets/lulus.jpg'

const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={emyu}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Manchester United</h3>
          <p>"Ya Allah semoga suatu hari nanti aku bisa ke Old Trafford melihat Emyu bertanding bersama mama tercinta"</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {dubai}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Dubai, Uni Emirat Arab Views</h3>
          <p>"Ya Allah semoga Engkau berikan hamba kesempatan untuk mengeksplorasi keindahan ciptaanmu di Dubai dan belahan bumi lainnya"</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={lulus}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Bachelor Degree and Master Degree's Dream</h3>
          <p>
            "Ya Allah semoga hamba diberikan kemudahan dan kelancaran dalam menyelesaikan studi di UGM dan melanjutkan
            impian untuk studi lanjut di luar negeri serta memulai karir di dunia kerja"
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
