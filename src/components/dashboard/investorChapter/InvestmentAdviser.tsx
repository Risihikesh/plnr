import React from "react";

const InvestmentAdviserDetails: React.FC = () => {
    const sections = [
        {
            title: "A. Vision and Mission Statements for Investors",
            content: (
                <>
                    <h3 className="font-[700] text-[16px] leading-[24px]">Vision</h3>
                    <p>Invest with knowledge & safety</p>

                    <h3 className="font-semibold mt-4">Mission</h3>
                    <ul className="list-disc pl-[40px] leading-[24px] text-[16px]">
                        <li className="text-start " >
                            To enter into an agreement with the client providing all details, including fee details, aspect of
                            Conflict-of-Interest disclosure, and maintaining confidentiality of information.
                        </li>
                        <li>To do proper and unbiased risk profiling and suitability assessment of the client.</li>
                        <li>To obtain registration with Know Your Client Registration Agency (KRA) and Central Know Your Customer Registry (CKYC).</li>
                        <li>To conduct audits annually.</li>
                        <li>To disclose the status of complaints on its website.</li>
                        <li>
                            To disclose the name, proprietor name, type of registration, registration number, validity, complete address with telephone
                            number, and associated SEBI regional/local Office details to its website.
                        </li>
                        <li>To employ only qualified and certified employees.</li>
                        <li>To deal with clients only from official numbers.</li>
                        <li>
                            To maintain records of interactions with all clients, including prospective clients (prior to onboarding), where any
                            conversation related to advice has taken place.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: "B. Details of Business Transacted by the Investment Adviser with Respect to the Investors",
            content: (
                <ul className="list-disc space-y-2 pl-[40px] text-[16px]">
                    <li>
                        <strong>Onboarding of Clients:</strong>
                        <ul className="list-disc list-inside ml-5 my-2">
                            <li>Sharing of agreement copy.</li>
                            <li>Completing KYC of clients.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Disclosure to Clients:</strong>
                        <ul className="list-disc list-inside ml-5 my-2">
                            <li>To provide full disclosure about its business, affiliations, and compensation in the agreement.</li>
                            <li>To not access client accounts or holdings for offering advice.</li>
                            <li>To disclose the risk profile to the client.</li>
                        </ul>
                    </li>
                    <li className="font-bold">
                        To provide investment advice to the client based on the risk-profiling of the clients and suitability of the
                        client.
                    </li>
                </ul>
            ),
        },
        {
            title: "D. Details of Grievance Redressal Mechanism and How to Access It",
            content: (
                <p className="text-[16px]  font-[700]">
                    In case of any grievance/complaint, an investor should approach the concerned Investment Adviser and ensure that the grievance is
                    resolved within 30 days. If unresolved, complaints can be logged with SEBI on SEBI's SCORES portal for further redressal.
                </p>
            ),
        },
        {
            title: "E. Expectations from the Investors (Responsibilities of Investors)",
            content: (
                <>
                    <h3 className="font-[700] text-[16px] leading-[22px]">Do's</h3>
                    <ul className="list-disc  space-y-2 pl-[40px] my-2 text-[16px]">
                        <li>Always deal with SEBI-registered Investment Advisers.</li>
                        <li>Ensure that the Investment Adviser has a valid registration certificate.</li>
                        <li>Pay only advisory fees to your Investment Adviser. Make payments of advisory fees through banking channels only and maintain duly signed receipts mentioning the details of your payments.</li>
                        <li>Always ask for your risk profiling before accepting investment advice. Insist that Investment Adviser provides advisory strictly on the basis of your risk profiling and take into account available investment alternatives.</li>
                        <li>Ask all relevant questions and clear your doubts with your Investment Adviser before acting on advice.</li>
                        <li>Assess the risk-return profile of the investment as well as the liquidity and safety aspects before making investments.</li>
                        <li>Insist on getting the terms and conditions in writing duly signed and stamped. Read these terms and conditions carefully particularly regarding advisory fees, advisory plans, category of recommendations etc. before dealing with any Investment Adviser.</li>
                        <li>Be vigilant in your transactions.</li>
                        <li>Approach the appropriate authorities for redressal of your doubts / grievances.</li>
                        <li>Inform SEBI about Investment Advisers offering assuredor guaranteed returns.</li>
                    </ul>

                    <h3 className="font-semibold mt-4">Don'ts</h3>
                    <ul className="list-disc  space-y-2 pl-[40px] text-[16px] my-2">
                        <li>Don't fall for stock tips offered under the pretext of investment advice.</li>
                        <li>Do not provide funds for investment to the Investment Adviser.</li>
                        <li>Don't fall for the promise of indicative or exorbitant or assured returns by the Investment Advisers. Don't let greed overcome rational investment
                            decisions.</li>
                        <li>Don't fall prey to luring advertisements or market rumors.</li>
                        <li>Avoid doing transactions only on the basis of phone calls or messages from any Investment adviser or its representatives.</li>
                        <li>Don't take decisions just because of repeated messages and calls by Investment Advisers.</li>
                        <li>Don't rush into making investments that do not match your risk-taking appetite and investment goals.</li>
                        <li>Do not share login credential and password of your trading and demat accounts with the Investment Adviser.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "F. Governing Law and Jurisdiction",
            content: (
                <p className="font-[700] text-[16px] text-black leading-[22px]">
                    In case of any dispute, either judicial or quasi-judicial the same will be subject to the exclusive jurisdiction of the courts in Mumbai.These terms shall be construed in accordance with the laws prevalent in India and are subject to SEBI guidelines, circulars, press releases or notifications that may be issued by SEBI from time to time or the Government of India, to regulate the activities of RIAs (Registered Investment Advisors).
                </p>
            ),
        },
    ];

    return (
        <div className="p-6 space-y-12">
            {sections.map((section, index) => (
                <div key={index} className="space-y-4 w-full  sm:w-[90%] md:w-[80%] xl:w-[70%] m-auto px-[16px]">
                    <h2 className="text-[21px] font-[500] text-[#00587A] ">{section.title}</h2>
                    <div className="  text-black/85">{section.content}</div>
                </div>
            ))}
        </div>
    );
};

export default InvestmentAdviserDetails;
