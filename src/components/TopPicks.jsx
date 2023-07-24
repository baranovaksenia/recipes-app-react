import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { topPicks } from "../data/data";

const TopPicks = () => {
  return (
    <div>
      <h3 className="text-orange-500 font-bold text-2xl text-center">
        Top Picks
      </h3>
      <div className="hidden lg:flex max-w-[1520px] mx-auto py-2 px-2">
        <Splide
          options={{ perPage: 4, gap: "0.5rem", grag: "free", arrows: false }}
        >
          {topPicks.map(item => {
            return (
              <SplideSlide key={item.id}>
                <div className="rounded-3xl  relative">
                  <div className="absolute z-10 w-full h-full bg-black/50 rounded-3xl text-white">
                    <p className="px-2 font-bold text-2xl pt-4">{item.title}</p>
                    <p className="px-2">{item.price}</p>
                    <button className="border-dotted border-white text-white mx-2 absolute bottom-4">
                      Add to Cart
                    </button>
                  </div>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-[200px] w-full  object-cover rounded-3xl cursor-pointer hover:scale-105 ease-in-out duration-300 transform transition"
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default TopPicks;
