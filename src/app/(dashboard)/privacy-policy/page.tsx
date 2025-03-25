import BannerHeading from '@/components/custom_ui/BannerHeading'
import BannerImg from "@/Assets/privacy/privacy.jpg"
import React from 'react'
import PrivacyPolicy from '@/components/dashboard/privacyPolicy/privacy_policy'


const Page = () => {
    return (
        <div>
            <BannerHeading img={BannerImg} heading='Privacy' highlightedText='Policy' />
            <PrivacyPolicy />
        </div>
    )
}

export default Page
