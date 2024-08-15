import logo from "../assets/doctor.png";

const Banner = () => {
  return (
    <div className="px-4 py-12 bg-bg-shade md:px-12">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        <div className="md:w-1/2">
          
          <h2 className="mt-2 mb-4 text-2xl font-bold text-heading md:text-4xl md:mt-4 md:mb-6">
          Best General Physician In Noida <br/> <br/>
          <span className="text-primary"> - Dr Harsh Bardhan (MBBS - Md) </span>
          </h2>
          <p className="mb-4 text-sm text-body md:text-base italic">
          B-199, Sector 52 , Noida, Noida, Uttar Pradesh 201301
          </p>
          <button className="px-4 py-2 text-sm text-white rounded bg-primary md:text-base hover:bg-indigo-500 hover:text-white">
            Get In Touch
          </button>
        </div>
        <div className="p-2 mt-6 md:w-1/2 md:mt-0">
          <img src={logo} alt="Logo" className="w-full h-auto bg-[#c8e1e8] rounded-3xl"  />
        </div>
      </div>
    </div>
  );
};

export default Banner;
