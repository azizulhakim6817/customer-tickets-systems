const Header = ({ card, complete }) => {
  return (
    <div className=" w-11/12 md:w-11/12  my-4 md:my-4 mx-4  md:mx-auto ">
      <div className=" md:pt-10  gap-4 flex-col-1 md:flex justify-between items-center">
        <div className="p-4 mb-4 md:mb-0 md:p-16 relative bg-gradient-to-l md:w-6/12  h-[80px] md:h-[250px] rounded-[3px] from-[#9f62f2] to-[#632ee3]">
          {/* Content-1 */}
          <div className="relative">
            <h3 className="text-white  text-center">In-Progress</h3>
            <h1 className="text-white font-semibold text-[18px] md:text-[50px] text-center">
              {card.length}
            </h1>
          </div>

          {/* Vector Images */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between">
            <img
              className=" hidden xl:block  "
              src="/src/assets/images/vector1.png"
              alt=""
            />
            <img
              className="transform scale-x-[-1] hidden xl:block w-[205px]"
              src="/src/assets/images/vector1.png"
              alt=""
            />
          </div>
        </div>

        <div className="p-4 mb-4 md:mb-0 md:p-16 relative bg-gradient-to-l md:w-6/12  h-[80px] md:h-[250px] rounded-[3px] from-[#00827a] to-[#54cf68]">
          <div className="relative">
            <h3 className="text-white  text-center">Resolved</h3>
            <h1 className="text-white font-semibold text-[18px] md:text-[50px] text-center">
              {complete.length}
            </h1>
          </div>
          <div className=" absolute bottom-0 left-0 right-0 flex justify-between">
            <img
              className=" hidden xl:block"
              src="/src/assets/images/vector1.png"
              alt=""
            />
            <img
              className="hidden xl:block transform scale-x-[-1]"
              src="/src/assets/images/vector1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
