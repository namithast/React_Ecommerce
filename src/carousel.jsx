import Carousel from 'react-bootstrap/Carousel';


function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
      <img className="d-block w-100" src="/images/carousel1.jpg" height="500px" width="800px"  alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src="/images/carousel2.jpg" height="500px" width="800px" alt="First slide" />
      </Carousel.Item>
      
    </Carousel>
  );
}

export default IndividualIntervalsExample;