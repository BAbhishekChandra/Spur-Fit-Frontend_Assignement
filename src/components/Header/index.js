
const Header = () => {
    return (
        <header class = "container mx-auto flex justify-between items-center mb-10">
        <div class = "w-48 h-auto ml-2">
          <img class = "w-20 h-auto" src="https://res.cloudinary.com/dl1iui8u1/image/upload/v1708245437/ahead-favicon-color_milfru.png" alt="Logo" />
        </div>
        <div class = "font-roboto font-semibold">
          <button class = "text-black bg-white px-4 py-2 rounded-md hover:bg-black hover:text-white">Emotions</button>
          <button class = "text-black bg-white px-4 py-2 rounded-md hover:bg-black hover:text-white">Manifesto</button>
          <button class = "text-black bg-white px-4 py-2 rounded-md hover:bg-black hover:text-white">Self-awareness test</button>
          <button class = "text-black bg-white px-4 py-2 rounded-md hover:bg-black hover:text-white">Work with us</button>
          
        </div>
        <div class = "font-roboto font-semibold">
          <button class = "text-white bg-black px-4 py-2 rounded-xl mr-3">Download App</button>
        </div>
        </header>
    );
  };
  
  export default Header;