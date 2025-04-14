import Avatar from "@/Assets/Dashboard/about/avatar-founder.svg";
import ServiceHeading from "@/components/custom_ui/ServiceHeading";
import { getAboutData } from "@/services/about";
import { AboutData } from "@/types/about";
const AboutSection = async () => {
    const res = (await getAboutData()) as { res: { data: AboutData } | null; err: any };
    const data = res?.res?.data;
    return (
        <div className="">
            {/* Intro Section */}
            <section dangerouslySetInnerHTML={{ __html: data?.description || "" }} className="pt-[29px] px-[16px] md:px-[180px] mx-auto text-[14px] md:text-[16px] text-[#13171F] leading-[24px] md:leading-[24px] gap-[20px] flex flex-col pb-[170px] ">
                {/* <p className="font-[400]">
                    Think financial planning and all you get is insurance
                    agents, mutual funds agents, and relationship managers
                    selling you the commission laded products without
                    understanding your goals and risk profile. If you try to Do
                    IT YOURSELF, you get countless opinions from family,
                    friends, and social media. Fee-only planners either charge a
                    high flat fee or charge a percentage of assets under advice.
                </p>
                <h5 className="font-[400]">
                    At PLNR, we're challenging all that.
                </h5>
                <p className="font-[400]">
                    We take care of risk profiling, goal planning, asset
                    allocation, product selection, tax efficiency, and
                    rebalancing, all at a very affordable fee. Plus, we take
                    care of it in a transparent and unbiased way.
                </p>
                <p className="font-[400]">
                    So, you never have to worry about your finances anymore.
                </p> */}
            </section>

            {/* Vision and Mission Section */}
            <section className="flex flex-col px-[16px] md:px-0 text-center gap-[57px] pb-[140px]">
                {data?.visionMission?.map((item) => (
                    <div key={item._id} className="w-[300px] xs:w-fit m-auto text-center">
                        <ServiceHeading
                            title={item.title}
                            boldWords={[item.title.toLowerCase().includes("vision") ? "vision" : "mission"]}
                        />
                        <span className="text-black/85  block px-[10px]">{item.description}</span>
                    </div>
                ))}
                {/* <div className="w-[300px] xs:w-fit m-auto">
                    <ServiceHeading
                        title="Our Mission"
                        boldWords={["mission"]}
                    />
                    <span className=" text-black/85 text-center px-[10px]">
                        We’re on a mission to make financial planning simple and
                        affordable.
                    </span>
                </div> */}
            </section>

            {/* Team Section */}
            <section className="bg-[#F9F9F9] px-[16px] md:px-0 text-center pt-[60px]">
                {data?.meetTheTeam && (
                    <>
                        <ServiceHeading title={data.meetTheTeam.title} boldWords={["the", "team"]} />

                        <div>
                            <img
                                src={data.meetTheTeam.image}
                                alt={data.meetTheTeam.imageAlt}
                                className="w-[215px] h-[215px] mx-auto rounded-full object-cover mb-4"
                            />

                            <div className="flex flex-col gap-[15px] mt-2 text-[14px] md:text-[16px] leading-[19px] font-[300]">
                                <h3 className="text-[22px] font-[500] leading-[25px] text-gray-800">
                                    {data.meetTheTeam.name}
                                </h3>
                                <h2>{data.meetTheTeam.position}</h2>
                                <p>{data.meetTheTeam.education}</p>
                                {data.meetTheTeam.description?.map((desc, i) => (
                                    <p key={i}>{desc}</p>
                                ))}
                            </div>
                        </div>
                    </>
                )}
                {/* <ServiceHeading
                    title="Meet The   Team"
                    boldWords={["the", "team"]}
                />
                <div>
                    <img
                        src={Avatar.src}
                        alt="Ajay Pruthi"
                        className="w-[215px] h-[215px] mx-auto rounded-full object-cover mb-4"
                    />
                    <div className="flex flex-col gap-[15px] mt-2 text-[14px] md:text-[16px] leading-[19px] font-[300]">
                        <h3 className="text-[22px] font-[500] leading-[25px] text-gray-800">
                            Ajay Pruthi
                        </h3>
                        <h2>Founder</h2>
                        <p>
                            K.J. Somaiya Institute of Management, NIT Jalandhar
                        </p>
                        <p>
                            SEBI RIA, CFPCM, Associate of Insurance Institute of
                            India (AIII)
                        </p>
                        <p>
                            15+ years of experience in personal financial
                            planning space
                        </p>
                        <p>
                            Experience in handling 500+ fee-only financial
                            planning clients
                        </p>
                    </div>
                </div> */}
            </section>
        </div>
    );
};

export default AboutSection;
