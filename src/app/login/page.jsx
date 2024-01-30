"use client";
import Image from "next/image";
import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Success!");
      router.push("home");
    },
  });
  return (
    <div className="w-screen h-screen flex flex-col md:flex-row justify-center items-center relative">
      <div className="w-full hidden md:flex md:w-1/2 bg-[#F3DE53] h-full justify-center items-center">
        <Image
          src="/assets/images/helix.png"
          width={0}
          height={0}
          alt="helix"
          sizes="100vw"
          style={{ width: "100%" }}
          className="max-w-[280px] md:max-w-full"
        />
      </div>
      <form className="w-full overflow-y-auto h-full md:w-1/2 flex flex-col justify-center items-center gap-5 px-3 md:px-10 text-base text-[#989898] pt-24 pb-12 md:pt-[15rem]">
        <h4 className="text-[36px] max-w-[280px] md:max-w-[450px] font-bold text-[#545454] w-full text-left">
          Welcome!
        </h4>
        <div className="flex flex-col max-w-[280px] md:max-w-[450px] w-full gap-2 mt-6">
          <label htmlFor="email" className="">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="umartinez@gmail.com"
            className="border-2 border-gray-300 rounded-md p-2 w-full h-[50px] md:h-[75px] p-4 focus:outline-none"
          />
        </div>
        <div className="flex flex-col max-w-[280px] md:max-w-[450px] w-full gap-2">
          <label htmlFor="password" className="">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border-2 border-gray-300 rounded-md p-2 w-full h-[50px] md:h-[75px] p-4 focus:outline-none"
          />
          <label className="text-xs md:text-base py-2">
            Password must be at least 8 characters long.
          </label>
        </div>
        <div className="flex flex-col max-w-[280px] md:max-w-[450px] w-full gap-2">
          <label htmlFor="c_password" className="">
            Confirm Password
          </label>
          <input
            type="password"
            id="c_password"
            className="border-2 border-gray-300 rounded-md p-2 w-full h-[50px] md:h-[75px] p-4 focus:outline-none"
          />
        </div>
        {/* Can be Replaced by URL Later */}
        <p className="w-full text-center mt-8 max-w-[280px] md:max-w-[450px] ">
          By signing up you agree with{" "}
          <span className="text-[#1877F2]">terms and conditions</span>
        </p>
        <input
          type="submit"
          value="Sign Up"
          className="w-full bg-[#F3DE53] max-w-[280px] md:max-w-[450px] w-full py-5"
        />
        <div className="w-full max-w-[280px] md:max-w-[450px] flex flex-row items-center justify-evenly">
          <hr className="w-1/4" />
          <span className="w-2/4 text-center">Or Sign in with</span>
          <hr className="w-1/4" />
        </div>
        <div className="w-full max-w-[280px] md:max-w-[450px] flex flex-row justify-evenly items-center">
          <span className="cursor-pointer w-12" onClick={() => login()}>
            <Image
              src="/assets/images/google.png"
              alt="login"
              width={40}
              height={40}
            />
          </span>
          <span className="cursor-pointer w-12">
            <Image
              src="/assets/images/facebook.png"
              alt="login"
              width={40}
              height={40}
            />
          </span>
          <span className="cursor-pointer w-12">
            <Image
              src="/assets/images/apple.png"
              alt="login"
              width={40}
              height={40}
            />
          </span>
        </div>
        <div className="">
          Already have an account?{" "}
          <span className="text-[#1877F2]">Log in</span>
        </div>
      </form>
    </div>
  );
};

export default Page;
