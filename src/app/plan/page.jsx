import Image from "next/image";

const page = () => {
  return (
    <div className="w-screen md:h-screen flex flex-col md:flex-row justify-center items-center relative">
      <div className="w-full flex md:w-1/2 bg-[#F3DE53] h-full justify-center items-center text-[#2c2c2c] flex-col gap-6 text-left px-6 py-12">
        <h1 className="font-bold md:text-4xl text-2xl md:max-w-[450px] max-w-[280px] w-full">
          Subscribe to our Enterprise Plan
        </h1>
        <p className="text-base md:max-w-[450px] max-w-[280px]">
          {`Our Enterprise Plan is designed for businesses and organizations that
          want to provide their employees or members with a personalized plans
          to achieve their health and wellness goals. With our Enterprise Plan,
          you'll get access to a suite of advanced features and tools.`}
        </p>
        <p className="text-base md:max-w-[450px] max-w-[280px]">
          {`To request more information about our Enterprise Plan , please fill
          out the form below. One of our representatives will be in touch with
          you shortly.`}
        </p>
        <ul className="w-full md:max-w-[450px] max-w-[280px]">
          <li className="w-full py-3 text-lg md:text-2xl font-bold">
            {`✔   Priority access to our team of experts for technical assistance and troubleshooting`}
          </li>
          <li className="w-full py-3 text-lg md:text-2xl font-bold">
            {`✔   Access advanced analytics and reporting to track your organization's fitness and wellness goals`}
          </li>
        </ul>
        <div className="w-full max-w-[150px]">
          <Image
            src={"/assets/images/deatox.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%" }}
            alt={"Deatox"}
          />
        </div>
      </div>
      <form className="w-full overflow-y-auto h-full md:w-1/2 flex flex-col justify-center items-center gap-5 px-3 md:px-10 text-base text-[#989898] pt-24 pb-12 md:pt-[15rem]">
        <h4 className="text-[36px] max-w-[280px] md:max-w-[450px] font-bold text-[#545454] w-full text-left leading-8">
          Enterprise Plan Request
        </h4>
        <div className="flex flex-col max-w-[280px] md:max-w-[450px] w-full gap-2 mt-6">
          <label htmlFor="name" className="">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="umartinez@gmail.com"
            className="border-2 border-gray-300 rounded-md p-2 w-full h-[50px] md:h-[75px] p-4 focus:outline-none"
          />
        </div>
        <div className="flex flex-col max-w-[280px] md:max-w-[450px] w-full gap-2">
          <label htmlFor="company" className="">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            className="border-2 border-gray-300 rounded-md p-2 w-full h-[50px] md:h-[75px] p-4 focus:outline-none"
          />
        </div>
        <div className="flex flex-col max-w-[280px] md:max-w-[450px] w-full gap-2">
          <label htmlFor="email" className="">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="border-2 border-gray-300 rounded-md p-2 w-full h-[50px] md:h-[75px] p-4 focus:outline-none"
          />
        </div>
        <div className="flex flex-col max-w-[280px] md:max-w-[450px] w-full gap-2">
          <label htmlFor="phone" className="">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            className="border-2 border-gray-300 rounded-md p-2 w-full h-[50px] md:h-[75px] p-4 focus:outline-none"
          />
        </div>
        <div className="flex flex-col max-w-[280px] md:max-w-[450px] w-full gap-2">
          <label htmlFor="remarks" className="">
            Remarks
          </label>
          <textarea
            id="remarks"
            className="border-2 border-gray-300 rounded-md p-2 w-full h-[100px] md:h-[132px] p-4 focus:outline-none"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Submit"
          className="w-full bg-[#F3DE53] max-w-[280px] md:max-w-[450px] w-full py-5"
        />
      </form>
      <span className="font-bold text-[14px] absolute w-3/5 bottom-10 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        venia
      </span>
    </div>
  );
};

export default page;
