import Image from "next/image";
import Footerlogo from "../../Assets/footer/footer-logo.png.svg";
import Facebooklogo from "../../Assets/footer/facebook_Logo.svg.svg";
import Twitterlogo from "../../Assets/footer/Twitter_Logo.svg.svg";
import Youtubelogo from "../../Assets/footer/youtube_Logo.svg fill.svg";
import Instagramlogo from "../../Assets/footer/insta.svg fill.svg";
import Link from "next/link";
import Footermailicon from "../../Assets/footer/footer_mail_icon.svg";
import Footercallicon from "../../Assets/footer/footer_call_icon.svg";
import Footerlocationicon from "../../Assets/footer/footer_location_icon.svg";
import Footerbuttoncallicon from "../../Assets/footer/footer_button_call_icon.svg";
import Footerbuttonwhatsappicon from "../../Assets/footer/footer_button_whatsapp_icon.svg";
import Onfooter from "./on-footer";

const Footer = () => {
  return (
      <div className="flex flex-col mt-5">
          <Onfooter />
          <div className="flex flex-col bg-[#04344D] text-white md:py-10 md:px-[50px] xl:px-[100px] p-2 gap-y-10">
              <div className="flex flex-col md:flex-row justify-between gap-10">

                  <div className="flex flex-col gap-y-2">
                      <Link href="/">
                          <Image
                              src={Footerlogo}
                              alt="no-footer-logo"
                              className="ml-[-10px]"
                          />
                      </Link>
                      <div className="flex gap-2 mt-[-20px]">
                          <Link href="/">
                              <Image
                                  src={Facebooklogo}
                                  alt="no-facebook-logo"
                                  className="w-[28px]"
                              />
                          </Link>
                          <Link href="/">
                              <Image
                                  src={Twitterlogo}
                                  alt="no-twitter-logo"
                                  className="w-[28px]"
                              />
                          </Link>
                          <Link href="/">
                              <Image
                                  src={Youtubelogo}
                                  alt="no-youtube-logo"
                                  className="w-[28px]"
                              />
                          </Link>
                          <Link href="/">
                              <Image
                                  src={Instagramlogo}
                                  alt="no-instagram-logo"
                                  className="w-[28px]"
                              />
                          </Link>
                      </div>
                      <p className="text-[14px] leading-[21px]">
                          2021 PLNR - All rights reserved
                      </p>
                  </div>
                  
                  <div className="grid sm:grid-cols-4 gap-10 md:w-[1023px] ">
                      
                      <div className="flex flex-col gap-y-4 md:gap-y-10 ">
                          <Link href="/about" className="font-semibold text-[20px] leading-[31px]">
                              About Us
                          </Link>
                          <div className="flex flex-col gap-y-2 font-light text-sm">
                              <Link href="/about" className="text-[16px] leading-[24px]">The Team</Link>
                              <Link href="/" className="text-[16px] leading-[24px]">Terms and Conditions</Link>
                              <Link href="/" className="text-[16px] leading-[24px]">Privacy Policy</Link>
                          </div>
                      </div>

                      <div className="flex flex-col gap-y-4 md:gap-y-10 ">
                          <Link href="/" className="font-semibold text-[20px] leading-[31px]">
                              Learn More
                          </Link>
                          <div className="flex flex-col gap-y-2 font-light text-sm">
                              <Link href="/blog" className="text-[16px] leading-[24px]">Blog</Link>
                              <Link href="/" className="text-[16px] leading-[24px]">Calculators</Link>
                              <Link href="/details" className="text-[16px] leading-[24px]">Sample Financial Plan</Link>
                              <Link href="/" className="text-[16px] leading-[24px]">Services</Link>
                          </div>
                      </div>

                      <div className="flex flex-col gap-y-4 md:gap-y-10 ">
                          <Link href="/" className="font-semibold text-[20px] leading-[31px]">
                              Client Corner
                          </Link>
                          <div className="flex flex-col gap-y-2 font-light text-sm">
                              <Link href="/disclosures" className="text-[16px] leading-[24px]">
                                  Regulatory Disclosures
                              </Link>
                              <Link href="/disclosures" className="text-[16px] leading-[24px]">SEBI Disclosures</Link>
                              <Link href="/investor" className="text-[16px] leading-[24px]">Investor Charter</Link>
                              <Link href="/grievance" className="text-[16px] leading-[24px]">
                                  Grievance Redressal/Escalation Matrix
                              </Link>
                          </div>
                      </div>

                      <div className="flex flex-col gap-y-4 md:gap-y-10">
                          <Link href="/" className="font-semibold text-[20px] leading-[31px]">
                              Get in Touch
                          </Link>
                          <div className="flex flex-col gap-y-4 font-light text-sm">
                              <div className="flex gap-2">
                                  <Image
                                      src={Footermailicon}
                                      alt="no-mail-icon"
                                  />
                                  <p className="text-[16px] leading-[24px]">support@plnr.in</p>
                              </div>
                              <div className="flex gap-2">
                                  <Image
                                      src={Footercallicon}
                                      alt="no-call-icon"
                                  />
                                  <p className="text-[16px] leading-[24px]">+91 8860000332</p>
                              </div>
                              <div className="flex gap-2">
                                  <Image
                                      src={Footerlocationicon}
                                      alt="no-mail-icon"
                                  />
                                  <p className="text-[16px] leading-[24px]"> Shop No. 2, 1st Floor, Tulip</p>
                              </div>
                              <p className="text-[16px] leading-[24px]">Plaza,</p>
                              <p className="text-[16px] leading-[24px]">Plot No. 114, Sector 13,</p>
                              <p className="text-[16px] leading-[24px]">Kharghar</p>
                              <p className="text-[16px] leading-[24px]">Navi Mumbai-410210</p>
                          </div>
                      </div>

                  </div>
              </div>

              <div className="flex flex-col gap-y-4 md:gap-y-10 pb-4 w-[98%] md:w-[95%]">
                  <p className="font-medium text-base">
                      Name of Advisor : PLNR INVESTMENT ADVISORS | SEBI
                      Registration Number - INA000018966 | Registration Type :
                      Non-Individual
                  </p>
                  <p className="text-[14px] leading-[22px] font-normal">
                      Registration granted by SEBI, membership of BSE
                      Administration and Supervision Limited (BASL) and
                      certification from National Institute of Securities
                      Markets (NISM) in no way guarantee performance of the
                      Investment Adviser or provide any assurance of returns to
                      investors. Investment in securities market are subject to
                      market risks. Read all the related documents carefully
                      before investing.
                  </p>
              </div>
          </div>
          <div className="md:hidden flex p-4 items-center justify-center gap-10 w-full">
              <div className="flex bg-[#0898E1] p-4 rounded-lg text-white font-bold gap-2">
                  <Image src={Footerbuttoncallicon} alt="no-img" />
                  <p className=" whitespace-nowrap">Free Call</p>
              </div>
              <div className="flex bg-[#25D366] p-4 rounded-lg text-white font-bold gap-2">
                  <Image src={Footerbuttonwhatsappicon} alt="no-img" />
                  <p className=" whitespace-nowrap">Whatsapp</p>
              </div>
          </div>
      </div>
  );
};

export default Footer;
