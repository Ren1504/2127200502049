import Carousel from 'react-bootstrap/Carousel';

function Scroller() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 car-img"
          src="https://images.newindianexpress.com/uploads/user/imagelibrary/2022/10/8/w900X450/Chennai-Gudurtrains.jpg?w=400&dpr=2.6"
          alt="First slide"
          fluid
        />
        <Carousel.Caption>
          <h3>Largest Railway Network</h3>
          <p>With over 68 thousand kilometres, the Indian Railways is the world’s 4th largest railway network, followed by the US, China and Russia.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 car-img"
          src="https://static.toiimg.com/photo/imgsize-242460,msid-93785179/93785179.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Comfy Travel</h3>
          <p>ndian Railways proudly owns 5 royal trains named Royal Rajasthan on Wheels, Palace on Wheels, The Golden Chariot, The Maharajas’ Express and The Deccan Odyssey.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 car-img"
          src="https://images.odishatv.in/uploadimage/library/16_9/16_9_5/IMAGE_1671162624.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Cheap and Fast</h3>
          <p>One station One Product is another initiative to utilise the railway as a marketplace to boost people’s livelihood.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Scroller;