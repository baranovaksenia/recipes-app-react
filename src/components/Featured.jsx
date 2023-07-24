import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
const Featured = () => {
  const sliders = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(2);
  const prevSlider = () => {
    setCurrentIndex(currentIndex === 0 ? sliders.length - 1 : currentIndex - 1);
  };
  const nextSlider = () => {
    setCurrentIndex(currentIndex === sliders.length - 1 ? 0 : currentIndex + 1);
  };

  const moveToNextSlide = slideIndex => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1520px] mx-auto h-[500px] w-full py-4 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>
      <div
        onClick={prevSlider}
        className="hidden absolute group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] left-6 text-2xl rounded-full p-2
      bg-orange-700 text-white cursor-pointer
      "
      >
        <BsChevronCompactLeft />
      </div>
      <div
        className="hidden absolute group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] right-6 text-2xl rounded-full p-2
      bg-orange-700 text-white cursor-pointer
      "
      >
        <BsChevronCompactRight onClick={nextSlider} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {sliders.map((sliderItem, slideIndex) => (
          <div
            onClick={() => moveToNextSlide(slideIndex)}
            key={slideIndex}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
