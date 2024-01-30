import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-screen bg-[#F9D326] bg-gradient-to-b from-[#F9D326] to-[#545454] font-openSans text-base">
      <div
        id="strip"
        className="w-1/12 md:w-3/12 h-full fixed top-0 left-12 md:left-24 bg-[#545454] hidden md:block"
      />
      <navbar className="w-full flex flex-row justify-between items-center py-2 px-8 shadow-md shadow-[#FFF5]">
        <ul className="flex flex-row items-center">
          <li className="bg-[#545454] mr-4 rounded-full z-10">
            <Image
              src="/assets/images/deatox-white.png"
              alt={"DEATOX"}
              width={40}
              height={40}
            />
          </li>
          <li className={`text-white z-10 mx-4 hidden md:block`}>HOME</li>
          <li className={`text-white z-10 mx-4 hidden md:block`}>ABOUT</li>
          <li className={`text-white z-10 mx-4 hidden md:block`}>MEAL PLANS</li>
          <li className={`text-white z-10 mx-4 hidden md:block`}>
            WORKOUT ROUTINE
          </li>
        </ul>
        <div className="w-[150px] md:w-[200px] flex flex-row justify-evenly">
          <Link href="login">
            <button className="text-white py-3">LOG IN</button>
          </Link>
          <Link href="login">
            <button className="text-[#545454] bg-white px-3 md:px-6 py-3">
              SIGN UP
            </button>
          </Link>
        </div>
      </navbar>
      <section className="w-full h-auto min-h-[800px] flex flex-row flex-wrap justify-center items-center px-6 md:px-28 z-10 py-6 relative">
        <div className="w-full md:w-1/2 relative md:-left-48 md:top-0 top-[200px] w-[350px] h-[350px] md:mb-0 mb-[400px]">
          <span className="absolute top-2/4 left-2/4 rounded-full border-8 border-[#F9D32677] w-[680px] h-[680px] -translate-x-1/2 -translate-y-1/2">
            <Image
              src={"/assets/images/1.png"}
              alt={"circle"}
              width={150}
              height={150}
              className="rounded-full absolute top-[450px] left-[420px] z-20"
            />
          </span>
          <span className="absolute top-2/4 left-2/4 rounded-full border-8 border-[#F9D32699] w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2">
            <Image
              src={"/assets/images/2.png"}
              alt={"circle"}
              width={100}
              height={100}
              className="rounded-full absolute top-[10px] left-[440px] z-20"
            />
          </span>
          <span className="absolute top-2/4 left-2/4 rounded-full border-8 border-[#F9D326BB] w-[520px] h-[520px] -translate-x-1/2 -translate-y-1/2">
            <Image
              src={"/assets/images/3.png"}
              alt={"circle"}
              width={150}
              height={150}
              className="rounded-full absolute -top-[100px] left-[180px] z-20"
            />
          </span>
          <span className="absolute top-2/4 left-2/4 rounded-full border-8 border-[#F9D326DD] w-[440px] h-[440px] -translate-x-1/2 -translate-y-1/2">
            <Image
              src={"/assets/images/4.png"}
              alt={"circle"}
              width={150}
              height={150}
              className="rounded-full absolute top-[400px] left-[100px] z-20"
            />
          </span>
          <span className="absolute top-2/4 left-2/4 rounded-full border-8 border-[#F9D326FF] w-[360px] h-[360px] -translate-x-1/2 -translate-y-1/2">
            <Image
              src={"/assets/images/5.png"}
              alt={"circle"}
              width={150}
              height={150}
              className="rounded-full absolute top-[20px] -left-[100px] z-20"
            />
          </span>
          <Image
            src={"/assets/images/deatox-white.png"}
            alt={"Deatox"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "40%" }}
            className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 z-30"
          />
        </div>
        <div className="w-full md:w-1/2 h-auto">
          <h1 className="text-[24px] md:text-[64px] text-[#545454] font-oswald font-bold">
            CHANGE YOUR HABITS
          </h1>
          <h1 className="text-[24px] md:text-[64px] text-[#545454] font-oswald font-bold mt-4 md:mt-12">
            CHANGE YOUR LIFE{" "}
            <span className="text-white text-[14px] md:text-[36px]">
              WITH AI
            </span>
          </h1>
          <p className="text-[14px] md:text-[24px] font-openSans font-normal text-[#545454] mt-4">
            Our AI-powered algorithm takes into consideration your goals,
            dietary restrictions, food preferences, and fitness level to create
            a comprehensive plan that optimizes your health and fitness journey.
          </p>
          <ul className="flex flex-row justify-between mt-4 md:text-base text-xs">
            <li>✔ EASY ONBOARDING</li>
            <li>✔ EASY ONBOARDING</li>
            <li>✔ EASY ONBOARDING</li>
          </ul>
          <Link href="plan">
            <button className="text-white bg-[#545454] px-4 md:px-6 py-3 mt-6 text-base md:text-[24px]">
              TRY NOW
            </button>
          </Link>
        </div>
      </section>
      <section className="w-full px-6 md:px-28 relative z-10">
        <h1 className="text-2xl md:text-5xl font-oswald font-extralight text-[#F9D326] my-12">
          FEATURES
        </h1>
        <div className="w-full min-h-[669px] bg-white py-6 md:px-12 px-6 text-[#545454] flex flex-row flex-wrap">
          <div className="w-full md:w-1/2 border-l border-l-8 p-3 border-[#F9D326] border-b-0 border-t-0 border-r-0 mt-6">
            <h3 className="w-full text-xl md:text-4xl font-oswald font-bold">
              PERSONALISED RECOMMENDATIONS
            </h3>
            <p className="w-full text-sm md:text-base font-light mt-3">
              DEATOX uses AI to analyze user data such as age, gender, weight,
              height, dietary preferences, and fitness goals to generate
              personalized meal and fitness plans.
            </p>
          </div>
          <div className="w-full md:w-1/2 border-l border-l-8 border-b-0 border-t-0 border-r-0 p-3 border-[#F9D326] mt-6">
            <h3 className="w-full text-xl md:text-4xl font-oswald font-bold">
              PROGRESS TRACKING
            </h3>
            <p className="w-full font-light text-sm md:text-base mt-3">
              DEATOX allows you to track their progress towards their fitness
              goals by tracking metrics such as weight, body fat percentage, and
              workout intensity.
            </p>
          </div>
          <div className="w-full md:w-1/2 border-l border-l-8 border-b-0 border-t-0 border-r-0 p-3 border-[#F9D326] mt-6">
            <h3 className="w-full text-xl md:text-4xl font-oswald font-bold">
              MEAL PLANNING
            </h3>
            <p className="w-full font-light text-sm md:text-base mt-3">
              DEATOX generates weekly meal plans based on your dietary
              preferences, calorie requirements, and nutrient needs.
            </p>
          </div>
          <div className="w-full md:w-1/2 border-l border-l-8 border-b-0 border-t-0 border-r-0 p-3 border-[#F9D326] mt-6">
            <h3 className="w-full text-xl md:text-4xl font-oswald font-bold">
              ML BASED RECOMMENDATIONS
            </h3>
            <p className="w-full font-light text-sm md:text-base mt-3">
              DEATOX uses machine learning algorithms to learn from your data
              and improve the accuracy and relevance of its meal and fitness
              recommendations over time.
            </p>
          </div>
          <div className="w-full md:w-1/2 border-l border-l-8 border-b-0 border-t-0 border-r-0 p-3 border-[#F9D326] mt-6">
            <h3 className="w-full text-xl md:text-4xl font-oswald font-bold">
              FITNESS PLANNING
            </h3>
            <p className="w-full font-light text-sm md:text-base mt-3">
              DEATOX generates weekly fitness plans based on your fitness goals,
              workout preferences, and fitness level.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-6 md:px-28 relative z-10 mt-[100px]">
        <div className="flex flex-row gap-[80px] md:gap-[280px]">
          <h1 className="text-xl md:text-5xl font-oswald font-extralight flex flex-col text-white font-black">
            DEATOX <span className="font-light text-[#f3de53]">PACKAGE</span>
          </h1>
          <div className="flex flex-col justify-center items-start gap-2">
            <h4 className="text-[#f3de53] font-bold font-openSans text-sm md:text-base">
              Get your fitness plan for free!
            </h4>
            <p className="md:text-base text-xs">
              Join the Deatox community today and start your journey towards a
              healthier and happier you.
            </p>
            <button className="bg-[#f3de53] text-[#545454] md:py-2 font-semibold px-2 py-1 md:px-4">
              TRY NOW
            </button>
          </div>
        </div>
      </section>
      <footer className="w-full bg-[#545454] flex flex-row justify-between relative z-10 px-12">
        <div className="w-3/5 min-h-[400px] bg-[#545454] flex flex-row justify-between items-start px-6 py-12 gap-6 flex-wrap">
          <ul>
            <li className="mt-2 text-[#f3de53] text-bold text-base md:text-2xl">
              COMPANY
            </li>
            <li className="mt-2 text-base md:text-2xl text-normal text-white">
              About us
            </li>
            <li className="mt-2 text-base md:text-2xl text-normal text-white">
              Team
            </li>
            <li className="mt-2 text-base md:text-2xl text-normal text-white">
              Blogs
            </li>
            <li className="mt-2 text-base md:text-2xl text-normal text-white">
              Meal Plans
            </li>
            <li className="mt-2 text-base md:text-2xl text-normal text-white">
              Fitness Plans
            </li>
          </ul>
          <ul>
            <li className="mt-2 text-[#f3de53] text-bold text-base md:text-2xl">
              DEATOX +
            </li>
            <li className="mt-2 text-base md:text-2xl text-normal text-white">
              Partner with us
            </li>
            <li className="mt-2 text-base md:text-2xl text-normal text-white">
              Enterprise package
            </li>
            <li className="mt-2 text-base md:text-2xl text-normal text-white">
              Build gym
            </li>
            <li className="mt-2 text-base md:text-2xl text-normal text-white">
              For enterprise
            </li>
            <li className="mt-2 text-base md:text-2xl text-normal text-white">
              t&c for business
            </li>
          </ul>
          <ul>
            <li className="text-[#f3de53] text-bold text-base md:text-2xl">
              CONTACT US
            </li>
            <li className="text-base md:text-2xl text-normal text-white">
              Help and support
            </li>
            <li className="text-base md:text-2xl text-normal text-white">
              Enquire
            </li>
          </ul>
        </div>
        <div className="w-1/5 max-w-[400px] h-full self-center">
          <Image
            src={"/assets/images/deatox-white.png"}
            width={0}
            height={0}
            alt={"Deatox"}
            sizes="100vw"
            style={{ width: "100%" }}
          />
        </div>
      </footer>
    </div>
  );
};

export default page;
