function Banner() {
  return (
    <header className="flex justify-center px-4 py-6">
      <img
        src="/logo.png"
        alt="logo"
        className="
          w-full             
          max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl
          h-auto             
          rounded-lg shadow-xl
          dark:shadow-gray-800
        "
      />
    </header>
  );
}

export default Banner;
