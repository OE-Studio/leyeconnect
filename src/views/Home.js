// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import avatar from "../assets/images/client.svg";
import under from "../assets/images/underline.svg";
import climate from "../assets/images/weather.svg";
// eslint-disable-next-line
import audio from "../assets/images/audio.svg";

import {
  RiMapPin2Fill,
  RiTwitterFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";
import { HiMail } from "react-icons/hi";
import MobileHeader from "../components/MobileHeader";
const Home = () => {
  // eslint-disable-next-line
  const [bgSound, setBgSound] = useState("none");

  return (
    <section className="font-inter w-full xl:h-[full]">
      <MobileHeader />
      <div className=" xl:pl-[50px] 2xl:pl-[100px] lg:pt-[63px] xl:pt-[20px] 2xl:pt-[63px]  2xl:pr-[80px] flex justify-between ">
        <div className=" xl:w-[80%] 2xl:w-[90%] grid place-items-center h-full pb-36 md:pb-0">
          <div className="flex flex-col space-y-6 items-start lg:w-[90%] xl:w-[90%] 2xl:w-[70%]">
            <div className="flex items-center justify-between w-full">
              <img src={avatar} alt="" className="" />
              <div className="hidden md:flex lg:hidden items-center rounded-full gap-2 dark:bg-dark-500 bg-white p-2 px-4">
                <img src={climate} alt="" />
                <p className="dark:text-white">Ibadan</p>
              </div>
            </div>
            <p className="text-[28px] md:text-5xl font-medium dark:text-gray-300 text-dark-300 leading-[120%]">
              Multidisciplinary <br />
              Designer and Economist
            </p>
            <p className="text-[15px] md:text-base leading-normal dark:text-gray-500 text-dark-150">
              Oyeleye Ogunsanya is the Head of Design at Rise, A graduate of the
              department of economics university of Ilorin and a postgraduate
              student; department of economics, university of Ibadan. He is also
              the co-founder of OE-Studio, a community-driven design studio
              focused on democratising design knowledge and enhancing
              productivity.
            </p>

            <p className="text-[15px] md:text-base leading-normal dark:text-gray-500 text-dark-150">
              An advocate for visual and functional excellence, you will always
              find him at the intersection of design and technology, with a
              unique combination of skills and capabilities acquired during
              studies and work experiences.
            </p>
            <div className="w-full relative ">
              <div className="h-[231px] w-full dark:bg-[#1E1E1E] bg-[#e0e3e4] relative z-10 rounded-[10px] overflow-hidden grayscale">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253229.1326584723!2d3.7649737550948412!3d7.386895614726906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d77eeff086f%3A0x3b33e0f76e8e04a9!2sIbadan!5e0!3m2!1sen!2sng!4v1666210677798!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="google map"
                ></iframe>
              </div>
              <img
                src={under}
                alt=""
                className="absolute bottom-[22px] left-1/2 -translate-x-1/2  z-0"
              />
              <div className="flex items-center mt-4 gap-[8px]">
                <RiMapPin2Fill className="text-purple-500" />
                <p className="dark:text-dark-150 text-dark-200">
                  Ibadan, Nigeria
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[20%] flex lg:hidden items-center justify-between w-full ">
            <p className=" dark:text-dark-200">Let's connect</p>
            <div className="h-[1px] w-[25%] dark:bg-[#323232] bg-dark-100"></div>
            <div className="flex items-center text-dark-150 gap-[16px]">
              <HiMail className="text-xl" />
              <RiTwitterFill className="text-xl" />
              <RiInstagramFill className="text-xl" />
              <RiLinkedinFill className="text-xl" />
            </div>
          </div>
        </div>
        <div className="flex-col items-center hidden lg:flex justify-between">
          <div className="flex items-center rounded-full gap-2 dark:bg-dark-500 bg-white p-2 px-4">
            <img src={climate} alt="" />
            <p className="dark:text-white">Ibadan</p>
          </div>
          <div className="flex flex-col items-center text-dark-150 gap-[28px]">
            <HiMail className="text-2xl" />
            <RiTwitterFill className="text-2xl" />
            <RiInstagramFill className="text-2xl" />
            <RiLinkedinFill className="text-2xl" />
            <div className="h-[60px] w-[1px] dark:bg-[#323232] bg-dark-100"></div>
            <p className=" dark:text-dark-200 -rotate-90 mt-10">Let's connet</p>
          </div>
          {/* <div className="relative ">
            <div className="absolute bottom-full rounded-[5px] border-[0.3px] border-[#3a3a3a] right-0 flex flex-col">
              <div className="flex p-0 h-[40px] border-b-[0.3px] border-[#3a3a3a]">
                <div className="w-[56px] grid place-items-center  border-r-[0.3px] border-[#3a3a3a]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-dark-300 dark:fill-dark-200"
                  >
                    <g clip-path="url(#clip0_131_538)">
                      <path d="M8.85901 10.6928V8.72218H2.97337C2.60981 7.79448 2.61046 6.76361 2.9752 5.83637C3.33994 4.90912 4.04179 4.15408 4.93997 3.7227C5.83815 3.29131 6.86622 3.21549 7.81797 3.51044C8.76972 3.80539 9.57474 4.44929 10.0716 5.31299C10.4428 5.24158 10.8249 5.24852 11.1934 5.33337C11.5618 5.41821 11.9084 5.57909 12.2111 5.80569C12.5137 6.03229 12.7657 6.31961 12.9508 6.64925C13.136 6.97889 13.2502 7.34358 13.2862 7.71993C13.3222 8.09629 13.2792 8.47602 13.16 8.83479C13.0407 9.19355 12.8478 9.52345 12.5936 9.80332C12.3394 10.0832 12.0295 10.3069 11.6839 10.4601C11.3382 10.6132 10.9644 10.6925 10.5863 10.6928H8.8595H8.85901ZM4.91091 11.6798H9.84603V12.6668H4.91091V11.6798ZM2.93685 9.70575H7.87198V10.6928H2.93685V9.70575Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_131_538">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="w-[140px] p-[12px] dark:text-[#848484] font-inter text-xs">
                  Cloudy Sky
                </p>
                <div className="w-[55.6px] grid place-items-center border-l-[0.3px] border-[#3a3a3a]">
                  <input
                    type="radio"
                    name="bgSnd"
                    id=""
                    value="cloud"
                    className="w-[11px] h-[11px] text-green-200 bg-transparent"
                  />
                </div>
              </div>
              <div className="flex p-0 h-[40px] border-b-[0.3px] border-[#3a3a3a]">
                <div className="w-[56px] grid place-items-center  border-r-[0.3px] border-[#3a3a3a]">
                  <svg
                    className="fill-dark-300 dark:fill-dark-200"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_117_1294)">
                      <path d="M13.1389 2.4502V3.61686C13.1389 9.23261 10.0047 11.7835 6.13892 11.7835H5.02942C5.15308 10.0265 5.70025 8.96311 7.12825 7.69961C7.83058 7.07836 7.77108 6.71961 7.42517 6.92553C5.04283 8.34303 3.85983 10.2587 3.80733 13.3177L3.80558 13.5335H2.63892C2.63892 12.7384 2.70658 12.0169 2.84075 11.3565C2.70658 10.6017 2.63892 9.57736 2.63892 8.28353C2.63892 5.06178 5.2505 2.4502 8.47225 2.4502C9.63892 2.4502 10.8056 3.03353 13.1389 2.4502Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_117_1294">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="translate(0.888916 0.700195)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="w-[140px] p-[12px] dark:text-[#848484] font-inter text-xs">
                  Leaf Dreams
                </p>
                <div className="w-[55.6px] grid place-items-center border-l-[0.3px] border-[#3a3a3a]">
                  <input
                    type="radio"
                    name="bgSnd"
                    id=""
                    value="leaf"
                    className="w-[11px] h-[11px] text-green-200 bg-transparent"
                  />
                </div>
              </div>
              <div className="flex p-0 h-[40px] border-b-[0.3px] border-[#3a3a3a]">
                <div className="w-[56px] grid place-items-center  border-r-[0.3px] border-[#3a3a3a]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-dark-300 dark:fill-dark-200"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.7639 4.0874C6.87933 4.08743 6.99162 4.12505 7.08376 4.19457C7.17591 4.2641 7.2429 4.36174 7.27461 4.47274L7.85048 6.48865C7.97448 6.9228 8.20709 7.31818 8.52636 7.63745C8.84562 7.95671 9.241 8.18933 9.67515 8.31332L11.6911 8.88919C11.802 8.92097 11.8995 8.98799 11.969 9.08013C12.0385 9.17227 12.076 9.28452 12.076 9.3999C12.076 9.51529 12.0385 9.62753 11.969 9.71967C11.8995 9.81181 11.802 9.87884 11.6911 9.91061L9.67515 10.4865C9.241 10.6105 8.84562 10.8431 8.52636 11.1624C8.20709 11.4816 7.97448 11.877 7.85048 12.3112L7.27461 14.3271C7.24283 14.438 7.17581 14.5356 7.08367 14.605C6.99153 14.6745 6.87928 14.712 6.7639 14.712C6.64852 14.712 6.53627 14.6745 6.44413 14.605C6.35199 14.5356 6.28497 14.438 6.25319 14.3271L5.67732 12.3112C5.55332 11.877 5.32071 11.4816 5.00144 11.1624C4.68218 10.8431 4.2868 10.6105 3.85265 10.4865L1.83673 9.91061C1.72581 9.87884 1.62825 9.81181 1.5588 9.71967C1.48935 9.62753 1.45178 9.51529 1.45178 9.3999C1.45178 9.28452 1.48935 9.17227 1.5588 9.08013C1.62825 8.98799 1.72581 8.92097 1.83673 8.88919L3.85265 8.31332C4.2868 8.18933 4.68218 7.95671 5.00144 7.63745C5.32071 7.31818 5.55332 6.9228 5.67732 6.48865L6.25319 4.47274C6.2849 4.36174 6.35189 4.2641 6.44404 4.19457C6.53618 4.12505 6.64847 4.08743 6.7639 4.0874ZM13.1389 1.9624C13.2574 1.96234 13.3725 2.0019 13.466 2.07481C13.5594 2.14771 13.6258 2.24976 13.6546 2.36474L13.8373 3.09857C14.0045 3.7644 14.5244 4.28432 15.1902 4.45149L15.9241 4.63424C16.0393 4.66277 16.1416 4.72905 16.2147 4.82251C16.2879 4.91597 16.3276 5.03123 16.3276 5.1499C16.3276 5.26858 16.2879 5.38383 16.2147 5.47729C16.1416 5.57075 16.0393 5.63704 15.9241 5.66557L15.1902 5.84832C14.5244 6.01549 14.0045 6.5354 13.8373 7.20124L13.6546 7.93507C13.626 8.05026 13.5598 8.15259 13.4663 8.22572C13.3728 8.29885 13.2576 8.33859 13.1389 8.33859C13.0202 8.33859 12.905 8.29885 12.8115 8.22572C12.718 8.15259 12.6518 8.05026 12.6232 7.93507L12.4405 7.20124C12.3587 6.87429 12.1897 6.57571 11.9514 6.33741C11.7131 6.09911 11.4145 5.93005 11.0876 5.84832L10.3537 5.66557C10.2385 5.63704 10.1362 5.57075 10.0631 5.47729C9.98995 5.38383 9.95021 5.26858 9.95021 5.1499C9.95021 5.03123 9.98995 4.91597 10.0631 4.82251C10.1362 4.72905 10.2385 4.66277 10.3537 4.63424L11.0876 4.45149C11.4145 4.36975 11.7131 4.2007 11.9514 3.9624C12.1897 3.7241 12.3587 3.42551 12.4405 3.09857L12.6232 2.36474C12.652 2.24976 12.7184 2.14771 12.8118 2.07481C12.9052 2.0019 13.0204 1.96234 13.1389 1.9624ZM12.0764 11.5249C12.188 11.5248 12.2967 11.5599 12.3873 11.6251C12.4778 11.6904 12.5455 11.7824 12.5807 11.8883L12.8598 12.7262C12.9661 13.0429 13.214 13.2922 13.5313 13.3977L14.3693 13.6775C14.4748 13.713 14.5665 13.7806 14.6315 13.871C14.6965 13.9614 14.7314 14.0698 14.7314 14.1812C14.7314 14.2925 14.6965 14.401 14.6315 14.4913C14.5665 14.5817 14.4748 14.6494 14.3693 14.6848L13.5313 14.9646C13.2147 15.0708 12.9654 15.3187 12.8598 15.6361L12.58 16.474C12.5446 16.5795 12.4769 16.6713 12.3866 16.7363C12.2962 16.8012 12.1877 16.8362 12.0764 16.8362C11.9651 16.8362 11.8566 16.8012 11.7662 16.7363C11.6759 16.6713 11.6082 16.5795 11.5728 16.474L11.293 15.6361C11.2408 15.4797 11.153 15.3377 11.0364 15.2211C10.9199 15.1046 10.7778 15.0167 10.6215 14.9646L9.78352 14.6848C9.67801 14.6494 9.58628 14.5817 9.5213 14.4913C9.45632 14.401 9.42135 14.2925 9.42135 14.1812C9.42135 14.0698 9.45632 13.9614 9.5213 13.871C9.58628 13.7806 9.67801 13.713 9.78352 13.6775L10.6215 13.3977C10.9381 13.2915 11.1874 13.0436 11.293 12.7262L11.5728 11.8883C11.608 11.7825 11.6756 11.6905 11.766 11.6253C11.8563 11.5601 11.9649 11.525 12.0764 11.5249Z"
                    />
                  </svg>
                </div>
                <p className="w-[140px] p-[12px] dark:text-[#848484] font-inter text-xs">
                  The stars
                </p>
                <div className="w-[55.6px] grid place-items-center border-l-[0.3px] border-[#3a3a3a]">
                  <input
                    type="radio"
                    name="bgSnd"
                    id=""
                    value="stars"
                    className="w-[11px] h-[11px] text-green-200 bg-transparent"
                  />
                </div>
              </div>
              <div className="flex p-0 h-[40px] border-b-[0.3px] border-[#3a3a3a]">
                <div className="w-[56px] grid place-items-center  border-r-[0.3px] border-[#3a3a3a]">
                  <svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    className="fill-dark-300 dark:fill-dark-200"
                    <path
                      d="M4.88896 11.3499C3.5959 11.3499 2.49496 10.9027 1.58612 10.0083C0.676901 9.11382 0.22229 8.0298 0.22229 6.75618C0.22229 6.11452 0.343818 5.51893 0.586873 4.96943C0.829929 4.42032 1.16535 3.93188 1.59312 3.5041L4.88896 0.266602L8.18479 3.5041C8.61257 3.93188 8.94798 4.42032 9.19104 4.96943C9.4341 5.51893 9.55562 6.11452 9.55562 6.75618C9.55562 8.0298 9.10121 9.11382 8.19237 10.0083C7.28315 10.9027 6.18201 11.3499 4.88896 11.3499Z"
                      fill="#3A3A3A"
                    />
                  </svg>
                </div>
                <p className="w-[140px] p-[12px] dark:text-[#848484] font-inter text-xs">
                  Tear drop
                </p>
                <div className="w-[55.6px] grid place-items-center border-l-[0.3px] border-[#3a3a3a]">
                  <input
                    type="radio"
                    name="bgSnd"
                    id=""
                    value="tear"
                    className="w-[11px] h-[11px] text-green-200 bg-transparent"
                  />
                </div>
              </div>
              <div className="bg-[#292929] px-3 py-[6px] flex justify-between">
                <p className="text-[10px] text-gray-200">Allow Sound</p>
                <label className="switch" htmlFor="sound">
                  <input
                    type="checkbox"
                    id="sound"
                    onClick={(e) => {

                      let audio1 = new Audio(
                      );
                      const audioCtx = new AudioContext();
                      if (e.target.checked) {
                        audio1.currentTime = 0;
                        audio1.play();
                        
                      } else {
                        if (!audio1.paused) {
                          audio1.pause();
                          console.log(e.target.checked)
                        }
                      }
                    }}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <img src={audio} alt="" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Home;