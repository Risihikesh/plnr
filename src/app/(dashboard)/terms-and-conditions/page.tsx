import BannerHeading from '@/components/custom_ui/BannerHeading'
import BannerImg from "@/Assets/TC/tc.png"
import React from 'react'
import TermsAndCondition from '@/components/dashboard/termandCondition/terms_condition'


const Page = () => {
    return (
        <div>
            <BannerHeading img={BannerImg} heading='Terms &' highlightedText='Conditions' />
            <TermsAndCondition />
        </div>
    )
}

export default Page
