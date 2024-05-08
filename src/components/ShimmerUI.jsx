function ShimmerUI() {
  return (
    <div className="md:min-w-[40rem]  lg:w-[60rem]  mt-5 md:flex items-center  py-6 md:justify-evenly rounded-xl shadow-lg overflow-hidden ">
      <div className="h-80 md:h-80 md:w-72 bg-gray-400  rounded-xl overflow-hidden animate-pulse"></div>
      <div className="mt-5 md:mt-0 md:h-80 md:w-[70%] px-2 md:px-10 ">
        <h1 className="h-8 w-42 text-lg font-semibold bg-gray-400 animate-pulse"></h1>
        <p className="h-8 w-64 flex items-center md:mt-2 bg-gray-300 animate-pulse"></p>
        <div className="mt-2 md:mt-6 flex justify-between">
          <p className="h-6 w-36 flex bg-gray-300 animate-pulse"></p>
          <p className="h-8 w-24 flex bg-gray-300 animate-pulse"></p>
        </div>
        <div className="mt-2 md:mt-4 md:flex md:items-center md:justify-between ">
          <p className="h-8 w-56 flex bg-gray-300 animate-pulse"></p>
          <p className="h-8 w-56 flex bg-gray-300 animate-pulse"></p>
        </div>
        <div className=" mt-4 md:mt-16  flex justify-end items-end ">
          <span className="h-12 w-40  bg-gray-300 animate-pulse"></span>
        </div>
      </div>
    </div>
  );
}

export default ShimmerUI;
