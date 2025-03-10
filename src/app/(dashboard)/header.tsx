"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Logo from "../../Assets/navbar/logo.png.svg";
import Callicon from "../../Assets/navbar/call-icon.svg";
import Link from "next/link";

import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mediaText, setMediaText] = useState("Media");
  const [mediaLink, setMediaLink] = useState("/media");
  const pathname = usePathname();

    const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (pathname === "/getstarted") {
      setMediaText("Start Here");
      setMediaLink("/getstarted");
    } else {
      setMediaText("Media");
      setMediaLink("/media");
    }
  }, [pathname]);
  return (
      <div className="flex flex-col gap-y-3 shadow-[0px_8px_24px_0px_rgba(149,157,165,0.20)]">
          <div className="flex items-start justify-center sm:justify-start">
              <div className="m-auto bg-[#E6EDF9] flex items-center md:ml-8 ml-2 mr-2 rounded-bl-lg rounded-br-lg text-[12px] leading-[20px] font-medium overflow-hidden">
                  <Link
                      href="/services"
                      className="min-w-[50px] whitespace-nowrap text-center md:py-[14px] md:px-[32px] p-[8px] hover:bg-primary hover:text-white"
                  >
                      What we do
                  </Link>
                  <Link
                      href="/getstarted"
                      className="min-w-[50px] whitespace-nowrap text-center md:py-[14px] md:px-[32px] p-[8px] hover:bg-primary hover:text-white"
                  >
                      How we do
                  </Link>
                  <Link
                      href="/blog"
                      className="min-w-[50px] whitespace-nowrap text-center md:py-[14px] md:px-[32px] p-[8px] hover:bg-primary hover:text-white"
                  >
                      DIY
                  </Link>
                  <Link
                      href="/contactus"
                      className="min-w-[50px] whitespace-nowrap text-center md:py-[14px] md:px-[32px] p-[8px] hover:bg-primary hover:text-white"
                  >
                      Contact us
                  </Link>
              </div>
          </div>
          <div className="flex justify-between px-4 py-4 md:py-0 md:pb-[1px] items-center">
              <div className="flex justify-center gap-0 md:gap-7">
                  <button
                      className="md:hidden flex items-center justify-center p-2"
                      onClick={toggleMenu}
                  >
                      <FaBars className="text-xl" />
                  </button>
                  <Link href="/" className="flex-center">
                      <Image src={Logo} alt="logo-here" className="h-[30px]" />
                  </Link>
                  <div className="hidden md:flex justify-center gap-[4px] items-center font-medium text-[14px] leading-[60px]">
                      <Link
                          href="/faq"
                          className="mx-[20px] border-b-[3px] border-transparent hover:border-[#00587a] cursor-pointer"
                      >
                          FAQs
                      </Link>
                      <Link
                          href="/helplinks"
                          className="mx-[20px] border-b-[3px] border-transparent hover:border-[#00587a] cursor-pointer"
                      >
                          Help Links
                      </Link>
                      <div
                          onClick={() => {
                              document
                                  .getElementById("compare")
                                  ?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="mx-[20px] border-b-[3px] border-transparent hover:border-[#00587a] cursor-pointer"
                      >
                          Compare
                      </div>
                      <Link
                          href="/media"
                          className="mx-[20px] border-b-[3px] border-transparent hover:border-[#00587a] cursor-pointer"
                      >
                          Media
                      </Link>
                  </div>
              </div>

              <div className="flex gap-3">
                  <div
                      className="h-10 w-10 bg-[#2AA4F4] flex items-center justify-center rounded-md border border-[#0898E1] hover:bg-white hover:text-primary hover:outline-2 hover:outline-primary hover:outline group"
                      onClick={() => {
                          router.push("/contactus");
                      }}
                  >
                      <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                          <path
                              className="group-hover:fill-primary fill-white stroke-white group-hover:stroke-primary"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.62 8.79C6.06 11.62 8.38 13.93 11.21 15.38L13.41 13.18C13.68 12.91 14.08 12.82 14.43 12.94C15.55 13.31 16.76 13.51 18 13.51C18.55 13.51 19 13.96 19 14.51V18C19 18.55 18.55 19 18 19C8.61 19 1 11.39 1 2C1 1.45 1.45 1 2 1H5.5C6.05 1 6.5 1.45 6.5 2C6.5 3.25 6.7 4.45 7.07 5.57C7.18 5.92 7.1 6.31 6.82 6.59L4.62 8.79Z"
                              strokeWidth="1.5"
                          />
                      </svg>
                  </div>
                  <div className="p-2 text-[#0898E1] font-semibold border border-[#0898E1] hover:bg-primary hover:text-white rounded-md h-10 w-20 flex items-center justify-center disabled:cursor-not-allowed">
                      <Link href="/signin">Log In</Link>
                  </div>
              </div>
          </div>

          {isMenuOpen && (
              <div className="fixed inset-0 bg-white z-50">
                  <div className="flex justify-between p-6 shadow-[0_8px_24px_0px_rgba(149,157,165,0.20)]">
                      <Image src={Logo} alt="logo-here" />
                      <button
                          className="text-black text-2xl"
                          onClick={toggleMenu}
                      >
                          <FaTimes />
                      </button>
                  </div>
                  <div className="flex flex-col items-center space-y-[9px] m-2">
                      <Link
                          href="/faq"
                          className="text-black font-semibold text-[20px] leading-[20px] py-[13px] px-[20px] hover:bg-[#0898E1] rounded-md w-full hover:text-white"
                          onClick={() => {
                              setIsMenuOpen(false);
                          }}
                      >
                          FAQs
                      </Link>
                      <Link
                          href="/helplinks"
                          className="text-black font-semibold text-[20px] leading-[20px] py-[13px] px-[20px] hover:bg-[#0898E1] rounded-md w-full hover:text-white"
                          onClick={() => {
                              setIsMenuOpen(false);
                          }}
                      >
                          Help Links
                      </Link>
                      <Link
                          href="/"
                          className="text-black font-semibold text-[20px] leading-[20px] py-[13px] px-[20px] hover:bg-[#0898E1] rounded-md w-full hover:text-white"
                          onClick={() => {
                              setIsMenuOpen(false);
                          }}
                      >
                          Compare
                      </Link>
                      <Link
                          href="/"
                          className="text-black font-semibold text-[20px] leading-[20px] py-[13px] px-[20px] hover:bg-[#0898E1] rounded-md w-full hover:text-white"
                          onClick={() => {
                              setIsMenuOpen(false);
                          }}
                      >
                          Media
                      </Link>
                  </div>
              </div>
          )}
      </div>
  );
};

export default Header;
