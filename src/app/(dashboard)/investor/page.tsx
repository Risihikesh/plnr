import BannerHeading from '@/components/custom_ui/BannerHeading'
import InvestmentAdviserDetails from '@/components/dashboard/investorChapter/InvestmentAdviser'
import RegulatoryDisclosureModal from '@/components/dashboard/regulatory_modal/RegulatoryModal'
import BannerImg from "@/Assets/home/investor_img.svg"
import React from 'react'


const Page = () => {
    return (
        <div>
            <BannerHeading img={BannerImg} heading='Investor' highlightedText='Charter' />
            <InvestmentAdviserDetails />
            {/* <RegulatoryDisclosureModal /> */}
        </div>
    )
}

export default Page
