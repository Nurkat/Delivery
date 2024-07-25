import HeroImg from "../../assets/images/hero-img.png";

const Hero = () => {
  return (
    <div className="Site-hero">
      <div className="containers">
        <div className="hero-wrapper flex gap-[99px] items-center">
          <div className="hero-text  w-[482px]">
            <h1 className=" pb-[32px] hero-title leading-[64px] text-[#8BAC3E;] font-medium text-[64px]">
              Good Food Us Good Mood{" "}
            </h1>
            <p className="font-normal text-[#757575;] text-[18px] leading-[29px] mb-[32px]">
              I would think that conserving our natural resources should be a
              conservative position: Not to waste food, and not to throw away a
              lot of the food that we buy.
            </p>
            <button
              className="bg-[#8BAC3E;] text-white px-[18px] py-[10px] mr-[16px] rounded-[30px] hover:bg-[#F2F2F2;] hover:text-black"
              type="button"
            >
              Daftar Sekarang
            </button>
            <button
              className="bg-[#F2F2F2;] rounded-[30px] px-[18px] py-[10px] hover:bg-[#8BAC3E;] hover:text-white"
              type="button"
            >
              About Us
            </button>
          </div>
          <div>
            <img
              className=" flex "
              src={HeroImg}
              alt="Hero-img"
              width={603}
              height={663}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
