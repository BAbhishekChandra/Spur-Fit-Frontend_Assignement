import { FaMapMarkerAlt } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import { FaApple } from "react-icons/fa";

const Footer = () => {
return (
  <footer class = "w-100 flex flex-col justify-center items-center text-center mt-10 mb-10">
    <div class = "w-100">
      <div class = "flex flex-col justify-center items-center mb-10">
        <img class = "w-14 mb-2" src = "https://res.cloudinary.com/dl1iui8u1/image/upload/v1708245437/ahead-favicon-color_milfru.png" alt="Logo" />
        <img class = "w-20" src = "https://res.cloudinary.com/dl1iui8u1/image/upload/v1708611826/ahead-high-resolution-logo-transparent_tneylb.png" alt = "ahead-logo" />
      </div>
      <div class = "flex justify-center items-center">
        <div class = "flex justify-center items-center mr-10">
          <div class = "bg-green-300 rounded-full p-2 mr-2"><FaMapMarkerAlt /></div>
          <p class = "font-roboto font-semibold text-black">123 Street Name, City, Country</p>
        </div>
        <div class = "flex justify-center items-center">
        <div class = "bg-green-300 rounded-full p-2 mr-2"><MdEmail /></div>
          <p class = "font-roboto font-semibold text-black">example@example.com</p>
        </div>
      </div>
      <div class = "flex justify-center items-center">
      <button class = "w-100 h-auto flex justify-center items-center text-white bg-black rounded-lg p-1 mt-10 mb-10">
        <FaApple class ="ml-2 h-full w-10 h-10" />
        <div class = "flex-col justify-center items-center">
          <p class = "font-roboto font-small text-white color-yellow px-4 py-2">Download on the</p>
          <p class = "font-roboto text-2xl font-bold text-white pb-2">App Store</p>
        </div>
      </button>
      </div>
      <div class = "flex justify-center items-center">
        <p class = "font-roboto font-normal text-black">&copy; 2022 Ahead app. All right reserved</p>
      </div>
    </div>
  </footer>
);
};

export default Footer