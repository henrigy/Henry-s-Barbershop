import CarouselSlider from "./Carousel";
import { CarouselData } from "./CarouselData";
import "./Carousel.css";

function Carousel() {
  return <CarouselSlider slides={CarouselData} />;
}

export default Carousel;
