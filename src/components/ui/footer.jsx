import texts from "../../utils/texts.json";
import logo from "../../../public/techDropLogo.png";
import SocialButtons from "./SocialButtons";

function Footer() {
  return (
    <footer className="">
      <div className="mx-auto px-4 sm:px-1">
        {/* Top area: Blocks */}
        <div className="grid  lg:grid-cols-3 gap-8 py-8 md:py-12 border-t border-gray-200 ">
          {/* 1st block */}
          <div className="sm:col-span-full md:col-span-full lg:col-span-1 flex flex-col  sm:items-center md:items-center lg:items-start px-7 lg:pl-20 ">
            <span className=" items-center">
              <img src={logo} alt="logo" width={250} />
            </span>
            <ul className="text-sm ">
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  {texts["section-seven"]["section-1"].delivery}
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  {texts["section-seven"]["section-1"].email}
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  {texts["section-seven"]["section-1"].phone}
                </a>
              </li>
            </ul>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-full md:col-span-full lg:col-span-1 text-center flex items-center justify-center">
            {/*
            <ul className="text-sm">
              <li className="mb-3">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  {texts["section-seven"]["section-2"].item1}
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  {texts["section-seven"]["section-2"].item2}
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  {texts["section-seven"]["section-2"].item3}
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  {texts["section-seven"]["section-2"].item4}
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  {texts["section-seven"]["section-2"].item5}
                </a>
              </li>
            </ul>
           */}
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-full md:col-span-full lg:col-span-1 lg:flex-col flex sm:flex justify-center mx-w-auto gap-5 place-items-center">
            {/* <div className="sm:col-span-2 md:col-span-3 lg:col-span-1 mx-auto sm:flex sm:justify-center gap-5"> */}
            {/* Social as */}

            <SocialButtons />
          </div>
        </div>

        {/* Bottom area */}
        {/* <div
          className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200"
          style={{ display: "flex", justifyContent: "center" }}
        > */}
        {/* Copyrights note */}
        {/* <div className="text-sm text-gray-600 mr-4">
            &copy; Copyright 2024 . All rights reserved.
          </div> */}
        {/* </div> */}
      </div>
    </footer>
  );
}
export default Footer;
