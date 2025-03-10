import FAQSection from '@/components/dashboard/faq/faq-section'
import Hero from '@/components/dashboard/faq/Hero'
import { constructMetadata } from '@/lib/utils'
import React from 'react'

export const metadata=constructMetadata()
function page() {
  return (
    <div className="max-w-[1920px] flex flex-col items-center m-auto justify-between">
    <Hero/>
    <FAQSection/>
</div>

)
}

export default page