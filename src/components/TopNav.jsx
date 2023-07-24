import React from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlineFavorite, MdHelp } from "react-icons/md";
import { FaGoogleWallet } from "react-icons/fa";
import { BsFillCartFill, BsPerson } from "react-icons/bs";
const TopNav = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);

  return (
    <div className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="cursor-pointer"
        >
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Yum
          <span>Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-orange-700 text-white rounded-full p-2 text-bold">
            Free
          </p>
          <p className="p-2 text-bold">Delivery</p>
        </div>
      </div>

      <div
        className="bg-gray-200 rounded-full flex
      items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]
      "
      >
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search Meals"
        />
      </div>
      <button className="bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} />
        <span className="ml-2">Cart</span>
      </button>

      {showSidebar && (
        <div
          className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
          onClick={() => setShowSidebar(!showSidebar)}
        ></div>
      )}

      <div
        className={
          showSidebar
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 ease-in-out"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 ease-in-out"
        }
      >
        <AiOutlineClose
          size={25}
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setShowSidebar(!showSidebar)}
        />
        <h2 className="text-2xl p-4 font-semibold ">
          Yum
          <span className="text-orange-700 font-bold">Eats</span>
        </h2>
        <ul className="flex flex-col p-4 text-gray-900">
          <li className="flex text-xl py-4">
            <BsPerson
              size={25}
              className="mr-4 text-white bg-black rounded-full"
            />
            My Account
          </li>
          <li className="flex text-xl py-4">
            <TbTruckReturn
              size={25}
              className="mr-4 text-white bg-black rounded-full "
            />
            Delivery
          </li>
          <li className="flex text-xl py-4">
            <MdOutlineFavorite
              size={25}
              className="mr-4 text-white bg-black rounded-full "
            />
            My Favorite
          </li>
          <li className="flex text-xl py-4">
            <FaGoogleWallet
              size={25}
              className="mr-4 text-white bg-black rounded-full"
            />
            My Wallet
          </li>
          <li className="flex text-xl py-4">
            <MdHelp
              size={25}
              className="mr-4 text-white bg-black rounded-full"
            />
            Help
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
