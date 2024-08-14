"use client";

import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  const theme = "dark";

  return (
    <div className="flex bg-[#f5f5f5] relative">
      <div className="w-[50%] my-6 mx-8">
        <div className="w-[704px] h-[976px] bg-[#605bff] rounded-2xl flex items-center justify-center relative">
          <div className="w-[600px] h-[872px] bg-[#4c57d7] rounded-xl">
            <div>
              <Image
                src={"/assets/base.png"}
                width={151.31}
                height={61}
                className="absolute top-[90px] left-[90px]"
              />
            </div>
            <h3 className="text-4xl ml-[38px] mt-[155px] text-white font-bold">
              Generate detailed <br />
              reports with just one <br />
              click
            </h3>
            <Image
              src={theme === "dark" ? "/assets/light.png" : "/assets/dark.png"}
              alt="theme"
              height={40}
              width={76}
              className="mt-[519px] ml-[38px] duration-300"
            />
            <Image
              src={"/assets/girl.png"}
              height={438}
              width={381}
              className="absolute right-[50px] bottom-[52px]"
            />
          </div>
        </div>
      </div>
      <div className="w-[50%] flex items-center justify-center">
        <div className="h-[730.77px] w-[422px] flex flex-col relative">
          <div className="h-[544.37px] flex flex-col gap-4">
            <h1 className="font-bold text-4xl leading-[43.88px]">Sign In</h1>
            <p className="font-bold leading-[19.2px]">
              Sign in to your account
            </p>
            <div className="flex justify-between">
              <button
                type="button"
                className="px-8 h-[32.93px] w-[197.6px] rounded-md border-gray-500 border-1 flex items-center text-xs leading-[14.63px] justify-between bg-white"
                onClick={() => redirect("/upload")}
              >
                <Image
                  src={"/assets/google.png"}
                  alt="google"
                  height={15.37}
                  width={15.37}
                />
                Sign in with Google
              </button>
              <button className="px-8 h-[32.93px] w-[197.6px] rounded-md border-gray-500 border-1 flex items-center text-xs leading-[14.63px] justify-between bg-white">
                <Image
                  src={"/assets/apple.png"}
                  alt="apple"
                  height={15.37}
                  width={15.37}
                />
                Sign in with Apple
              </button>
            </div>
            <form className="flex flex-col h-[347.99px] p-[32.93px] rounded-xl content-center gap-5 bg-white">
              <label htmlFor="email" className="text-norm">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="bg-[#eaeaea] rounded-lg p-2"
              />
              <label htmlFor="password" className="text-norm">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="bg-[#eaeaea] rounded-lg p-2"
              />
              <p className="text-norm text-[#605bff] cursor-pointer">
                Forgot Password?
              </p>
              <button className="bg-[#605bff] rounded-lg h-[43.91px] text-white text-norm hover:bg-[#4c57d7] duration-300">
                Sign In
              </button>
            </form>
            <p className="text-norm text-[#858585] text-center">
              Don’t have an account?{" "}
              <span className="text-[#605bff] cursor-pointer">
                Register here
              </span>
            </p>
          </div>
          <div className="flex justify-center gap-4 absolute bottom-0 left-[50%] translate-x-[-50%]">
            <Image
              src={"/assets/github.png"}
              alt="githublogo"
              height={35.2}
              width={35.2}
              className="cursor-pointer"
            />
            <Image
              src={"/assets/twitter.png"}
              alt="twitterlogo"
              height={35.2}
              width={35.2}
              className="cursor-pointer"
            />
            <Image
              src={"/assets/linkedin.png"}
              alt="linkedinlogo"
              height={35.2}
              width={35.2}
              className="cursor-pointer"
            />
            <Image
              src={"/assets/discord.png"}
              alt="discordlogo"
              height={35.2}
              width={35.2}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
