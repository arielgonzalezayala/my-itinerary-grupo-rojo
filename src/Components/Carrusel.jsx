import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <Slider {...settings} className="h-2/4">
      <div>
      <img src={"../src/assets/arc-de-triomphe.jpg"} alt="dubai"  className="w-screen h-[30rem] object-cover object-center "/>
      </div>
      <div>
      <img src={"../src/assets/bridge.jpg"} alt="dubai"  className="w-screen h-[30rem] object-cover object-bottom "/>
      </div>
      <div>
      <img src={"../src/assets/egypt.jpg"} alt="dubai"  className="w-screen h-[30rem] object-cover object-center "/>
      </div>
      <div>
      <img src={"../src/assets/golden-gate.jpg"} alt="dubai"  className="w-screen h-[30rem] object-cover object-top "/>
      </div>
      <div>
      <img src={"../src/assets/hiroshima.jpg"} alt="dubai"  className="w-screen h-[30rem] object-cover object-center "/>
      </div>
      <div>
      <img src={"../src/assets/moscow.jpg"} alt="dubai"  className="w-screen h-[30rem] object-cover object-top "/>
      </div>
      <div>
      <img src={"../src/assets/petra.jpg"} alt="dubai"  className="w-screen h-[30rem] object-cover object-top "/>
      </div>
      <div>
      <img src={"../src/assets/pizza.jpg"} alt="dubai"  className="w-screen h-[30rem] object-cover object-center "/>
      </div>
      <div>
      <img src={"../src/assets/rome-5.jpg"} alt="dubai"  className="w-screen h-[30rem] object-cover object-center "/>
      </div>
      <div>
      <img src={"../src/assets/rome.jpg"} alt="dubai"  className="w-screen h-[30rem] object-cover object-center "/>
      </div>
      <div>
      <img src={"../src/assets/stonehenge.jpg"} alt="dubai"  className="w-screen h-[30rem] object-cover object-top "/>
      </div>
      <div>
      <img src={"../src/assets/taj-mahal.jpg"} alt="dubai"  className="w-screen h-[30rem] object-cover object-top "/>
      </div>
      <div>
      <img src={"../src/assets/torre-eiffel.jpg"} alt="dubai"  className="w-screen h-[30rem] object-cover object-center "/>
      </div>
    </Slider>
  );
};

export default Carrusel;