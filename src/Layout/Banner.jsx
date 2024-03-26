const Banner = () => {
  return (
    <section className="dark:bg-gray-100 mt-6 dark:text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left lg:space-y-20">
          <h1 className="text-5xl font-bold leading-none   sm:text-5xl">
            Books to freshen up <br />
            your bookshelf
          </h1>

          <div className="flex flex-col space-y-4 mt-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a className="btn font-bold bg-[#23BE0A] hover:bg-[#23BE0A]  text-white">
              View The List
            </a>
            
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="/bannerPicture.png"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
